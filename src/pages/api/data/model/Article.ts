import { Nullable } from '@common/utils';
import { Series, User } from './index';

export interface Article {
  id: number;
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
