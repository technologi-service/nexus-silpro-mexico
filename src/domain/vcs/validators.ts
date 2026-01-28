export const isValidScore = (value: string): boolean => {
    if (value === '') return true;
    const num = parseFloat(value);
    const numeric32Regex = /^(\d{1}(\.\d{1,2})?)$/;
    return numeric32Regex.test(value) && num >= 0 && num <= 9.99;
};
