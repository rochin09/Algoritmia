const linearSearch = (list, itemToFind) => {
    const size = list.length;
    let index = 0;
  
    while(index < size) {
      let itemInPosition = list[index];
      if (itemInPosition === itemToFind) {
        return index;
      }
      index++;
    }
  
    return -1;
  }
  
  const myList = [19, 12, 4, 89, 666, 10, 42, 41, 5, 333, 5, 5, 5, 5];
  
  const result = linearSearch(myList, 5);
  
  if (result >= 0) console.log('¡Exists!');
  if (result === -1) console.log('It doesn't exist...');
