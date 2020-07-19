import { fizzbuzz } from '../src/fizzbuzz';

const fixtures = [2, 11, 3, 5, 12, 20, 30, 0];

fixtures.forEach((fixture) => {
    console.log('INPUT', fixture);
    console.log('OUTPUT', fizzbuzz(fixture));
});
