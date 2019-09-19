const go = (s1, s2, s3) => {
  try {
    if (s1 < 0 || s2 < 0 || s3 < 0 || isNaN(s1) || isNaN(s2) || isNaN(s3)) {
      throw new Error("InvalidTriangleException ");
    }
    let s = (s1 + s2 + s3) / 2;
    var area = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
    return area;
  } catch {
    throw new Error("InvalidTriangleException ");
  }
};

export default go;
