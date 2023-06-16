import * as AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const dbClient = (): DocumentClient => {
   return new AWS.DynamoDB.DocumentClient();
};

export { dbClient };
