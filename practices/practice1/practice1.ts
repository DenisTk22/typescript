let num:number = 5;

function myFunction(arg: number):string { // в скобках тип принимаемого объекта, вне скобок после : тип возвращаемого объекта
    return arg.toFixed(2)//
}

console.log(myFunction(5));