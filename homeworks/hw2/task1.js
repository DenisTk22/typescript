/**
 * Задание 1. Работа с функцией
Что нужно сделать:
-Реализуйте функцию arrayDiff, которая вычитает один массив из другого и возвращает разницу.
arrayDiff(a, b);
-Функция должна убирать все значения из массива a, которые представлены в массиве b, сохраняя их порядок.
arrayDiff([1, 2], [1]) == [2]
arrayDiff([1, 2, 3, 4], [5, 6]) == [1, 2, 3, 4]
arrayDiff([2, 2, 2, 2, 3], [2]) == [3]
-Обратите внимание: если значение, которое есть в массиве b, встречается несколько раз в массиве a, то все вхождения должны быть удалены.
 */

// const arrayDiff = (a:[], b:[]):[] => {

//     const c:[] = [];
//     for (let i = 0; i < b.length; i++) {
//         const elementB = b[i];
//         for (let i = 0; i < a.length; i++) {
//             const elementA = a[i];
//             if (elementB !== elementA) {
//                 c.push(elementB);
//             }
//         }
//     }
//     return c.filter((el, ind) => ind === c.indexOf(el));
// }

const arrayDiff = (a, b) => {

    let c = [];
    
    return c = a.filter(el_a => !b.includes(el_a));
}

console.log(arrayDiff([2, 2, 2, 2, 3], [2]));