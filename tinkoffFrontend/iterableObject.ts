const iterableObject = { name: 'Fred', surname: 'Pitt' }
//@ts-ignore
delete iterableObject.name
console.log('911 | 🚑', { ...iterableObject })
