export const checkAnswer = (operand1: number, operand2: number, operator: string, answer: string): boolean => {
    let result: number;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            result = 0;
    }

    return parseInt(answer) === result;
};