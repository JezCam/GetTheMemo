export type Sticker = {
    letter: string
    color: number
}

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
}

export enum ConfigureState {
    Main = 'main',
    Colors = 'colors',
    Letters = 'letters',
}

export type Style = 'stickerless' | 'black' | 'white' | 'purple'
