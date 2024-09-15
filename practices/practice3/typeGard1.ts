/// приведение типов тайпгард
//1. is HTMLInputElement
const element = document.getElementById('input');

if (element instanceof HTMLInputElement) {
    element.value;
}

if (isHTMLInputElement(element)) {
    element.value;
}

function isHTMLInputElement(element: HTMLElement | null): element is HTMLInputElement {
    return element instanceof HTMLInputElement;
}

//2. тайпгард для примитивов
function format2(value: number | string): string {
    let amount: number = 0;

    //тайпгард
    if (typeof value === 'string') {
        amount = parseFloat(value);
    }
    //тайпгард
    if (typeof value === 'number') {
        amount = value;
    }

    return amount.toFixed(2);
}

///тайпгард в виде функции
function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

function isString(value: unknown): value is string {
    return typeof value === 'string';
}

function format4(value: number | string): string {
    let amount: number = 0;

    //тайпгард
    if (isString(value)) {
        amount = parseFloat(value);
    }
    //тайпгард
    if (isNumber(value)) {
        amount = value;
    }

    return amount.toFixed(2);
}