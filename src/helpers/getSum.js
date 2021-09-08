export const getSum = (data,array)=> {
    const expesneChanging = Number(data);
    const newArray = array.map(el=>( {...el, sum: el.sum+= expesneChanging/el.ratio }))
   return newArray
  }