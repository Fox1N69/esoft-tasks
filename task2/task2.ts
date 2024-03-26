function deepCopy<T>(obj: T, cache = new WeakMap()): T {
  if (obj && typeof obj === 'object') {
      if (cache.has(obj)) {
          throw new Error('Циклическая ссылка обнаружена');
      }
      cache.set(obj, true);
  }

  if (obj === null || typeof obj !== 'object') {
      return obj;
  }

  const copy: any = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          copy[key] = deepCopy(obj[key], cache);
      }
  }

  const symbolKeys = Object.getOwnPropertySymbols(obj);
  symbolKeys.forEach((symbolKey) => {
      copy[symbolKey] = deepCopy(obj[symbolKey], cache);
  });

  return copy;
}

const obj = {
  a: 1,
  b: {
      c: 2,
      d: [3, 4]
  }
};
const objCopy = deepCopy(obj);
console.log(objCopy);