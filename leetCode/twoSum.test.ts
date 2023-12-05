import { twoSum } from "./twoSum";
import { expect } from "@jest/globals";

describe('Задача из leetCode: twoSum', () => {
    it('should return [0, 1]', function () {
        expect(twoSum([0, 3, 5], 8)).toEqual([1, 2])
    });

    // it('should return [1,2]', function () {
    //     expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    // });

    // it('should return [0, 1]', function () {
    //     expect(twoSum([3, 3], 6)).toEqual([0, 1])
    // });

    it('should return empty array', function () {
        expect(twoSum([], 6)).toEqual([])
    });

    it('should return empty array', function () {
        expect(twoSum([2, 4, 3], 17)).toEqual([])
    });
})
