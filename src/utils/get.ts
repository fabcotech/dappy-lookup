export const get = (obj: any, path: string | string[], defValue?: any) => {
  // If path is not defined or it has false value
  if (!path) return undefined;
  // Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
  // Regex explained: https://regexr.com/58j0k
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
  // Find value
  if (pathArray) {
    const result = pathArray.reduce(
      (prevObj, key) => prevObj && prevObj[key],
      obj,
    );
    // If found value is undefined return default value; otherwise return the value
    return result === undefined ? defValue : result;
  }
  return undefined;
};
