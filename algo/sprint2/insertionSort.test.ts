import { insertionSort } from "./insertionSort";
import { expect } from "@jest/globals";


let someArr = [3,5,9,1]

beforeEach(() => {
    someArr = [3,5,9,1]
})


describe('insertionSort', () => {
    it('should return sorted array', () => {
        expect(insertionSort(someArr)).toEqual([1,3,5,9])
    })
})
