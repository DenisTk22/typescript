/**
 * Задание 2. Тайпгарды + объединение
Что нужно сделать:
-Тремя способами реализуйте функцию whatDoesThePetSay, которая должна возвращать результат работы функции meow, если аргументом передали «кота», и результат работы функции bark, если аргументом передали «собаку».
Три реализации — это:
С использованием обычных тайпгардов.
С использованием пользовательских тайпгардов.
С использованием тайпгардов через оператор in.
-Дополнительно можно сделать одну некрасивую реализацию: через приведение типов. Зато можно будет попрактиковаться и понять, что вы точно усвоили эту тему.
-Сравните эти способы между собой и напишите в небольшом сопроводительном тексте, какая из реализаций вам нравится больше и почему. Отразите в тексте, какие плюсы есть у использования разных типов тайпгардов.

type Cat = {
name: string,
meow: () => string,
}

type Dog = {
name: string,
bark: () => string,
}

const cat: Cat = {
name: 'Pushok',
meow: () => 'meow!'
};

const dog: Dog = {
name: 'Bobik',
bark: () => 'bark!',
}

/*
Expected:

whatDoesThePetSay(cat) -> 'meow'
whatDoesThePetSay(dog) -> 'bark'
*/
/*
function whatDoesThePetSay(pet: Dog | Cat): string {
    // ---Start coding here---
    return 'Nothing :('
    // ---End coding here---
    }
    Советы и рекомендации:
    -Тайпгард проверяет соответствие типу по заданным условиям.
    Обычный тайпгард реализуется с помощью условия if и операторов typeof, in, instanceof, операторов сравнения и так далее.
    -Пользовательский тайпгард пишется в случае, если требуется реализовать более сложную проверку типов. Пользовательский тайпгард — это специальная функция, которая типизируется с помощью типа Argument is someType и возвращает булевое значение. Если возвращается true, значит, результат соответствует типу Argument is someType. А если вернула false, то не соответствует.
 */

    type Cat = {
        name: string,
        meow: () => string,
    };
        
    type Dog = {
        name: string,
        bark: () => string,
    };
        
    const cat: Cat = {
        name: 'Pushok',
        meow: () => 'meow!'
    };
        
    const dog: Dog = {
        name: 'Bobik',
        bark: () => 'bark!',
    };

    function whatDoesThePetSay(pet: Dog | Cat): string {
        // ---Start coding here---

        // if (typeof pet === ) {
        //     return pet.meow()
        // }
        return 'Nothing :('
        // ---End coding here---
        }

        whatDoesThePetSay(dog)