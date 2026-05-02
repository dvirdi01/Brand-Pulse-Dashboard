
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


# data cleaning 
indexNames = posts[(posts.body == '[removed]') | (posts.body == '[deleted]')].index
posts.drop(indexNames, inplace=True)

# save it 
posts.to_csv("../public/reddit_comments.csv", index=False)