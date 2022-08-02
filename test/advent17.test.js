import { it, expect } from "vitest";
import countPackages from "../advent17";

it("Count the packages a bussiness can handle in a day (carriers)", () => {
    const carriers = [
            ['dapelu', 5, ['midu', 'jelowing']],
            ['midu', 2, []],
            ['jelowing', 2, []]
        ]
          
    expect(countPackages(carriers, 'dapelu')).toEqual(9)
          
})

it("Count the packages a bussiness can handle in a day (carriers2)", () => {
    const carriers2 = [
        ['lolivier', 8, ['camila', 'jesuspoleo']],
        ['camila', 5, ['sergiomartinez', 'conchaasensio']],
        ['jesuspoleo', 4, []],
        ['sergiomartinez', 4, []],
        ['conchaasensio', 3, ['facundocapua', 'faviola']],
        ['facundocapua', 2, []],
        ['faviola', 1, []]
    ]
      
    expect(countPackages(carriers2, 'camila')).toEqual(15)
})
