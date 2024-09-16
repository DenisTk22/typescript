function volume([weight, height, depth]: number[]): number {
    return weight * height * depth;
}

volume([1, 2, 3]); //6
volume([1, 2]); //NaN
volume([1, 2, 3, 4]); //6

//чтобы избежать ошибок, можно использовать картеж - указывает сколько элементов и с каким типом дб
function volume2([weight, height, depth]: [number, number, number]): number {
    return weight * height * depth;
}

volume2([1, 2, 3]); //6
// volume2([1, 2]); //ts покажит ошибку
// volume2([1, 2, 3, 4]); //ts покажит ошибку
// volume2([1, '2', 3]); //ts покажит ошибку

//использование картежей
type Person10 = [string, number];

const person: Person10 = ['Alex', 1983];
person[0]; // 'Alex'
person[1]; // 1983
// person[2]; // undefined

//деструторизация массива
const [sex, age] = person;
// const [sexx, agee, some] = person; // будет ошибка

//картежи поддерживают опциональные элементы
type Person1 = [string, number, boolean?];
const person1: Person1 = ['Alex', 1983];
const person2: Person1 = ['Alex', 1983, true];