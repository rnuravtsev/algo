import { get } from "./get";
import { expect } from "@jest/globals";

describe('checking get function', () => {
    it('should be correct', function () {
        expect(get(
            {
                a: {
                    b: {
                        c: {
                            d: 'e'
                        }
                    }
                }
            },
            'a.b.c.d'
        )).toBe('e')
    });

    it('should return undefined', function () {
        expect(get(
            {
                a: {
                    b: {
                        c: {
                            d: 'e'
                        }
                    }
                }
            },
            'a.b.c.d.f'
        )).toBe(undefined)
    });
})
