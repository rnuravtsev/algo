import { expect } from "@jest/globals";
import { curryPartial } from "./curryPartial";

function add(a: number, b: number, c: number) {
    return a + b + c;
}

var a = 1;
var b = 2;
var c = 3;
var sum = a + b + c;

describe('curryPartial test', () => {
    it('should be correct', function () {
        const curriedAdd = curryPartial(add); // Передаем функцию add

        // @ts-ignore
        const curriedSum = curriedAdd(1)(2); // Применяем аргументы по одному

        expect(curriedSum(3)).toEqual(sum); // Вызываем и сравниваем результат с sum
    });
})
