import { it, expect } from "vitest";
import fixFiles from "../advent18";


it("Format the repeated files base on files", () => {
    const files = ['photo', 'postcard', 'photo', 'photo', 'video']
    expect(fixFiles(files)).toEqual(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'])
})


it("Format the repeated files base on files2", () => {
    const files2 = ['file', 'file', 'file', 'game', 'game']
    expect(fixFiles(files2)).toEqual(['file', 'file(1)', 'file(2)', 'game', 'game(1)']) 
})


it("Format the repeated files base on files3", () => {
    const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
    expect(fixFiles(files3)).toEqual(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']) 
})
