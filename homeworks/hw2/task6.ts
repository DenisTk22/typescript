/**Задание 6. Community (часть 1) - сделано
 * 
Что нужно сделать:
-Сейчас вы начнёте выполнять проект, к доработке которого будете неоднократно возвращаться.
-Представьте, что создаёте небольшой проект для хранения разной информации о группе своих друзей. Так как проект небольшой, храните все данные прямо в коде, попутно разбираясь с возникающими проблемами. Ведь так вы сможете намного быстрее создавать новые фичи.
-У вас есть готовый код, сейчас нужно: определить тип User и использовать его в коде, избавиться от ошибок TypeScript и успешно пройти тесты.
*/
// export type User = unknown;

// export const users: unknown[] = [
// {
// name: 'Roman Abramov',
// age: 25,
// occupation: 'Millionaire'
// },
// {
// name: 'Andrey Fox',
// age: 23,
// occupation: 'Developer'
// }
// ];

// export function logPerson(user: unknown) {
// console.log(- ${user.name}, ${user.age});
// }

// console.log('Users:');
// users.forEach(logPerson);
//const arr: { name: string; age: number }[] = [
// { name: 'Alice', age: 27 },
// ];
export type User = {
                name: string;
                age: number;
                occupation: string;
            }

export const users: {name: string; age: number; occupation: string}[] = [
    {
        name: 'Roman Abramov',
        age: 25,
        occupation: 'Millionaire'
    },
    {
        name: 'Andrey Fox',
        age: 23,
        occupation: 'Developer'
    }
];

export function logPerson(user: User) {
console.log(`- ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
const arr: { name: string; age: number }[] = [
    { name: 'Alice', age: 27 },
];