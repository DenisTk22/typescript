/**Задание 5. Объекты v2 — код
 * 
Что нужно сделать:
-Реализуйте функцию areEqual, которая принимает два объекта в качестве аргументов. Не забывайте про типизацию.
-Если два переданных объекта содержат одинаковое количество ключей с одинаковыми значениями и одинаковыми названиями ключей — функция должна вернуть true. Иначе — false.

Советы и рекомендации:
-Для итерации по объектам используйте получение ключей через Object.keys(objectA) и Object.keys(objectB) — это поможет избежать возможных ошибок с типами.
-В процессе проработки задания вам важно потренировать навыки создания объектов и работы с полями объектов. Постарайтесь делать это осознанно.
 */
// let count = 0

// const areEqual = (a:{}, b:{}): boolean => {
//     if (Object.keys(a).length === Object.keys(b).length)
//     { 
//         Object.keys(a).forEach(el => {
//             Object.keys(b).forEach((value) => {
//                 if (el === value) {
//                     count ++
//                 } else return false
//             })
//         });
//     } else return false;
// }

const areEqual = (obj1, obj2) => {
    if(Object.keys(obj1).length === Object.keys(obj2).length) {
        return Object.keys(obj1).reduce((acc, rec) => {
            return acc && obj1[rec] === obj2[rec]
        }, true)
    }
    return false
}

console.log(areEqual({age:17, name:1}, {age:16, name:1}))