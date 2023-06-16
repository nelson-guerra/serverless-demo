import { dbClient } from './db/dbClient';
import { ArticleRepositoty } from './articleRepositoty';

const { DYNAMODB_TABLE } = process.env;

const articleRepositoty = new ArticleRepositoty(dbClient(), DYNAMODB_TABLE);

export { articleRepositoty };
