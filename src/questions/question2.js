const go = a => {
  let ar = [];
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      ar.push(i);
    }
  }
  return ar;
};

export default go;
