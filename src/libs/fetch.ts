import fetch from 'node-fetch';

const apiGet = (resource: string): Promise<any> => {
   return fetch(`https://swapi.py4e.com/api/${resource}`)
      .then((res) => {
         return new Promise((resolve) => resolve(res.json()));
      })
      .then((res) => {
         return new Promise((resolve) => resolve((res as any).results));
      });
};

export { apiGet };
