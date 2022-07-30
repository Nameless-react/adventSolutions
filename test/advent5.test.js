import { it, expect } from 'vitest';
import daysToXmas from '../advent5';


it("Get the days until christmas ", () => {
    const date = new Date('Dec 25, 2021');
    expect(daysToXmas(date)).toBe(0);
    
    const date2 = new Date('Dec 26, 2021')
    expect(daysToXmas(date2)).toBe(-1);
    
    const date3 = new Date('Dec 31, 2021')
    expect(daysToXmas(date3)).toBe(-6);
    
    const date4 = new Date('Jan 1, 2022 00:00:01')
    expect(daysToXmas(date4)).toBe(-7);
    
    const date5 = new Date('Jan 1, 2022 23:59:59')
    expect(daysToXmas(date4)).toBe(-7);
})