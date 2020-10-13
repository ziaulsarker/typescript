"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = express_1.default();
server.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    class Animal {
        constructor() {
            this.talk = () => {
                return "yo i can say hello fuck";
            };
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
            this.name = name;
        }
        sayHello() {
            return this.name;
        }
    }
    class Fish extends Animal {
        constructor(name) {
            super();
            this.name = name;
            this.name = name;
        }
        dive(howDeep) {
            return howDeep;
        }
    }
    function sayHello(pet) {
        if (pet instanceof Dog) {
            return "dog says hello";
        }
        else if (pet instanceof Fish) {
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
    });
}));
server.listen(3000, () => {
    console.log(`server is running on port 3000`);
});
//# sourceMappingURL=server.js.map