const go = key => A => [
  ...A.reduce((s, v) => (key in v ? s.add(v[key]) : s), new Set())
];

export default go;
