import { STICKER_DEFAULT_LETTERS } from '@/lib/cube'
import { Move, Sticker } from '@/lib/definitions'
import { applyMove } from '@/lib/utils'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type state = {
    stickers: Sticker[]
    rotation: number
}

const defaultStickers = STICKER_DEFAULT_LETTERS.map((letter, index) => ({
    letter: letter,
    color: Math.floor(index / 9),
}))

const stateDefault: state = {
    stickers: defaultStickers,
    rotation: 0,
}

export const useStore = create(
    persist<
        state & {
            setRotation: (rotation: number) => void
            applyMove: (move: Move) => void
            solve: () => void
        }
    >(
        (set, get) => ({
            ...stateDefault,
            setRotation: (rotation) => set({ rotation }),
            applyMove: (move) =>
                set({ stickers: applyMove(get().stickers, move) }),
            solve: () => set({ stickers: defaultStickers }),
        }),
        { name: 'state' }
    )
)
