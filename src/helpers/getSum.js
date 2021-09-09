export const getSum = (data,array, currency)=> {
    const expesneChanging = Number(data);
   const newElement = array.find(el=> el.name===currency)
    
    const newArray = array.map(el=> {
         
        return {...el, sum:  el.name===currency? el.sum += expesneChanging: el.ratio/newElement.ratio*expesneChanging }})
        
   return newArray
  }