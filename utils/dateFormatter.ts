export const formatDays = (days: number) => {
    if (days <= 31) {
        if (days == 1) return days + ' den';
        if (days < 4) return days + ' dny';
        return days + ' dní';
    }
    if (days <= 365) return Math.floor(days / 30.4166667) + ' měsíců';
    if (days / 365 <= 1) return '1 rok';
    if (days / 365 <= 4) return Math.floor(days / 365) + ' roky';
    return (days / 365).toFixed(1) + ' let';
}