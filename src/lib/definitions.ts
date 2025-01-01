export type Move =
    | 'U'
    | "U'"
    | 'U2'
    | 'R'
    | "R'"
    | 'R2'
    | 'L'
    | "L'"
    | 'L2'
    | 'D'
    | "D'"
    | 'D2'
    | 'B'
    | "B'"
    | 'B2'
    | 'F'
    | "F'"
    | 'F2'

export enum AppState {
    Letters = 'letters',
    Configure = 'configure',
    Memo = 'memo',
}

export enum LettersState {
    Guessing = 'guessing',
    TryingAgain = 'tryingAgain',
    Revealed = 'revealed',
    Correct = 'correct',
    Incorrect = 'incorrect',
    Disabled = 'disabled',
}

export const enum TimerState {
    Ready = 'ready',
    Countdown = 'countdown',
    Running = 'running',
    Expired = 'expired',
}

export enum ConfigureState {
    Main = 'main',
    Colors = 'colors',
    Letters = 'letters',
}

export enum MemoState {
    Before = 'before',
    Corners = 'corners',
    Edges = 'edges',
    After = 'after',
}

export type Style = 'stickerless' | 'black' | 'white' | 'purple'
