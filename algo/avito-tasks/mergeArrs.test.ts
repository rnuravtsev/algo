import {expect} from '@jest/globals'
import {mergeArrs} from './mergeArrs'

describe('merge arrs', function () {
    it('first base case', function () {
        expect(mergeArrs([-2, 3, 3], [-5, 0])).toEqual([-5, -2, 0, 3, 3])
    });

    it('second base case', function () {
        expect(mergeArrs([1, 2, 4], [9])).toEqual([1, 2, 4, 9])
    });

    it('should be done', function () {
        expect(mergeArrs([6], [])).toEqual([6])
    });
});
