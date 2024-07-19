const human = [
    {
    name: 'string',
    age: 12,
    
}
]


function someFunc(data) {
    return data.reduce((acc, current) => {
        acc + Number(current.age > 18 && current.isMale), 0});
};

console.log(someFunc(human));