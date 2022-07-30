export default function daysToXmas(date) {
    const christmas = new Date("Dec 25, 2021 23:59:59");
    
    const diff = christmas.getTime() - date.getTime()
    return Math.floor(diff / (1000 * 60 * 60 * 24))
}

