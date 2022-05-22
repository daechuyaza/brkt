import Axios from 'axios';
import { GetArticleResponseDto } from '../data/dto';
import mapGetArticlesResponseDtoToArticles from '../data/mapper';
import { Article } from '../data/model';

export default class ArticleRepository {
    /**
     * 아티클 리스트 조회
     */
    getArticleList = async (): Promise<{ articles: Article[] }> => {
        const dto: GetArticleResponseDto[] = await Axios.get('http://localhost:3000/api/articles').then((response) => response.data); // todo: 글로벌 axios 핸들러 적용

        return {
            articles: mapGetArticlesResponseDtoToArticles(dto)
        };
    };
}
