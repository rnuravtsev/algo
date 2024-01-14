import { expect } from "@jest/globals"
import { spyOn } from "./spyOn";

describe('spyOn fns', () => {
    it('should be done', function () {
        function returns1() {
            return 1
        }

        const spy = spyOn(returns1)

        // @ts-ignore
        expect(spy.callCount()).toEqual(0)
        // @ts-ignore
        expect(spy.returned(1)).toEqual(false)
        // @ts-ignore
        expect(spy.wasCalledWith('hello')).toEqual(false)

        spy('hello', 'hi', 'howdy')
        spy('goodbye', 'bye', 'see ya')

        // @ts-ignore
        expect(spy.callCount()).toEqual(2)
        // @ts-ignore
        expect(spy.returned(1)).toEqual(true)
        // @ts-ignore
        expect(spy.wasCalledWith('hi')).toEqual(true)
        // @ts-ignore
        expect(spy.wasCalledWith('bye')).toEqual(true)
    })
})
