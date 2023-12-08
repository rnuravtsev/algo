import { orderRoutes, Route } from "./orderRoutes";
import { expect } from "@jest/globals";

const input: Route[] = [
    {
        from: 'Kazan', to: 'Prague',
    },
    {
        from: 'Moscow', to: 'Kazan',
    },
    {
        from: 'Antalya', to: 'Samara',
    },
    {
        from: 'Samara', to: 'Moscow',
    },
]

describe('order routes', () => {
    it('should be correct', function () {
        expect(orderRoutes(input)).toEqual(
            [
                {
                    from: 'Antalya', to: 'Samara',
                },
                {
                    from: 'Samara', to: 'Moscow',
                },
                {
                    from: 'Moscow', to: 'Kazan',
                },
                {
                    from: 'Kazan', to: 'Prague',
                },
            ]
        )
    });
})
