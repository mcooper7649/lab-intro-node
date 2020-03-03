class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
    
    }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if(!this.items[pos]){
      throw new Error('OutOfBounds')
    }
    return this.items[pos]
  }

  max() {
    if(this.items.length === 0 ){
      throw new Error('Empty Sorted List')
    }
    return this.items[this.items.length -1]
  }

  min() {
    if(this.items.length === 0 ){
      throw new Error('Empty Sorted List')
  }
  return this.items[0]
}

  sum() {
    if(this.items.length === 0 ){
      return 0;
  }else{
    
    var sum1 = 0 
    function myFunction(item) {
      sum1 += parseInt(item);
    }

  this.items.forEach(myFunction);

  return sum1;
}  
  
   
}

  avg() {
    if(this.items.length === 0 ){
      throw new Error('Empty Sorted List')
  }
  var sum1 = 0 
    function myFunction(item) {
      sum1 += parseInt(item);
    }

  this.items.forEach(myFunction);

  return sum1 / this.items.length;
  }
}

module.exports = SortedList;

new SortedList();
