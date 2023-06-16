import { Article } from '../domain/article';

export interface IArticleRepository {
   getAll(): Promise<Article[]>;
   create(params: Article): Promise<Article>;
}
