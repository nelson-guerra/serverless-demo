import { IArticleRepository } from '../../repositories/IArticleRepository';
import { Article } from '../../domain/article';

export class CreateArticleUseCase {
   private articleRepo: IArticleRepository;

   constructor(articleRepo: IArticleRepository) {
      this.articleRepo = articleRepo;
   }

   async execute(params: Article): Promise<Article> {
      const articleCreated: Article = await this.articleRepo.create(params);

      return articleCreated;
   }
}
