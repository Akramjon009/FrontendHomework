class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    introduce(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const john = new Person("Akramjon", 15);
console.log(john.introduce());