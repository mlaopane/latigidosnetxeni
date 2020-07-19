export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

function incrementDigit(digit: Digit): Digit {
    if (digit < 9) {
        return (digit + 1) as Digit;
    }

    return 0;
}

export function increment(input: Array<Digit>): Array<Digit> {
    const lastIndex = input.length - 1;
    const output = [...input];

    for (let index = lastIndex; index >= 0; index--) {
        const digitMustBeIncremented =
            index === lastIndex || input[index + 1] === 0;

        if (digitMustBeIncremented) {
            output[index] = incrementDigit(output[index]);
        }
    }

    return output;
}
