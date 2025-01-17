import { Example } from './exampleTypes';

export const generateExample = (): Example => {
    const randomiser = (): number => {
        return Math.floor(Math.random() * 90) + 10;
    };

    let op1 = randomiser();
    let op2 = randomiser();
    const ops = ['+', '-', '*', '/'];
    let op = ops[Math.floor(Math.random() * ops.length)];

    if (op === '/') {
        while (op1 % op2 !== 0) {
            op1 = randomiser();
            op2 = randomiser();
        }
    }

    return { operand1: op1, operand2: op2, operator: op };
};
