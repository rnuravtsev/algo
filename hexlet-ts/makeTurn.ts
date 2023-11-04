type Turtle = 'turtle' | null;

type Direction = 'left' | 'right'

type Game = {
    makeTurn: (direction: Direction) => void;
    state: Array<Turtle>;
};


const startGame = (): Game => {
    let state: Array<Turtle> = ['turtle', null, null, null, null];
    const makeTurn = (direction: Direction) => {
        let currentIndex = state.indexOf('turtle');
        let nextIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1

        if(nextIndex < 0 || nextIndex > state.length - 1) {
            state[currentIndex] = null
            state[nextIndex] = 'turtle'
        } else {
            throw new Error('ERROR')
        }

    }
    return { makeTurn, state };
};

export default startGame


const { makeTurn, state } = startGame();
console.log(state); // ['turtle', null, null, null, null]

makeTurn('left') // ERROR

makeTurn('right');
makeTurn('right');
console.log(state); // [null, null, 'turtle', null, null]
