export const sliceSum = (sum) => {
  
    const i = sum.indexOf(".");
    return i !== -1 ? sum.slice(0, i + 3) : sum;
  
};