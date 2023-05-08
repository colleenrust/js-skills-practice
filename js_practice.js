console.log('hello');

var letters = ['a', 'b', 'c', 'd', 'e'];

console.log(letters[0]);


function printAllElements(array) {
  console.log('i am in print all elements');
  console.log(array);
  // array.each do |element|
  array.forEach(function(element) {
    console.log(element);
  })

  // var i = 0;
  // while (i < array.length) {
  //   console.log(array[i]);
  //   // i += 1;
  //   i++;
  // }

  // for (var i = 0; i < array.length; i++) { 
  //   console.log(array[i]) 
  // }
}

printAllElements(letters);
