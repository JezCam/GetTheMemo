import { STICKER_DEFAULT_LETTERS } from '@/lib/cube'
import { Sticker } from '@/lib/definitions'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type state = {
    stickers: Sticker[]
    rotation: number
}

const stateDefault: state = {
    stickers: STICKER_DEFAULT_LETTERS.map((letter, index) => ({
        letter: letter,
        color: Math.floor(index / 9),
    })),
    rotation: 0,
}

export const useStore = create(
    persist<
        state & {
            setStickers: (stickers: Sticker[]) => void
            setRotation: (rotation: number) => void
        }
    >(
        (set, get) => ({
            ...stateDefault,
            setStickers: (stickers) => set({ stickers }),
            setRotation: (rotation) => set({ rotation }),
        }),
        { name: 'state' }
    )
)
