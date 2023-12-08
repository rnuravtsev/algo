import { swap } from "../algo/sprint2/bubbleSort";

export type Route = {
    from: string,
    to: string
}

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

export const orderRoutes = (routes: Route[]) => {
    const result: Route[] = []
    const initialRoute = routes.find(route => !routes.some(r => route.from === r.to))!

    const findNextRoute = (city: string) => {
        const nextRoute = routes.find(route => city === route.from)
        if(nextRoute) {
            result.push(nextRoute)
            findNextRoute(nextRoute.to)
        }
    }

    result.push(initialRoute)
    findNextRoute(initialRoute?.to)

    return result
}

