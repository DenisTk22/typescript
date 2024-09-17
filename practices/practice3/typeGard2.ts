///Тайпгард для сложных типов
type Person = {kind: 'person', name: string};
type Animal = {kind: 'animal', color: string};

type Some = Person | Animal

function handle(value: Some): void {
    value.kind; // не будет ошибка, т.к. kind присутствует у обоих типов
    // value.name; // будет ошибка, т.к. name присутствует только у одного типа

    //тайпгард
    if (value.kind === 'animal') {
        value.color;
    }

    //тайпгард
    if (value.kind === 'person') {
        value.name;
    }
}

handle({ kind: 'animal', color: 'green' });
handle({ kind: 'person', name: 'Alex' });