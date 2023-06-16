import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Article } from '../../domain/article';
import { IArticleRepository } from '../IArticleRepository';

class ArticleRepositoty implements IArticleRepository {
   constructor(private readonly dbClient: DocumentClient, private readonly tableName: string) {}

   async getAll(): Promise<Article[]> {
      const result = await this.dbClient
         .scan({
            TableName: this.tableName,
         })
         .promise();

      return result.Items as Article[];
   }

   async create(params: Article): Promise<Article> {
      await this.dbClient
         .put({
            TableName: this.tableName,
            Item: params,
         })
         .promise();

      return params;
   }
}

export { ArticleRepositoty };
