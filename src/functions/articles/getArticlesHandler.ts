import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { GetArticlesUseCase } from './usecases/getArticles/getArticlesUseCase';
import { articleRepositoty } from './repositories/dynamoDB';
import { formatResponse } from '../../libs/formatResponse';

export const handler: APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
   const application = new GetArticlesUseCase(articleRepositoty);
   const response = await application.execute();

   return formatResponse(200, response);
};
