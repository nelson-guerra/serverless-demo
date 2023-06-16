const translateKeys = (data, keys) => {
   return data.map((obj) => {
      const newObj = {};
      for (let i in obj) {
         newObj[keys[i]] = obj[i];
      }
      return newObj;
   });
};

export { translateKeys };
