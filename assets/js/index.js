"use strict";
//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число

const myArray = [4, -2, 5, 19, -130, 0, 10];

function minElement(myArray) {
  let max;
  let min = myArray[0];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < min) {
      min = myArray[i];
    } else {
      max = myArray[i];
    }
  }
  return min;
}

console.log(minElement(myArray));

function maxElement(myArray) {
  let max = myArray[0];
  let min ;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < max) {
       min = myArray[i];
     } else {
      max = myArray[i];
    }
  }
  return max;
}

console.log(maxElement(myArray));

//

//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе

const myArr1 =  [1, 2, 3];
const myArr2 =  [4, 5, 6];

const myArr3 = myArr1.concat(myArr2);
console.log(myArr3);

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]

const myArr4 = myArr1.reverse();
console.log(myArr4);

//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const myArr5 =  [1, 2, 3];
const myArr6 = myArr5.push(4, 5, 6);
console.log(myArr5);



// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6
const myArr7 =  [1, 2, 3];
const myArr8 = myArr7.unshift(4, 5, 6);
console.log(myArr7);



//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его
const myArr9 =  ['js', 'css', 'jq'];
console.log(myArr9[0]);
const myArr10 = myArr9.shift();
console.log(myArr9);



 //Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент
 const myArr11 =  ['js', 'css', 'jq'];
 const myArr12 = myArr11.pop();
 console.log(myArr12);



 //Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]
 const myArr13 =  [1, 2, 3, 4, 5];
 const myArr14 = myArr13.slice(0, 3);
 console.log(myArr14);


 // Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]
 const myArr15 =  [1, 2, 3, 4, 5];
 const myArr16 = myArr15.slice(3);
 console.log(myArr16);



 //Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]
 const myArr17 =  [1, 2, 3, 4, 5];
 const myArr18 = myArr17.splice(1,2);
 console.log(myArr17);



 //Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]
  const myArr19 =  [1, 2, 3, 4, 5];
  const myArr20 = myArr19.splice(0,5,2,3,4);
  console.log(myArr19);


 //Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]
 const myArr21 =  [1, 2, 3, 4, 5];
 const myArr22 = myArr21.splice(3,0,'a', 'b', 'c');
 console.log(myArr21);

 //Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
 const myArr23 =  [1, 2, 3, 4, 5];
 const myArr24 = myArr23.splice();
 console.log(myArr23);

 //Дан массив [3, 4, 1, 2, 7]. Отсортируйте его
 const myArr25 =  [3, 4, 1, 2, 7];
 const myArr26 = myArr25.sort();
 console.log(myArr25.sort()); 

 // Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей
 const obj =  {js:'test', jq: 'hello', css: 'world'};
 console.log(Object.keys(obj)); 





