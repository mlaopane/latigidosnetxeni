export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// Allows circular incrementation
function incrementDigit(digit: Digit): Digit {
    if (digit < 9) {
        return (digit + 1) as Digit;
    }

    return 0;
}

export function increment(input: Array<Digit>): Array<Digit> {
    const lastIndex = input.length - 1;
    // Prevent the input from being mutated
    const output = [...input];

    // We loop over the array from the end
    // until there is no power of ten to increment
    for (let index = lastIndex; index >= 0; index--) {
        const digitMustBeIncremented =
            index === lastIndex || output[index + 1] === 0;

        if (!digitMustBeIncremented) {
            break;
        }

        output[index] = incrementDigit(output[index]);
    }

    // If the first digit is 0, we need to add 1 power of ten
    if (output[0] === 0) {
        return [1, ...output];
    }

    return output;
}
