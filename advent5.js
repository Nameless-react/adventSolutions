function daysToXmas(date) {
    const christmas = new Date("Dec 25, 2021 23:59:59");
    
    const diff = christmas.getTime() - date.getTime()
    return Math.floor(diff / (1000 * 60 * 60 * 24))
}

const date = new Date('Dec 25, 2021')
console.log(daysToXmas(date)) // 0

const date1 = new Date('Dec 26, 2021')
console.log(daysToXmas(date1)) // -1

const date2 = new Date('Dec 31, 2021')
console.log(daysToXmas(date2)) // -6

const date3 = new Date('Jan 1, 2022 00:00:01')
console.log(daysToXmas(date3)) // -7

const date4 = new Date('Jan 1, 2022 23:59:59')
console.log(daysToXmas(date4)) // -7