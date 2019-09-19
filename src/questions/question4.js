const go = arr => {
  let counts = arr.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});
  let maxCount = Math.max(...Object.values(counts));
  let mostFrequent = Object.keys(counts).filter(k => counts[k] === maxCount);

  let res = mostFrequent.map(function(v) {
    return parseInt(v, 10);
  });

  return res;
};

export default go;
