export interface CreateCommentDto {
  body: {
    articleId: number;
    userId: number;
    commentText: string;
  };
}
