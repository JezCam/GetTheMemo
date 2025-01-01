import { STICKER_DEFAULT_LETTERS } from '@/lib/cube'
import {
    AppState,
    ConfigureState,
    LettersState,
    MemoState,
    Move,
    Style,
    TimerState,
} from '@/lib/definitions'
import { applyMove } from '@/lib/utils'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type state = {
    appState: AppState
    lettersState: LettersState
    timerState: TimerState
    runningExpiryTimestamp: number
    previousLettersState: LettersState
    configureState: ConfigureState
    memoState: MemoState
    cornerMemo: string
    edgeMemo: string
    stickerIndexes: number[]
    letters: string[]
    rotation: number
    previousRotation: number
    score: number
    best: number
    corners: boolean
    edges: boolean
    input: string
    style: Style
}

const defaultStickers = Array.from(Array(54).keys())

const stateDefault: state = {
    appState: AppState.Letters,
    lettersState: LettersState.Guessing,
    timerState: TimerState.Ready,
    runningExpiryTimestamp: 0,
    previousLettersState: LettersState.Guessing,
    configureState: ConfigureState.Main,
    memoState: MemoState.Before,
    cornerMemo: '',
    edgeMemo: '',
    stickerIndexes: Array.from(Array(54).keys()),
    letters: STICKER_DEFAULT_LETTERS,
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
            setTimerState: (timerState: TimerState) => void
            setRunningExpiryTimestamp: (runningExpiryTimestamp: number) => void
            setPreviousLettersState: (lettersState: LettersState) => void
            setConfigureState: (configureState: ConfigureState) => void
            setMemoState: (memoState: MemoState) => void
            setCornerMemo: (cornerMemo: string) => void
            setEdgeMemo: (edgeMemo: string) => void
            setLetter: (index: number, letter: string) => void
            resetLetters: (faceIndex: number) => void
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
            setTimerState: (timerState) => set({ timerState }),
            setRunningExpiryTimestamp: (runningExpiryTimestamp) =>
                set({ runningExpiryTimestamp }),
            setPreviousLettersState: (previousLettersState) =>
                set({ previousLettersState }),
            setConfigureState: (configureState) => set({ configureState }),
            setMemoState: (memoState) => set({ memoState }),
            setCornerMemo: (cornerMemo) => set({ cornerMemo }),
            setEdgeMemo: (edgeMemo) => set({ edgeMemo }),
            setLetter: (i: number, newLetter: string) =>
                set({
                    letters: get().letters.map((letter, j) =>
                        j === i ? newLetter : letter
                    ),
                }),
            resetLetters: (faceIndex: number) =>
                set({
                    letters: get().letters.map((letter, index) =>
                        index >= faceIndex * 9 && index <= faceIndex * 9 + 8
                            ? STICKER_DEFAULT_LETTERS[index]
                            : letter
                    ),
                }),
            setRotation: (rotation) => set({ rotation }),
            setPreviousRotation: (previousRotation) =>
                set({ previousRotation }),
            applyMove: (move) =>
                set({ stickerIndexes: applyMove(get().stickerIndexes, move) }),
            solve: () => set({ stickerIndexes: defaultStickers }),
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
