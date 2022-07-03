export type ArticleType = {
  title: string;
  author: string;
  thumbnail: string;
  authorThumbnail: string;
  updatedAt: string;
  id: string;
  tags: {
    name: string;
    id: string;
  }[];
  content: string;
};
