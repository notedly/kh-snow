let Common = {};
Common.rdm = (min = 0, max = 1) => {
  return min + (max - min) * Math.random();
};
export { Common };
