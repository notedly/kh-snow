let Comn = {};
Comn.rdm = (min = 0, max = 1) => {
  return min + (max - min) * Math.random();
};
export { Comn };
