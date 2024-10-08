/**
 * Задание 1. Приведение типов (as) - сделано
Что нужно сделать:
В этом задании нужно провести манипуляции над готовым кодом, понять причины проблем и решить их.
Необходимо:
Запустить код и убедиться, что типизация работает корректно, а сам код выполняется.
type House = {
street: string,
apartmentCount: number,
buildInfo: {
year: number,
material: string,
}
};
function getHouse(): House {
const house = {} as House;
house.street = 'Pushkina';
house.apartmentCount = 76;

house.buildInfo = {
    year: 1996,
    material: 'rocks',
    };

return house;
}

function handleHouse(): void {
const house: House = getHouse();

console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
console.log(`build in ${house.buildInfo .year}, build from ${house.buildInfo.material} `);
}

handleHouse();
Закомментировать строку: house.apartmentCount = 76. Запустить код и посмотреть на результат выполнения. Сформулировать причину ошибки.
Раскомментировать строку из предыдущего пункта.
Закомментировать следующую часть кода:
house.buildInfo = {
year: 1996,
material: 'rocks',
};
-Запустить код и сформулировать причину ошибки.
-Переписать функцию getHouse таким образом, чтобы не возникало проблем, с которыми вы встречались ранее.
-Написать небольшой сопроводительный текст: объяснить причину возникновения ошибок и способ, который поможет их избежать.

Советы и рекомендации:
-Ожидается, что если с типизацией что-то не так (например, вы закомментируете строчку), то ошибка возникнет во время компиляции, а не выполнения кода.
-Обратите внимание на строчку const house = {} as House. Вам нужно избавиться от as.
-Указание типов в TypeScript помогает обеспечить безопасность кода, но использование оператора as может привести к ошибкам во время выполнения программы. Это происходит потому, что as позволяет приводить один тип к другому без проверки на соответствие типам. Если мы используем as для приведения типа пустого объекта {} к типу House, то TypeScript считает, что все поля в этом объекте указаны, даже если мы забудем указать обязательные поля. В результате можно получить объект в невалидном состоянии, что приведёт к ошибкам во время выполнения программы.

Пример проблемы можно увидеть, если закомментировать инициализацию полей объекта после его создания. Если мы забудем указать обязательные поля, то статическая типизация не сообщит об этом, а мы получим объект в невалидном состоянии. Это может привести к ошибкам во время выполнения программы.

Для избежания таких проблем не используйте оператор as и указывайте правильные типы для переменных. Если правильный тип неизвестен, то можно возвращать готовый объект с помощью оператора return. Это позволит избежать проблем во время выполнения программы и обеспечить безопасность кода в TypeScript.
 */
type House = {
        street: string,
        apartmentCount: number,
        buildInfo: {
            year: number,
            material: string,
        }
    };
    function getHouse(street: string, apartmentCount: number, buildInfo: {year: number, material: string}): House {
        // const house = {} as House; /// при ручной типизации, ts не проверяет приведение к типам
        const house: House = {street, apartmentCount, buildInfo}

        // house.street = 'Pushkina';
        // house.apartmentCount = 76; 
        
        // house.buildInfo = {
        //     year: 1996,
        //     material: 'rocks',
        // };
    
    return house;
    }
    
    function handleHouse(): void {
    const house: House = getHouse('Rapter', 120, {year: 1998, material:'Manticor'});
    
    console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
    console.log(`build in ${house.buildInfo.year}, build from ${house.buildInfo.material} `);

    }
    
    handleHouse();
    // Закомментировать строку:
    // house.apartmentCount = 76
    // Запустить код и посмотреть на результат выполнения. Сформулировать причину ошибки.
    // Раскомментировать строку из предыдущего пункта.
    // Закомментировать следующую часть кода:
        // house.buildInfo = {
    //         year: 1996,
    //         material: 'rocks',
    //     };