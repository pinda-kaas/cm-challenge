let go = (input, key) => {
  let res = input.reduce(
    (a, v) => ({ ...a, [v[key]]: [...(a[v[key]] || []), v] }),
    {}
  );

  delete res.undefined;
  return res;
};
export default go;
