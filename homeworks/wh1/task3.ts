/**
 * Задание 3. Использование нетипизированного кода
Что нужно сделать:
Представьте, что вас подключили к проекту, над которым работали другие разработчики. Вы увидели в коде проекта два фрагмента, назначение которых нигде не объяснено. Предположите, какую функцию выполняет каждая часть кода и для каких целей их надо применить.

// Первая часть кода:
function someFunc(data) {
return data.reduce((acc, current) => {
acc + Number(current.age > 18 && current.isMale), 0);
};
}

// Вторая часть кода:
type Human = {
name: string,
age: number,
gender: 'male' | 'female',
}
function someFunc(data: Human[]): number {
return data.reduce((acc: number, current: Human) => {
acc + Number(current.age > 18 && current.gender === 'male'), 0);
};
}

Критерии оценки:
Принято: в рассуждениях присутствуют корректные тезисы.
На доработку: корректные тезисы отсутствуют.
 */
// Первая часть кода:
function someFunc(data) {
    return data.reduce((acc, current) => {
        acc + Number(current.age > 18 && current.isMale), 0});
};
/**В данном коде используется метод reduce для получения числа.
 *  Данная часть кода используется для подсчета мужчин старше 18 лет*/

// Вторая часть кода:
type Human = {
    name: string,
    age: number,
    gender: 'male' | 'female',
}
function someFunc2(data: Human[]): number {
    return data.reduce((acc: number, current: Human) => {
        acc + Number(current.age > 18 && current.gender === 'male'), 0});
};
/**В данном коде используется метод reduce для получения числа.
 *  Данная часть кода используется для подсчета мужчин старше 18 лет*/
