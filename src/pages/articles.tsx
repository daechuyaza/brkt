import { NextPage } from "next/types";
import { useQuery } from "react-query";
import { Article } from "./api/data/model";
import ArticleRepository from "./api/repository";

const getArticleList = (): Promise<{ articles: Article[] }> => new ArticleRepository().getArticleList();

export async function getStaticProps() {
    const { articles } = await getArticleList();

    return {
        props: {
            articles
        }
    };
}

type Props = {
    articles: Article[];
};

const Articles: NextPage<Props> = ({ articles }) => {
    const { data: list, error } = useQuery('articleList', getArticleList);

    return (
        <div>
            {articles.map((item, index) => (
                <ul key={item.id}>{item.title}</ul>
            ))}
        </div>
    );
}

export default Articles;
