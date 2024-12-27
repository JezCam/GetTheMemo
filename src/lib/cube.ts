import { Move } from './definitions'
import { xyz, yzx, zxy } from './utils'

export const COLORS = [
    '#ffffff', // white
    '#ea580c', // orange
    '#16a34a', // green
    '#dc2626', // red
    '#2563eb', // blue
    '#eab308', // yellow
]
export const STICKER_DEFAULT_LETTERS = [
    'A',
    'A',
    'B',
    'D',
    '#',
    'B',
    'D',
    'C',
    'C',
    'E',
    'E',
    'F',
    'H',
    '#',
    'F',
    'H',
    'G',
    'G',
    'I',
    'I',
    'J',
    'L',
    '#',
    'J',
    'L',
    'K',
    'K',
    'M',
    'M',
    'N',
    'P',
    '#',
    'N',
    'P',
    'O',
    'O',
    'Q',
    'Q',
    'R',
    'T',
    '#',
    'R',
    'T',
    'S',
    'S',
    'U',
    'U',
    'V',
    'X',
    '#',
    'V',
    'X',
    'W',
    'W',
    'X',
    'X',
]

export const moves: Record<Move, number[]> = {
    U: [
        5, 3, 0, 6, 1, 7, 4, 2, 16, 17, 18, 11, 12, 13, 14, 15, 24, 25, 26, 19,
        20, 21, 22, 23, 32, 33, 34, 27, 28, 29, 30, 31, 8, 9, 10, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    ],
    "U'": [
        2, 4, 7, 1, 6, 0, 3, 5, 32, 33, 34, 11, 12, 13, 14, 15, 8, 9, 10, 19,
        20, 21, 22, 23, 16, 17, 18, 27, 28, 29, 30, 31, 24, 25, 26, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    ],
    R: [
        0, 1, 18, 3, 20, 5, 6, 23, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 42, 19,
        44, 21, 22, 47, 29, 27, 24, 30, 25, 31, 28, 26, 7, 33, 34, 4, 36, 2, 38,
        39, 40, 41, 37, 43, 35, 45, 46, 32,
    ],
    "R'": [
        0, 1, 34, 3, 36, 5, 39, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 2, 19,
        4, 21, 7, 23, 26, 28, 24, 25, 30, 24, 27, 29, 37, 33, 34, 44, 36, 42,
        38, 39, 40, 41, 18, 43, 20, 45, 46, 23,
    ],
    L: [
        32, 1, 2, 35, 4, 37, 6, 7, 13, 11, 8, 14, 9, 15, 12, 10, 0, 17, 18, 3,
        20, 5, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 40, 33, 34, 43, 36, 45,
        38, 39, 16, 41, 42, 19, 44, 21, 46, 47,
    ],
    "L'": [
        16, 1, 2, 19, 4, 21, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 40, 17, 18, 43,
        20, 45, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 5, 35, 3, 37,
        38, 0, 39, 41, 42, 36, 44, 34, 46, 47,
    ],
    D: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 37, 38, 39, 16, 17, 18, 19,
        20, 13, 14, 15, 24, 25, 26, 27, 28, 21, 22, 23, 32, 33, 34, 35, 36, 29,
        30, 31, 45, 44, 40, 46, 41, 47, 44, 42,
    ],
    "D'": [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 22, 23, 16, 17, 18, 19,
        20, 29, 30, 31, 24, 25, 26, 27, 28, 37, 38, 39, 32, 33, 34, 35, 36, 13,
        14, 15, 42, 44, 47, 41, 46, 40, 43, 45,
    ],
    B: [
        26, 28, 31, 3, 4, 5, 6, 7, 2, 9, 10, 1, 12, 0, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 47, 27, 46, 29, 30, 45, 37, 35, 32, 38, 33, 39,
        36, 34, 40, 41, 42, 43, 44, 8, 11, 13,
    ],
    "B'": [
        13, 11, 8, 3, 4, 5, 6, 7, 45, 9, 10, 46, 12, 47, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 0, 27, 1, 29, 30, 2, 34, 36, 39, 33, 38, 32, 35,
        37, 40, 41, 42, 43, 44, 31, 28, 26,
    ],
    F: [
        0, 1, 2, 3, 4, 15, 12, 10, 8, 9, 40, 11, 41, 13, 14, 42, 21, 19, 16, 22,
        17, 23, 20, 18, 5, 25, 26, 6, 28, 7, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 29, 27, 24, 43, 44, 45, 46, 47,
    ],
    "F'": [
        0, 1, 2, 3, 4, 24, 27, 29, 8, 9, 7, 11, 6, 13, 14, 5, 18, 20, 23, 17,
        22, 16, 19, 21, 42, 25, 26, 41, 28, 40, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 10, 12, 15, 43, 44, 45, 46, 47,
    ],
}

export const STICKER_FOCUS_TRANSFORMS = [
    // White
    xyz(53.26, 0, -135), // A
    xyz(45, 0, 180), // A
    xyz(53.26, 0, 135), // B
    xyz(45, 0, -90), // D
    xyz(0, 0, 0), // center
    xyz(45, 0, 90), // B
    xyz(53.26, 0, -45), // D
    xyz(45, 0, 0), // C
    xyz(53.26, 0, 45), // C
    // Orange
    yzx(53.26, -135, 90), // E
    xyz(-45, 0, 90), // E
    yzx(53.26, -45, 90), // F
    xyz(-45, -90, 90), // H
    xyz(90, 0, -90), // center
    xyz(-45, 90, 90), // F
    yzx(53.26, 135, 90), // H
    xyz(-45, 180, 90), // G
    yzx(53.26, 45, 90), // G
    // Green
    zxy(-135, 0, 143.26), // I
    xyz(-45, 0, 180), // I
    zxy(135, 0, 143.26), // J
    xyz(-45, -90, 180), // L
    xyz(90, 0, 0), // center
    xyz(-45, 90, 180), // J
    zxy(-45, 0, 143.26), // L
    xyz(-45, 180, 180), // K
    zxy(45, 0, 143.26), // K
    // Red
    yzx(233.26, 135, 90), // M
    xyz(-45, 0, -90), // M
    yzx(233.26, 45, 90), // N
    xyz(-45, -90, -90), // P
    xyz(90, 0, 90), // center
    xyz(-45, 90, -90), // N
    yzx(233.26, -135, 90), // P
    xyz(-45, 180, -90), // O
    yzx(233.26, -45, 90), // O
    // Blue
    zxy(-45, 0, -36.74), // Q
    xyz(-45, 0, 0), // Q
    zxy(45, 0, -36.74), // R
    xyz(-45, -90, 0), // T
    xyz(90, 0, 180), // center
    xyz(-45, 90, 0), // R
    zxy(-135, 0, -36.74), // T
    xyz(-45, 180, 0), // S
    zxy(135, 0, -36.74), // S
    // Yellow
    xyz(233.26, 0, 135), // U
    xyz(45, 180, 0), // U
    xyz(233.26, 0, -135), // V
    xyz(45, 180, -90), // X
    xyz(180, 0, 0), // center
    xyz(45, 180, 90), // V
    xyz(233.26, 0, 45), // X
    xyz(45, 180, 180), // W
    xyz(233.26, 0, -45), // W
]
export const STICKER_TRANSFORMS = [
    // White
    'translateY(-7.5rem) translateX(-7.5rem)', // A
    'translateY(-7.5rem) translateX(-2.5rem)', // A
    'translateY(-7.5rem) translateX(2.5rem)', // B
    'translateX(-7.5rem) translateY(-2.5rem)', // D
    'translateX(-2.5rem) translateY(-2.5rem)', // center
    'translateX(2.5rem) translateY(-2.5rem)', // B
    'translateX(-7.5rem) translateY(2.5rem)', // D
    'translateX(-2.5rem) translateY(2.5rem)', // C
    'translateX(2.5rem) translateY(2.5rem)', // C
    // Orange
    'translateX(-10rem) translateY(-7.5rem) translateZ(-12.5rem) rotateY(-90deg)', // E
    'translateX(-10rem) translateY(-7.5rem) translateZ(-7.5rem) rotateY(-90deg)', // E
    'translateX(-10rem) translateY(-7.5rem) translateZ(-2.5rem) rotateY(-90deg)', // F
    'translateX(-10rem) translateY(-2.5rem) translateZ(-12.5rem) rotateY(-90deg)', // H
    'translateX(-10rem) translateY(-2.5rem) translateZ(-7.5rem) rotateY(-90deg)', // center
    'translateX(-10rem) translateY(-2.5rem) translateZ(-2.5rem) rotateY(-90deg)', // F
    'translateX(-10rem) translateY(2.5rem) translateZ(-12.5rem) rotateY(-90deg)', // H
    'translateX(-10rem) translateY(2.5rem) translateZ(-7.5rem) rotateY(-90deg)', // G
    'translateX(-10rem) translateY(2.5rem) translateZ(-2.5rem) rotateY(-90deg)', // G
    // Green
    'translateX(-7.5rem) translateY(5rem) translateZ(-2.5rem) rotateX(-90deg)', // I
    'translateX(-2.5rem) translateY(5rem) translateZ(-2.5rem) rotateX(-90deg)', // I
    'translateX(2.5rem) translateY(5rem) translateZ(-2.5rem) rotateX(-90deg)', // J
    'translateX(-7.5rem) translateY(5rem) translateZ(-7.5rem) rotateX(-90deg)', // L
    'translateX(-2.5rem) translateY(5rem) translateZ(-7.5rem) rotateX(-90deg)', // center
    'translateX(2.5rem) translateY(5rem) translateZ(-7.5rem) rotateX(-90deg)', // J
    'translateX(-7.5rem) translateY(5rem) translateZ(-12.5rem) rotateX(-90deg)', // L
    'translateX(-2.5rem) translateY(5rem) translateZ(-12.5rem) rotateX(-90deg)', // K
    'translateX(2.5rem) translateY(5rem) translateZ(-12.5rem) rotateX(-90deg)', // K
    // Red
    'translateX(5rem) translateY(2.5rem) translateZ(-2.5rem) rotateY(90deg)', // M
    'translateX(5rem) translateY(-2.5rem) translateZ(-2.5rem) rotateY(90deg)', // M
    'translateX(5rem) translateY(-7.5rem) translateZ(-2.5rem) rotateY(90deg)', // N
    'translateX(5rem) translateY(2.5rem) translateZ(-7.5rem) rotateY(90deg)', // P
    'translateX(5rem) translateY(-2.5rem) translateZ(-7.5rem) rotateY(90deg)', // center
    'translateX(5rem) translateY(-7.5rem) translateZ(-7.5rem) rotateY(90deg)', // N
    'translateX(5rem) translateY(2.5rem) translateZ(-12.5rem) rotateY(90deg)', // P
    'translateX(5rem) translateY(-2.5rem) translateZ(-12.5rem) rotateY(90deg)', // O
    'translateX(5rem) translateY(-7.5rem) translateZ(-12.5rem) rotateY(90deg)', // O
    // Blue
    'translateX(2.5rem) translateY(-10rem) translateZ(-2.5rem) rotateX(90deg)', // Q
    'translateX(-2.5rem) translateY(-10rem) translateZ(-2.5rem) rotateX(90deg)', // Q
    'translateX(-7.5rem) translateY(-10rem) translateZ(-2.5rem) rotateX(90deg)', // R
    'translateX(2.5rem) translateY(-10rem) translateZ(-7.5rem) rotateX(90deg)', // T
    'translateX(-2.5rem) translateY(-10rem) translateZ(-7.5rem) rotateX(90deg)', // center
    'translateX(-7.5rem) translateY(-10rem) translateZ(-7.5rem) rotateX(90deg)', // R
    'translateX(2.5rem) translateY(-10rem) translateZ(-12.5rem) rotateX(90deg)', // T
    'translateX(-2.5rem) translateY(-10rem) translateZ(-12.5rem) rotateX(90deg)', // S
    'translateX(-7.5rem) translateY(-10rem) translateZ(-12.5rem) rotateX(90deg)', // S
    // Yellow
    'translateY(2.5rem) translateX(-7.5rem) translateZ(-15rem) rotateY(180deg)', // U
    'translateY(2.5rem) translateX(-2.5rem) translateZ(-15rem) rotateY(180deg)', // U
    'translateY(2.5rem) translateX(2.5rem) translateZ(-15rem) rotateY(180deg)', // V
    'translateY(-2.5rem) translateX(-7.5rem) translateZ(-15rem) rotateY(180deg)', // X
    'translateY(-2.5rem) translateX(-2.5rem) translateZ(-15rem) rotateY(180deg)', // center
    'translateY(-2.5rem) translateX(2.5rem) translateZ(-15rem) rotateY(180deg)', // V
    'translateY(-7.5rem) translateX(-7.5rem) translateZ(-15rem) rotateY(180deg)', // X
    'translateY(-7.5rem) translateX(-2.5rem) translateZ(-15rem) rotateY(180deg)', // W
    'translateY(-7.5rem) translateX(2.5rem) translateZ(-15rem) rotateY(180deg)', // W
]
