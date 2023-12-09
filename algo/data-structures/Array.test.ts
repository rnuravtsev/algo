import { MyArray } from "./Array";
import { expect } from "@jest/globals";


describe('check MyArray implementation of array', function () {
    let arr: MyArray

    beforeEach(() => {
        arr = new MyArray()
    })

    describe('check values set by index', () => {
        it('should be return 3', function () {
            arr.add(3)
            expect(arr.get(0)).toBe(3)
        });
    })

    describe('check size', () => {
        it('in initial size should be 1', function () {
            expect(arr.size).toBe(1)
        });
        it('after adding 5 elements size should be 8', function () {
            arr.add(2)
            arr.add(3)
            arr.add(4)
            arr.add(5, 2)
            arr.add(6)
            expect(arr.size).toBe(8)
        });
    })

    describe('check method add', function () {
        it('should return correct length', function () {
            expect(arr.add(2)).toBe(1)
        });
    });

    describe('check deleting', () => {
        it('should be length === 0', function () {
            arr.add(5);
            arr.delete(0)

            expect(arr.length).toBe(0)
        });
        it('should be length === 1', function () {
            arr.add(5);
            arr.add(1);
            expect(arr.delete(0)).toBe(1)
        });
    })

    describe('check handled errors', () => {
        it('should throw error when try to get unavailable index', function () {
            expect(() => arr.get(2)).toThrow('Индекс за пределами массива')
        });
        it('should throw error when try to set unavailable index', function () {
            expect(() => arr.set(22, 22)).toThrow('Индекс за пределами массива')
        });
        it('should throw error when try to add unavailable index', function () {
            expect(() => arr.add(22, 22)).toThrow('Индекс за пределами массива')
        });
        it('should throw error when try to delete unavailable index', function () {
            expect(() => arr.delete(10)).toThrow('Индекс за пределами массива')
        });
    })
});
