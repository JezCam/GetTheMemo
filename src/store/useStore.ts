import { STICKER_DEFAULT_LETTERS } from '@/lib/cube'
import {
    AppState,
    ConfigureState,
    LettersState,
    Move,
    Sticker,
    Style,
} from '@/lib/definitions'
import { applyMove } from '@/lib/utils'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type state = {
    appState: AppState
    lettersState: LettersState
    configureState: ConfigureState
    stickers: Sticker[]
    rotation: number
    score: number
    best: number
    corners: boolean
    edges: boolean
    input: string
    style: Style
}

const defaultStickers = STICKER_DEFAULT_LETTERS.map((letter, index) => ({
    letter: letter,
    color: Math.floor(index / 9),
}))

const stateDefault: state = {
    appState: AppState.Letters,
    lettersState: LettersState.Guessing,
    configureState: ConfigureState.Main,
    stickers: defaultStickers,
    rotation: 0,
    score: 0,
    best: 0,
    corners: true,
    edges: true,
    input: '',
    style: 'black',
}

export const useStore = create(
    persist<
        state & {
            setAppState: (appState: AppState) => void
            setLettersState: (lettersState: LettersState) => void
            setConfigureState: (configureState: ConfigureState) => void
            setRotation: (rotation: number) => void
            applyMove: (move: Move) => void
            solve: () => void
            setScore: (score: number) => void
            setBest: (best: number) => void
            setCorners: (corners: boolean) => void
            setEdges: (edges: boolean) => void
            setInput: (input: string) => void
            setStyle: (style: Style) => void
        }
    >(
        (set, get) => ({
            ...stateDefault,
            setAppState: (appState) => set({ appState }),
            setLettersState: (lettersState) => set({ lettersState }),
            setConfigureState: (configureState) => set({ configureState }),
            setRotation: (rotation) => set({ rotation }),
            applyMove: (move) =>
                set({ stickers: applyMove(get().stickers, move) }),
            solve: () => set({ stickers: defaultStickers }),
            setScore: (score) => set({ score }),
            setBest: (best) => set({ best }),
            setCorners: (corners) => set({ corners }),
            setEdges: (edges) => set({ edges }),
            setInput: (input) => set({ input }),
            setStyle: (style) => set({ style }),
        }),
        { name: 'state' }
    )
)
