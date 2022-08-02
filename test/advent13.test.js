import { it, expect } from 'vitest';
import wrapGifts from '../advent13';

it("Return an array wrapping the emojis with asterix", () => {
    expect(wrapGifts(["📷", "⚽️"])).toEqual([ '****',
    '*📷*',
    '*⚽️*',
    '****'
    ]);

    expect(wrapGifts(["🏈🎸", "🎮🧸"])).toEqual([ '******',
    '*🏈🎸*',
    '*🎮🧸*',
    '******'
    ]);

    expect(wrapGifts(["📷"])).toEqual([ '****',
    '*📷*',
    '****'
    ])
})