import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { v4 } from 'uuid';
import { CreateArticleUseCase } from './usecases/createArticle/createArticleUseCase';
import { articleRepositoty } from './repositories/dynamoDB';
import { formatResponse } from '../../libs/formatResponse';
import { CreateArticleDto } from './dtos/createArticleDto';
import { Validation } from '../../libs/validation';

export const handler: APIGatewayProxyHandler = async (event): Promise<APIGatewayProxyResult> => {
   const { title, description } = JSON.parse(event.body);

   const id: string = v4();
   const created: string = new Date().toISOString();
   const params = {
      id,
      title,
      description,
      created,
   };

   const dtoToValidate = Object.assign(new CreateArticleDto(), params);
   const errors = await Validation.parameters(dtoToValidate, params);

   if (errors) return formatResponse(400, errors);

   const application = new CreateArticleUseCase(articleRepositoty);
   const response = await application.execute(params);

   return formatResponse(200, response);
};
