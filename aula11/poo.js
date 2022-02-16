class Person {
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    getFullName(){
        console.log(`${this.nome} ${this.sobrenome}`);
    }
    static speaak() {
        console.log("Olá, mundo");
    }
}

//Instaciando Person
const person = new Person("Marcelo", "Figueiredo", 24);
person.getFullName();

//Metodo speaak
Person.speaak();

//Heranças
class animal {
    constructor(name){
        this.name = name;
    }
    speaak(){
        console.log(`${this.name} e um animal que faz muito barulho`);
    }
    }
    class Dog extends animal {
        constructor(name){
            super(name);
        }
        speaak(){
            console.log(`Dog ${this.name} Late!`)
        }
    }
const Animal = new animal("Stark");
const dog = new Dog("Bob");
Animal.speaak();
dog.speaak();