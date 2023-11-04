const lightSwitch = function () {
    // Создаем флаг состояния света, начальное состояние - включенный свет
    let lightOn = true;

    // Объект для хранения удаленных полей
    const removedFields = {};

    // Функция переключения света
    const toggleLight = () => {
        lightOn = !lightOn;
        if (!lightOn) {
            // Если свет выключен, удаляем поля, не начинающиеся с "$", и сохраняем их
            for (const key in this) {
                if (!key.startsWith('$')) {
                    removedFields[key] = this[key];
                    delete this[key];
                }
            }
        } else {
            // Если свет включен, восстанавливаем удаленные поля
            for (const key in removedFields) {
                this[key] = removedFields[key];
            }
        }
    };

    // Возвращаем объект-прокси
    return new Proxy(this, {
        get(target, key) {
            if (key.startsWith('$') || lightOn) {
                return target[key];
            } else if (!key.startsWith('$')) {
                if (removedFields.hasOwnProperty(key)) {
                    return removedFields[key];
                }
            }
        },
        has(target, key) {
            if (key.startsWith('$') || lightOn) {
                return key in target;
            } else if (!key.startsWith('$')) {
                return removedFields.hasOwnProperty(key);
            }
        },
    });
};

const getter = function (key) {
    return this[key];
};

module.exports = { lightSwitch, getter };


const artObject = {
    $redRose: 11101,
    metroStations: ['Park Kultury', 'Delovoy Center'],
    busStops: ['B', 'c910', '379'],
    $city: 10101,
    towers: ['Oko', 'Neva'],
    $getTransports() {
        const stations = this.$getter('metroStations');
        const stops = this.$getter('busStops');
        return [...stations, ...stops];
    },
    $lightSwitch: lightSwitch,
    $getter: getter,
};

artObject.$lightSwitch();

console.log('towers' in artObject); //-> false
console.log(artObject.$getter('towers')); //-> [ 'Oko', 'Neva' ]
console.log(artObject.$redRose); //-> 11101
console.log(artObject.$getTransports()); //-> [ 'Park Kultury', 'Delovoy Center', 'B', 'c910', '379' ]
