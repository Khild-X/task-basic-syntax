export function romanToInteger(str) {
    let result = 0;
    const digits = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    for (let i = 0; i < str.length - 1; i++) {
        if (digits[str[i]] >= digits[str[i + 1]]) {
            result += digits[str[i]];
        } else {
            result -= digits[str[i]];
        }
    }
    result += digits[str[str.length - 1]];
    return result;
}
