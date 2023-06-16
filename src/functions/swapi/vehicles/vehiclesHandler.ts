import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { formatResponse } from '../../../libs/formatResponse';
import { apiGet } from '../../../libs/fetch';
import { keys } from './keys';
import { translateKeys } from '../../../libs/translateKeys';

export const handler: APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
   const data = await apiGet('vehicles');
   const response = translateKeys(data, keys);

   return formatResponse(200, response);
};
