
import pandas as pd
import praw
from praw.models import MoreComments

reddit = praw.Reddit(user_agent="Comment Extraction (by /u/SillyGooseDuck)",
                     client_id="CLIENT_ID", client_secret="CLIENT_SECRET")


posts = []

subreddits = ["Aritzia", "Lululemon"]

comments_data = []
seen = set()

for subreddit in subreddits:
    for submission in reddit.subreddit(subreddit).top("all"):
        submission.comments.replace_more(limit=0) # loads internal comments into the comments list, so we can iterate through them

        for comment in submission.comments:
            if comment.body in ["[deleted]", "[removed]"]: # ignore deleted or removed comments
                continue

            unique_key = (subreddit, submission.title, comment.body)

            if unique_key in seen: # check if this comment has already been seen for this subreddit and post title
                continue

            seen.add(unique_key) # add this comment to the seen set

            comments_data.append({ # save all comments data 
                "subreddit": subreddit,
                "post_title": submission.title,
                "comment": comment.body,
                "comment_score": comment.score,
                "post_score": submission.score,
                "num_comments": submission.num_comments,
                "url": submission.url
            })

posts = pd.DataFrame(comments_data)

# save it 
posts.to_csv("../public/reddit_comments.csv", index=False)


from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()

# function to calculate sentiment scores for a given sentence
def sentiment_scores(sentence):

    if not isinstance(sentence, str):
        return 0
     
    sentiment_dict = analyzer.polarity_scores(sentence) # find polarity scores of each sentence
    
    
    if sentiment_dict['compound'] > 0.05:
        return 1
    
    elif sentiment_dict['compound'] < -0.05:
        return -1   
    else:
        return 0

posts['sentiment_result'] = posts['comment'].apply(sentiment_scores)

def compound_score(sentence):
    if not isinstance(sentence, str):
        return 0
    return analyzer.polarity_scores(sentence)["compound"]

posts["sentiment_compound_score"] = posts["comment"].apply(compound_score)

# finding avg sentiment score for each post
avg_sentiment_scores = posts.groupby('post_title')['sentiment_result'].mean().reset_index()

positive = (posts['sentiment_result'] == 1).mean()
negative = (posts['sentiment_result'] == -1).mean()
neutral = (posts['sentiment_result'] == 0).mean()
print(f"Average sentiment score for each post:\n{avg_sentiment_scores}")
print(f"Overall average sentiment score: {posts['sentiment_result'].mean()}")


# sentiment counts 
sentiment_counts = posts["sentiment_result"].value_counts(normalize=True) * 100

# average sentiment score for each post
sentiment_by_subreddit = posts.groupby("subreddit")["sentiment_compound_score"].mean().reset_index()


# finding most controversial posts (posts with highest standard deviation in sentiment scores)
controversial_posts = (
    posts.groupby("post_title").agg(
        avg_sentiment=("sentiment_score", "mean"),
        comment_count=("comment", "count"),
        avg_comment_score=("comment_score", "mean")
    )
    .reset_index()
    .sort_values(["avg_sentiment", "comment_count"], ascending=[True, False])
)

# most discussed posts 
most_discussed = (
    posts.groupby("post_title")
    .agg(comment_count=("comment", "count"), avg_sentiment=("sentiment_score", "mean"))
    .reset_index()
    .sort_values("comment_count", ascending=False)
)


# keyword frequency
from collections import Counter
import re

stopwords = {"the", "and", "is", "it", "to", "a", "of", "for", "in", "on", "this", "that", "i", "my", "was", "with"}

words = []

for comment in posts["comment"]:
    tokens = re.findall(r"\b[a-zA-Z]{3,}\b", comment.lower())
    words.extend([word for word in tokens if word not in stopwords])

top_keywords = Counter(words).most_common(20)


# product/category level sentiment analysis 
categories = {
    "pants": ["pants", "trousers", "melina", "effortless"],
    "dresses": ["dress", "dresses"],
    "jackets": ["jacket", "coat", "super puff", "blazer"],
    "bags": ["bag", "bags", "tote"],
    "quality": ["quality", "fabric", "material"],
    "pricing": ["price", "expensive", "cost"]
}

category_results = []

for category, keywords in categories.items():
    matching = posts[posts["comment"].str.lower().apply(
        lambda text: any(keyword in text for keyword in keywords) if isinstance(text, str) else False
    )]

    if len(matching) > 0:
        category_results.append({
            "category": category,
            "mentions": len(matching),
            "avg_sentiment": matching["sentiment_score"].mean()
        })