///приведение типов вручную: as (не безопасно)
//1. as HTMLInputElement
const input1 = document.getElementById('input') as HTMLInputElement;
input1.value; 

//2. <HTMLInputElement> аналог примеру 1
const input2 = <HTMLInputElement>document.getElementById('input');
input2.value;

//3. приведение типов к числу: (value as number) - мы говорим что value будет числом, но это не безопасно, если value будет строкой, то будет ошибка
function format3(value: number | string): string {
    return (value as number).toFixed(2); // форматирует и строки и числа так, чтобы в конце было два числа после запятой
}

//4. приведение типов к числу: (value as unknown as number) - это не безопасно, если value будет строкой, то будет ошибка
function format6(value: object): string {
    return (value as unknown as number).toFixed(2); // форматирует и строки и числа так, чтобы в конце было два числа после запятой
}