import { APIGatewayProxyResult } from 'aws-lambda';

const formatResponse = (statusCode: number, response: any): APIGatewayProxyResult => {
   return {
      statusCode,
      body: JSON.stringify(response),
   };
};

export { formatResponse };
