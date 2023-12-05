import { bubbleSort } from "./bubbleSort";
import { expect } from "@jest/globals";

let someArr = [1, 5, 4, 3, 8, 0]

beforeEach(() => {
    someArr = [1, 5, 4, 3, 8, 0]
})

describe('bubbleSort', () => {
    it('should return correct value', () => {
        expect(bubbleSort(someArr)).toEqual([0, 1, 3, 4, 5, 8])
    })

    it('empty input array', () => {
        expect(bubbleSort([])).toEqual([])
    })

    it('negative values', () => {
        expect(bubbleSort([10, 1, -4, 0, 13,])).toEqual([-4, 0, 1, 10, 13])
    })
})
