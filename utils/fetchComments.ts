import { Comment } from "../typings";

export const fetchComments = async (tweetId: string) => {
  const res = await fetch(`/api/getComment?tweetId=${tweetId}`);

  const comments: Comment[] = await res.json();
  return comments;
};
