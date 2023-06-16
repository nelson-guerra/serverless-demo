import { IArticleRepository } from '../../repositories/IArticleRepository';
import { Article } from '../../domain/article';

export class GetArticlesUseCase {
   private articleRepo: IArticleRepository;

   constructor(articleRepo: IArticleRepository) {
      this.articleRepo = articleRepo;
   }

   async execute(): Promise<Article[]> {
      const articles: Article[] = await this.articleRepo.getAll();

      return articles;
   }
}
