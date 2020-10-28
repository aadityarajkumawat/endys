const getUpdatedQuantity = (b: boolean, q: number): number => {
  if (b) {
    return q + 1;
  } else {
    if (q > 1) {
      return q - 1;
    } else {
      return 0;
    }
  }
};

export default getUpdatedQuantity;
