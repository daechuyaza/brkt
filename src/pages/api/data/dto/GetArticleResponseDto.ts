import { Nullable } from '@common/utils';

import { Article, Series, User } from '../model';

export interface GetArticleResponseDto {
  id: number;
  authorId: number;
  seriesId: Nullable<number>;
  author: User;
  series: Nullable<Series>;
  title: string;
  content: string;
  thumbnail: string;
  viewCount: number;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Nullable<Date>;
}
