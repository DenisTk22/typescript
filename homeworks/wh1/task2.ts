/**
 * Задание 2. Ошибка в коде — 2 - сделано
Что нужно сделать:
Разработчики не только пишут код сами, но и работают с готовым кодом коллег. В этом задании необходимо:
-Найти и исправить ошибку в чужом коде.
-Написать небольшой сопроводительный текст, в котором вы объясните причину возникновения ошибки.
-Если объяснение покажется вам достаточно очевидным — это нормально, так и должно быть.
Код:
document.addEventListener('click', (e) => {
const coords = [e.posX, e.posY];
console.log(Point is ${coords[0]}, ${coords[1]});
});
Критерии оценки:
Принято: ошибка исправлена, присутствует корректное рассуждение.
На доработку: ошибка не исправлена и/или рассуждение отсутствует.
 */

document.addEventListener('click', (e) => {
    const coords = [e.offsetX, e.offsetY]; // для получения координат нужно использовать offsetX и offsetY
    console.log(`Point is ${ coords[0]}, ${ coords[1]}`); // чтобы использовать переменные в тексте нужно это выражение обернуть в бэктики ``
});