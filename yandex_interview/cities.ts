import { swap } from "../algo/sprint2/bubbleSort";

type Route = {
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

// const orderPlaces = (cities: Route[]) => {
//     // 1. Находим первонач
//     let initialPlace = {} as Route
//     let start = 0;
//     let end = cities.length - 1
//
//     // O(n^2)
//     loop1:
//     for (let i = 0; i < cities.length - 1; i++) {
//         initialPlace = cities[i]
//         for (let j = 0; j < cities.length - 1; j++) {
//             if(initialPlace.from === cities[j].to) {
//                 if(j === cities.length - 1) {
//                     break loop1
//                 } else {
//                     break
//                 }
//             }
//         }
//     }
//
//     // O(n)
//     // 2. Проходимся по массиву сравнивая и переставляя порядок
//     // Условие выхода: конец массива
//     //
//
//
//     let counter = 1
//     const findNextPlace = (arr: Route[], start = 1, end = arr.length - 1) => {
//         counter++
//         if(start > end) return
//             if(arr[start - 1].to !== arr[start].from) {
//                 swap(arr, start, counter)
//                 findNextPlace(arr, start, end)
//             } else {
//                 counter = start
//                 findNextPlace(arr, start + 1, end)
//             }
//
//         return arr
//     }
//
//     return findNextPlace([initialPlace, ...cities.filter(el => el.from !== initialPlace.from)])
// }

const orderRoutes = (routes: Route[]) => {
    const result = []

    const findNextRoute = (currentCity?: string) => {
        const nextRoute = routes.find(route => currentCity === route.from)
        if (nextRoute) {
            result.push(nextRoute)
            findNextRoute(nextRoute.to)
        }
    }

    const initialRoute = routes.find(route => !routes.some(r => r.to === route.from))
    result.push(initialRoute)
    findNextRoute(initialRoute?.to)

    return result
}

console.log('911.', orderRoutes(input))
