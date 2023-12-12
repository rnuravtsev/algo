// @ts-ignore
function zip(...objects) {
    return objects.reduce((acc, obj) => {
        Object.entries(obj).forEach(([key, value]) => {
            if (!acc.hasOwnProperty(key)) {
                acc[key] = value;
            }
        });
        return acc;
    });
}

// Пример работы
const objects = [
    { foo: 5, bar: 6 },
    { foo: 13, baz: -1 } // foo - повторяющийся ключ
];

// @ts-ignore
console.log('911 | 🚑', zip(...objects)) // { foo: 5, bar: 6, baz: -1 }

const isObject = (checkValue: unknown) => {
    return String(checkValue) === '[object Object]';
};

/**
 * Авторское решение
 * const zip = (...args) => {
 *     return args.reduce((accumulator, object) => {
 *         if (isObject(object)) {
 *             for (const [key, value] of Object.entries(object)) {
 *                 if (!accumulator.hasOwnProperty(key)) {
 *                     accumulator[key] = value;
 *                 }
 *             }
 *         }
 *         return accumulator;
 *     }, {});
 * };
 *
 */
