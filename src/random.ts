const genRandomInt = (max = 100, min = 0): number => {
  const r = Math.random();
  return min + Math.round((max - min) * r);
};

export default genRandomInt;