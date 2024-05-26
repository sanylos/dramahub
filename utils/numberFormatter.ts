export const formatNumber = (number: number) => {
    const formats = [
        { range: 999, suffix: '' },
        { range: 999999, suffix: 'tis.' },
        { range: 999999999, suffix: 'mil.' },
    ]
    for (let i = 0; i < formats.length; i++) {
        if (number <= formats[i].range) return (number / formats[i - 1].range).toFixed(2) + ' ' + formats[i].suffix;
    }
    return number;
}