/**
 * @param {([number, number])[]} points
 * @returns {boolean}
 */
function isSym(points: [number, number][]) {
    if (!Array.isArray(points)) {
        throw Error("points must be array");
    }

    if (points.length === 0) {
        return true;
    }

    let answer = true;
    let prewL = points[0][0];
    let prewR = points[points.length - 1][0];

    for (let i = 0; i <= points.length - i; i++) {
        const currRI = points.length - 1 - i;
        const currL = points[currRI];
        const currR = points[i];

        if (currL[1] !== currR[1]) {
            return false;
        }

        if (Math.abs(prewL - currL[0]) !== Math.abs(prewR - currR[0])) {
            return false;
        }

        prewL = currL[0];
        prewR = currR[0];
    }

    return answer;
}

/**
 * Авторское решение
 */

// function isSym(points) {
//     if (!Array.isArray(points)) {
//         throw new Error('points must be array');
//     }
//
//     if (points.length === 0) {
//         return true;
//     }
//
//     const d = {};
//     const xList = points.map(([x]) => x);
//     const xl = Math.min(...xList);
//     const xr = Math.max(...xList);
//
//     points.forEach(point => {
//         const dl = point[0] - xl;
//         const dr = xr - point[0];
//
//         const hashKey = JSON.stringify({x: Math.min(dl, dr), y: point[1]});
//
//         if (!d[hashKey]) {
//             d[hashKey] = 0;
//         }
//
//         d[JSON.stringify({x: Math.min(dl, dr), y: point[1]})] += (dl > dr) - (dl < dr);
//     });
//
//     return Object.values(d).every(v => v === 0);
// }
