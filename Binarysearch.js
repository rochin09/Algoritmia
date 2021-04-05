const binarySearch = (orderedList, itemToFind) => {
    let min = 0,
        max = orderedList.length - 1,
        middle = null,
        guess = null;
    
    while(min <= max) {
      middle = Math.floor((min + max) / 2);
      guess = orderedList[middle];
  
      if (itemToFind === guess) {
        return middle;
      }
  
      if (itemToFind > guess) {
        min = middle + 1;
      }
  
      if (itemToFind < guess) {
        max = middle - 1;
      }
    }
  
    return -1;
  }
  
  const myList = [4, 7 , 10, 11, 55, 71, 89, 100, 2020];
  
  const result = binarySearch(myList, 10);
  
  if (result >= 0) console.log(`¡Sí existe! se encuentra en la posición ${result}`);
  if (result === -1) console.log('No existe...');
