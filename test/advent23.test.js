import { it, expect, describe } from 'vitest';
import canReconfigure from '../advent23';

describe('Can reconfigure the product (from) to other product (to) with the specify rules', () => {
    it("", () => {
        const from = 'BAL'
        const to = 'LIB'
        expect(canReconfigure(from, to)).toBe(true)
    })
    
    it("", () => {
        const from2 = 'CON';
        const to2 = 'JUU';
        expect(canReconfigure(from2, to2)).toBe(false)
    })
    
    it("", () => {
        const from3 = 'XBOX'
        const to3 = 'XXBO'
        expect(canReconfigure(from3, to3)).toBe(false)
    })
    
    it("", () => {
        const from4 = 'XBOX'
        const to4   = 'XOBX'
        expect(canReconfigure(from4, to4)).toBe(true)
    })
    
    it("", () => {
        const from5 = 'MMM'
        const to5   = 'MID'
        expect(canReconfigure(from5, to5)).toBe(false)
    })
    
    it("", () => {
        const from6 = 'AA';
        const to6 = 'MID';
        expect(canReconfigure(from6, to6)).toBe(false);
    })
})
