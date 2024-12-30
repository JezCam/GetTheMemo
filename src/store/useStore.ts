import { STICKER_DEFAULT_LETTERS } from '@/lib/cube'
import {
    AppState,
    ConfigureState,
    LettersState,
    MemoState,
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
    previousLettersState: LettersState
    configureState: ConfigureState
    memoState: MemoState
    cornerMemo: string
    edgeMemo: string
    stickers: Sticker[]
    rotation: number
    previousRotation: number
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
    previousLettersState: LettersState.Guessing,
    configureState: ConfigureState.Main,
    memoState: MemoState.Before,
    cornerMemo: '',
    edgeMemo: '',
    stickers: defaultStickers,
    rotation: 0,
    previousRotation: 0,
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
            setPreviousLettersState: (lettersState: LettersState) => void
            setConfigureState: (configureState: ConfigureState) => void
            setMemoState: (memoState: MemoState) => void
            setCornerMemo: (cornerMemo: string) => void
            setEdgeMemo: (edgeMemo: string) => void
            setRotation: (rotation: number) => void
            setPreviousRotation: (previousRotation: number) => void
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
            setPreviousLettersState: (previousLettersState) =>
                set({ previousLettersState }),
            setConfigureState: (configureState) => set({ configureState }),
            setMemoState: (memoState) => set({ memoState }),
            setCornerMemo: (cornerMemo) => set({ cornerMemo }),
            setEdgeMemo: (edgeMemo) => set({ edgeMemo }),
            setRotation: (rotation) => set({ rotation }),
            setPreviousRotation: (previousRotation) =>
                set({ previousRotation }),
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
