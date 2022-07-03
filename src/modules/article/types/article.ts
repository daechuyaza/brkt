export type ArticleType = {
  authorId: number;
  author: string;
  authorThumbnail: string;
  title: string;
  content: string;
  thumbnail: string;
  id: number;
  tags: {
    name: string;
    id: string;
  }[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  viewCound: number;
  isPublic: boolean;
};
