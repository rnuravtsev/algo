// compose(a,b,c)(component) -> a(b(c(component)))

// нужно учесть порядок вызовов, начнём с конца, здесь отлично подойдёт метод reduceRight
// так как после compose будет вызываться компонент, то нам нужно вернуть функцию

type RC = {
    type: string;
}

const withProp = (Component: RC) => {
    return Component
}

const A: RC = {
    type: 'div'
}

const compose = (...hocs: ((Component: RC) => RC)[]) => {
    return (Component: RC) => {
        return hocs.reduceRight((component, currentHoc) => currentHoc(component), Component)
    }
}

// console.log(withProp(withProp(withProp(A))))
console.log(compose(withProp, withProp, withProp)(A))
