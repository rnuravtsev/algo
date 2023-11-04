/**
 *
 * Дан список отсутствий работников на рабочем месте.
 * Требуется вывести диапазон частот, когда все сотрудники были на местах.
 *
 * from 9:00 to 18:00
 * Отсутствия
 * input = [
 * [9,10],
 * [15, 17],
 * [14,16]
 * ]
 *  */

/**
 * Когда все были на рабочем месте
 * output = [
 * [10,14],
 * [17,18]
 * ]
 */

/**
 * идея – отсортировать события по времени начала,
 * и выбирать в качестве следующего событие, которое начинается как можно раньше.
 * Оказывается, что этот алгоритм всегда дает оптимальное решение.
 *  */
type DoubleTuple<T = number> = [T, T]

const input: DoubleTuple[] = [
    [9, 11],
    [12, 14],
    [15, 17]
]

// @ts-ignore
const result = []
let [start, end] = [9, 18]

// O((n*log(n)) * n) — Время выполнения алгоритма
// Пространственная сложность — O(1) ~ константное
input
    .sort(([currentIntervalStart], [nextIntervalStart]) => currentIntervalStart - nextIntervalStart)
    .forEach(([intervalStart, intervalEnd]) => {
        if (start < intervalStart) result.push([start, intervalStart])
        start = Math.max(start, intervalEnd)
    })

if (start < end) result.push([start, end])

// @ts-ignore
console.log('911.', result)

