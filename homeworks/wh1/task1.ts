/**
 * Задание 1. Ошибка в коде - сделано
Что нужно сделать:
Разработчики не только пишут код сами, но и работают с готовым кодом коллег. В этом задании необходимо:
-Найти и исправить ошибку в чужом коде.
-Написать небольшой сопроводительный текст, в котором вы:
объясните причину возникновения ошибок; опишете, как TypeScript помогает их избежать.
-Если объяснение покажется вам достаточно очевидным — это нормально, так и должно быть. Цель подобного рассуждения — научиться анализировать принципы работы с кодом, так как важно не только уметь писать хороший код, но и понимать, как он работает, зачем и почему стоит выбрать тот или иной способ решения задачи.
Код:
const actor: {
name: string;
firstName: string;
country: string;
city: string;
hasOskar: boolean;
filmsCount: number;
age: number;
languages: string[];
} = {
name: 'Michael',
firstName: 'Ivanov',
country: 'Russia',
city: 'Makhachkala',
hasOskar: false,
filmsCount: 10,
age: '14',
languages: ['RU-ru', 'EN-us', 'TR-tr'],
};
const howOldWillBeActorAfterTwentyYears = (actor) => {
return actor.age + 20;
}
console.log(howOldWillBeActorAfterTwentyYears(actor)); // '1420'
Примечание:
Мы ещё не касались типизации объектов, но приведённый пример подробно рассмотрен далее в курсе.
Критерии оценки:
Принято: ошибка в коде исправлена, присутствует корректное рассуждение.
На доработку: ошибка не исправлена и/или рассуждение отсутствует.
 */

const actor: {
    name: string;
    firstName: string;
    country: string;
    city: string;
    hasOskar: boolean;
    filmsCount: number;
    age: number;
    languages: string[];
} = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Makhachkala',
    hasOskar: false,
    filmsCount: 10,
    age: 14, // age должна быть числом, а не строкой
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};
const howOldWillBeActorAfterTwentyYears = (actor: { name?: string; firstName?: string; country?: string; city?: string; hasOskar?: boolean; filmsCount?: number; age: any; languages?: string[]; }) => {
    return actor.age + 20;
}
console.log(howOldWillBeActorAfterTwentyYears(actor)); // '1420'
/**
 * В TypeScript применятся статическая типизация данных, что позволяет быстро найти ошибку в коде, если переменной присвоено значение другого типа. В данном примере, TypeScript обнаружил ошибку - переменной типа number было присвоено строковое значение.
 */