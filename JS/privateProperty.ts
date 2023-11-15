const object = (function () {
    let _value: any = null

    return {
        setValue(value: unknown) {
            _value = value;
        },
        getValue() {
            return _value;
        },
    }
})();

console.log('911 | 🚑', object)

object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство, а не должны уметь обращаться к нему
object.getValue(); // 73

/*
Ожидание
object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство
object.getValue(); // 42
*/
