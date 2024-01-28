import { expect } from "@jest/globals";
import { sortOddNumbers } from "./sortOddNumbers";

describe('sortOdd', () => {
    it('should be correct', function () {
        expect(sortOddNumbers([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4])
    });
})
