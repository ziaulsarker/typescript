import express from "express";
const server = express();

server.get("/", async (req, res) => {

    class Animal {
        talk = () => {
            return "yo i can say hello fuck";
        }
    }
    class Dog extends Animal{
        constructor(readonly name: string){
            super();
            this.name = name;
        }

        sayHello(): string {
            return this.name;
        }
    }

    class Fish extends Animal{
        constructor(readonly name: string){
            super();
            this.name = name;
        }

        dive(howDeep: number) : number {
            return howDeep;
        }
    }

    type Pet = Dog | Fish;

    function sayHello(pet: Pet) : string | undefined {
        if(pet instanceof Dog){
            return "dog says hello";
        } else if(pet instanceof Fish){
            return `sorry fish cannot say`;
        }
    }

    const myBitch = new Dog("pussy bitch");
    const myFish = new Fish("dirty fish bitch");


    console.log(sayHello(myBitch));
    console.log(sayHello(myFish));



    res.send({
        [myBitch.name]: myBitch,
        [myFish.name]: myFish

    })


})

server.listen(3000, () => {
    console.log(`server is running on port 3000`);
});