var fruits = ["apple", "orange", "cherry"];

function myFunction(item, index) {
  console.log(index,item)
}

fruits.forEach(myFunction);

/* 0 "apple"
1 "orange"
2 "cherry" */

//function
fruits.forEach(function(ele,pos){console.log(pos + ele)})

//flecha 
fruits.forEach((pos,index) => {console.log(pos + index)})