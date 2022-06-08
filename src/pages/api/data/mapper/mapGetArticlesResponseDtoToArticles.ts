import { Mapper } from '@common/utils';
import { GetArticleResponseDto } from '../dto';
import { Article } from '../model';

const mapGetArticlesResponseDtoToArticles: Mapper<GetArticleResponseDto[], Article[]> = (dto) => {
  return dto.map((item) => ({
    id: item.id,
    author: item.author,
    series: item.series,
    title: item.title,
    content: item.content,
    thumbnail: item.thumbnail,
    viewCount: item.viewCount,
    isPublic: item.isPublic,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    deletedAt: item.deletedAt
  }));
};

export default mapGetArticlesResponseDtoToArticles;
