# serverless-demo

<!--
title: TODO
description: This example shows your how to create a TypeScript powered HTTP API with DynamoDB.
layout: Doc
framework: v1
platform: AWS
language: nodeJS
authorLink: 'https://github.com/QuantumInformation'
authorName: Nikos
authorAvatar: 'https://avatars0.githubusercontent.com/u/216566?v=4&s=140'
-->

# Uso

Para instalar los paquetes

`npm i`

Para desplegar en aws lambda

`npm run deploy`

## API SWAPI

Muestra la lista de personas con los atributos traducidos al español:

```bash
GET https://XXXXXXX.execute-api.us-east-1.amazonaws.com/swapi-people
```

Muestra la lista de vehículos con los atributos traducidos al español:

```bash
GET https://XXXXXXX.execute-api.us-east-1.amazonaws.com/swapi-vehicles
```

### Tabla de Articulos en una base de datos DynamoDB

Agrega articulos a la tabla:

```bash
POST https://XXXXXXX.execute-api.us-east-1.amazonaws.com/articles/add --data '{ "title": "Courses - Serverless", "description": "Learn all about workflow orchestration with AWS Step Functions in 2 hours" }'
```

Mustra la lista de articulos que se agregaron:

```bash
GET https://XXXXXXX.execute-api.us-east-1.amazonaws.com/articles/list
```
