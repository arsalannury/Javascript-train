let array = [['farvardin'], ['ordibehesht'], ['khordad'], ['tir']];
let flatArray = array.flat();
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let flatMapNumbers = arrayNumbers.flatMap((value => value * 2));
let i = 0;

/*for (let i = 0; i <= 10; i++) {
   if(i%2 !== 0) {
       continue;
   }
    console.log(i)
}*/

/*while(i <= 10) {
    i++
    if(i%2 !== 0) {
        continue;
    }
    console.log(i)
}*/

do {
    i++
    if(i%2 !== 0) {
        continue;
    }
    console.log(i)
} while (i <= 10)

