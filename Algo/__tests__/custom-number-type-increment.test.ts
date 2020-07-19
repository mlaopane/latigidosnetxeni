import { Digit, increment } from '../src/custom-number-type-increment';

const fixtures: Array<Array<Digit>> = [
    [0],
    [1, 3, 3, 6],
    [9],
    [9, 9],
    [1, 9, 9],
];

fixtures.forEach((fixture) => {
    console.log('INPUT', fixture);
    console.log('OUTPUT', increment(fixture));
    console.log();
});
