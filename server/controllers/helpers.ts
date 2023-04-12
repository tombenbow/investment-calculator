export const parseParams = (paramsObject: any) => {
  for (let key in paramsObject) {
    paramsObject[key] = Number(paramsObject[key]);
  }
};
