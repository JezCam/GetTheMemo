import { Move } from './definitions'

export const STICKER_SIZE = 4

export const COLORS = [
    '#ffffff', // white
    '#ea580c', // orange
    '#16a34a', // green
    '#dc2626', // red
    '#2563eb', // blue
    '#eab308', // yellow
]

export const CORNERS = [
    0, 2, 6, 8, 9, 11, 15, 17, 18, 20, 24, 26, 27, 29, 33, 35, 36, 38, 42, 44,
    45, 47, 51, 53,
]
export const EDGES = [
    1, 3, 5, 7, 10, 12, 14, 16, 19, 21, 23, 25, 28, 30, 32, 34, 37, 39, 41, 43,
    46, 48, 50, 52,
]

export const STICKER_BORDER_RADIUS = [
    '0px 10px 10px 10px', // A
    '10px 10px 10px 10px', // A
    '10px 0px 10px 10px', // B
    '10px 10px 10px 10px', // D
    '10px 10px 10px 10px', // center
    '10px 10px 10px 10px', // B
    '10px 10px 10px 0px', // D
    '10px 10px 10px 10px', // C
    '10px 10px 0px 10px', // C
    '10px 0px 10px 10px', // E
    '10px 10px 10px 10px', // E
    '10px 10px 0px 10px', // F
    '10px 10px 10px 10px', // H
    '10px 10px 10px 10px', // center
    '10px 10px 10px 10px', // F
    '0px 10px 10px 10px', // H
    '10px 10px 10px 10px', // G
    '10px 10px 10px 0px', // G
    '0px 10px 10px 10px', // I
    '10px 10px 10px 10px', // I
    '10px 0px 10px 10px', // J
    '10px 10px 10px 10px', // L
    '10px 10px 10px 10px', // center
    '10px 10px 10px 10px', // J
    '10px 10px 10px 0px', // L
    '10px 10px 10px 10px', // K
    '10px 10px 0px 10px', // K
    '10px 10px 10px 0px', // M
    '10px 10px 10px 10px', // M
    '0px 10px 10px 10px', // N
    '10px 10px 10px 10px', // P
    '10px 10px 10px 10px', // center
    '10px 10px 10px 10px', // N
    '10px 10px 0px 10px', // P
    '10px 10px 10px 10px', // O
    '10px 0px 10px 10px', // O
    '10px 10px 0px 10px', // Q
    '10px 10px 10px 10px', // Q
    '10px 10px 10px 0px', // R
    '10px 10px 10px 10px', // T
    '10px 10px 10px 10px', // center
    '10px 10px 10px 10px', // R
    '10px 0px 10px 10px', // T
    '10px 10px 10px 10px', // S
    '0px 10px 10px 10px', // S
    '10px 10px 0px 10px', // U
    '10px 10px 10px 10px', // U
    '10px 10px 10px 0px', // V
    '10px 10px 10px 10px', // X
    '10px 10px 10px 10px', // center
    '10px 10px 10px 10px', // V
    '10px 0px 10px 10px', // X
    '10px 10px 10px 10px', // W
    '0px 10px 10px 10px', // W
]

export const STICKER_FOCUS_TRANSFORM = [
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'}) translateY(${STICKER_SIZE / 6 + 'rem'})`, // A
    `scale(1.6) translateY(${STICKER_SIZE / 6 + 'rem'})`, // A
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'}) translateY(${STICKER_SIZE / 6 + 'rem'})`, // B
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'})`, // D
    '', // center
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'})`, // B
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'}) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // D
    `scale(1.6) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // C
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'}) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // C
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'}) translateY(${STICKER_SIZE / 6 + 'rem'})`, // E
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'})`, // E
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'}) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // F
    `scale(1.6) translateY(${STICKER_SIZE / 6 + 'rem'})`, // H
    '', // center
    `scale(1.6) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // F
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'}) translateY(${STICKER_SIZE / 6 + 'rem'})`, // H
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'})`, // G
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'}) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // G
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'}) translateY(${STICKER_SIZE / 6 + 'rem'})`, // I
    `scale(1.6) translateY(${STICKER_SIZE / 6 + 'rem'})`, // I
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'}) translateY(${STICKER_SIZE / 6 + 'rem'})`, // J
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'})`, // L
    '', // center
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'})`, // J
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'}) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // L
    `scale(1.6) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // K
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'}) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // K
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'}) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // M
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'})`, // M
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'}) translateY(${STICKER_SIZE / 6 + 'rem'})`, // N
    `scale(1.6) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // P
    '', // center
    `scale(1.6) translateY(${STICKER_SIZE / 6 + 'rem'})`, // N
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'}) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // P
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'})`, // O
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'}) translateY(${STICKER_SIZE / 6 + 'rem'})`, // O
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'}) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // Q
    `scale(1.6) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // Q
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'}) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // R
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'})`, // T
    '', // center
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'})`, // R
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'}) translateY(${STICKER_SIZE / 6 + 'rem'})`, // T
    `scale(1.6) translateY(${STICKER_SIZE / 6 + 'rem'})`, // S
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'}) translateY(${STICKER_SIZE / 6 + 'rem'})`, // S
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'}) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // U
    `scale(1.6) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // U
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'}) translateY(-${STICKER_SIZE / 6 + 'rem'})`, // V
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'})`, // X
    '', // center
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'})`, // V
    `scale(1.6) translateX(-${STICKER_SIZE / 6 + 'rem'}) translateY(${STICKER_SIZE / 6 + 'rem'})`, // X
    `scale(1.6) translateY(${STICKER_SIZE / 6 + 'rem'})`, // W
    `scale(1.6) translateX(${STICKER_SIZE / 6 + 'rem'}) translateY(${STICKER_SIZE / 6 + 'rem'})`, // W
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
]

export const moves: Record<Move, number[]> = {
    U: [
        6, 3, 0, 7, 4, 1, 8, 5, 2, 18, 19, 20, 12, 13, 14, 15, 16, 17, 27, 28,
        29, 21, 22, 23, 24, 25, 26, 36, 37, 38, 30, 31, 32, 33, 34, 35, 9, 10,
        11, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
    ],
    "U'": [
        2, 5, 8, 1, 4, 7, 0, 3, 6, 36, 37, 38, 12, 13, 14, 15, 16, 17, 9, 10,
        11, 21, 22, 23, 24, 25, 26, 18, 19, 20, 30, 31, 32, 33, 34, 35, 27, 28,
        29, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
    ],
    U2: [
        8, 7, 6, 5, 4, 3, 2, 1, 0, 27, 28, 29, 12, 13, 14, 15, 16, 17, 36, 37,
        38, 21, 22, 23, 24, 25, 26, 9, 10, 11, 30, 31, 32, 33, 34, 35, 18, 19,
        20, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
    ],
    R: [
        0, 1, 20, 3, 4, 23, 6, 7, 26, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        47, 21, 22, 50, 24, 25, 53, 33, 30, 27, 34, 31, 28, 35, 32, 29, 8, 37,
        38, 5, 40, 41, 2, 43, 44, 45, 46, 42, 48, 49, 39, 51, 52, 36,
    ],
    "R'": [
        0, 1, 42, 3, 4, 39, 6, 7, 36, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        2, 21, 22, 5, 24, 25, 8, 29, 32, 35, 28, 31, 34, 27, 30, 33, 53, 37, 38,
        50, 40, 41, 47, 43, 44, 45, 46, 20, 48, 49, 23, 51, 52, 26,
    ],
    R2: [
        0, 1, 47, 3, 4, 50, 6, 7, 53, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        42, 21, 22, 39, 24, 25, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 37,
        38, 23, 40, 41, 20, 43, 44, 45, 46, 2, 48, 49, 5, 51, 52, 8,
    ],
    L: [
        44, 1, 2, 41, 4, 5, 38, 7, 8, 15, 12, 9, 16, 13, 10, 17, 14, 11, 0, 19,
        20, 3, 22, 23, 6, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        51, 39, 40, 48, 42, 43, 45, 18, 46, 47, 21, 49, 50, 24, 52, 53,
    ],
    "L'": [
        18, 1, 2, 21, 4, 5, 24, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 45, 19,
        20, 48, 22, 23, 51, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        6, 39, 40, 3, 42, 43, 0, 44, 46, 47, 41, 49, 50, 38, 52, 53,
    ],
    L2: [
        45, 1, 2, 48, 4, 5, 51, 7, 8, 17, 16, 15, 14, 13, 12, 11, 10, 9, 44, 19,
        20, 41, 22, 23, 38, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        24, 39, 40, 21, 42, 43, 18, 0, 46, 47, 3, 49, 50, 6, 52, 53,
    ],
    D: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 42, 43, 44, 18, 19,
        20, 21, 22, 23, 15, 16, 17, 27, 28, 29, 30, 31, 32, 24, 25, 26, 36, 37,
        38, 39, 40, 41, 33, 34, 35, 51, 50, 45, 52, 49, 46, 53, 50, 47,
    ],
    "D'": [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 24, 25, 26, 18, 19,
        20, 21, 22, 23, 33, 34, 35, 27, 28, 29, 30, 31, 32, 42, 43, 44, 36, 37,
        38, 39, 40, 41, 15, 16, 17, 47, 50, 53, 46, 49, 52, 45, 48, 51,
    ],
    D2: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 33, 34, 35, 18, 19,
        20, 21, 22, 23, 42, 43, 44, 27, 28, 29, 30, 31, 32, 15, 16, 17, 36, 37,
        38, 39, 40, 41, 24, 25, 26, 53, 46, 51, 50, 49, 50, 47, 46, 45,
    ],
    B: [
        29, 32, 35, 3, 4, 5, 6, 7, 8, 2, 10, 11, 1, 13, 14, 0, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 53, 30, 31, 52, 33, 34, 51, 42, 39,
        36, 43, 40, 37, 44, 41, 38, 45, 46, 47, 48, 49, 50, 9, 12, 15,
    ],
    "B'": [
        15, 12, 9, 3, 4, 5, 6, 7, 8, 51, 10, 11, 52, 13, 14, 53, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 0, 30, 31, 1, 33, 34, 2, 38, 41, 44,
        37, 40, 43, 36, 39, 42, 45, 46, 47, 48, 49, 50, 35, 32, 29,
    ],
    B2: [
        53, 52, 51, 3, 4, 5, 6, 7, 8, 35, 10, 11, 32, 13, 14, 29, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 15, 30, 31, 12, 33, 34, 9, 44,
        43, 42, 41, 40, 39, 38, 37, 36, 45, 46, 47, 48, 49, 50, 2, 1, 0,
    ],
    F: [
        0, 1, 2, 3, 4, 5, 17, 14, 11, 9, 10, 45, 12, 13, 46, 15, 16, 47, 24, 21,
        18, 25, 22, 19, 26, 23, 20, 6, 28, 29, 7, 31, 32, 8, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 33, 30, 27, 48, 49, 50, 51, 52, 53,
    ],
    "F'": [
        0, 1, 2, 3, 4, 5, 27, 30, 33, 9, 10, 8, 12, 13, 7, 15, 16, 6, 20, 23,
        26, 19, 22, 25, 18, 21, 24, 47, 28, 29, 46, 31, 32, 45, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 11, 14, 17, 48, 49, 50, 51, 52, 53,
    ],
    F2: [
        0, 1, 2, 3, 4, 5, 47, 46, 45, 9, 10, 33, 12, 13, 30, 15, 16, 27, 26, 25,
        24, 23, 22, 21, 20, 19, 18, 17, 28, 29, 14, 31, 32, 11, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 8, 7, 6, 48, 49, 50, 51, 52, 53,
    ],
}

const deg = Math.PI / 180
export const xyz = (
    x: number,
    y: number,
    z: number
): [number, number, number, string] => [x * deg, y * deg, z * deg, 'XYZ']
export const zxy = (
    z: number,
    x: number,
    y: number
): [number, number, number, string] => [x * deg, y * deg, z * deg, 'ZXY']
export const yzx = (
    y: number,
    z: number,
    x: number
): [number, number, number, string] => [x * deg, y * deg, z * deg, 'YZX']

export const STICKER_FOCUS_ROTATIONS = [
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
    `translateX(-${1.5 * STICKER_SIZE}rem) translateY(-${1.5 * STICKER_SIZE}rem) translateZ(${1.5 * STICKER_SIZE}rem)`, // A
    `translateX(-${0.5 * STICKER_SIZE}rem) translateY(-${1.5 * STICKER_SIZE}rem) translateZ(${1.5 * STICKER_SIZE}rem)`, // A
    `translateX(${0.5 * STICKER_SIZE}rem) translateY(-${1.5 * STICKER_SIZE}rem) translateZ(${1.5 * STICKER_SIZE}rem)`, // B
    `translateX(-${1.5 * STICKER_SIZE}rem) translateY(-${0.5 * STICKER_SIZE}rem) translateZ(${1.5 * STICKER_SIZE}rem)`, // D
    `translateX(-${0.5 * STICKER_SIZE}rem) translateY(-${0.5 * STICKER_SIZE}rem) translateZ(${1.5 * STICKER_SIZE}rem)`, // center
    `translateX(${0.5 * STICKER_SIZE}rem) translateY(-${0.5 * STICKER_SIZE}rem) translateZ(${1.5 * STICKER_SIZE}rem)`, // B
    `translateX(-${1.5 * STICKER_SIZE}rem) translateY(${0.5 * STICKER_SIZE}rem) translateZ(${1.5 * STICKER_SIZE}rem)`, // D
    `translateX(-${0.5 * STICKER_SIZE}rem) translateY(${0.5 * STICKER_SIZE}rem) translateZ(${1.5 * STICKER_SIZE}rem)`, // C
    `translateX(${0.5 * STICKER_SIZE}rem) translateY(${0.5 * STICKER_SIZE}rem) translateZ(${1.5 * STICKER_SIZE}rem)`, // C
    // Orange
    `rotateY(-90deg) translateZ(${2 * STICKER_SIZE}rem) translateX(${STICKER_SIZE}rem) translateY(-${1.5 * STICKER_SIZE}rem)`, // E
    `rotateY(-90deg) translateZ(${2 * STICKER_SIZE}rem) translateX(${STICKER_SIZE}rem) translateY(-${0.5 * STICKER_SIZE}rem)`, // E
    `rotateY(-90deg) translateZ(${2 * STICKER_SIZE}rem) translateX(${STICKER_SIZE}rem) translateY(${0.5 * STICKER_SIZE}rem)`, // F
    `rotateY(-90deg) translateZ(${2 * STICKER_SIZE}rem) translateY(-${1.5 * STICKER_SIZE}rem)`, // H
    `rotateY(-90deg) translateZ(${2 * STICKER_SIZE}rem) translateY(-${0.5 * STICKER_SIZE}rem)`, // center
    `rotateY(-90deg) translateZ(${2 * STICKER_SIZE}rem) translateY(${0.5 * STICKER_SIZE}rem)`, // F
    `rotateY(-90deg) translateZ(${2 * STICKER_SIZE}rem) translateX(-${STICKER_SIZE}rem) translateY(-${1.5 * STICKER_SIZE}rem)`, // H
    `rotateY(-90deg) translateZ(${2 * STICKER_SIZE}rem) translateX(-${STICKER_SIZE}rem) translateY(-${0.5 * STICKER_SIZE}rem)`, // G
    `rotateY(-90deg) translateZ(${2 * STICKER_SIZE}rem) translateX(-${STICKER_SIZE}rem) translateY(${0.5 * STICKER_SIZE}rem)`, // G
    // Green
    `rotateX(-90deg) translateZ(${STICKER_SIZE}rem) translateY(-${STICKER_SIZE}rem) translateX(-${1.5 * STICKER_SIZE}rem)`, // I
    `rotateX(-90deg) translateZ(${STICKER_SIZE}rem) translateY(-${STICKER_SIZE}rem) translateX(-${0.5 * STICKER_SIZE}rem)`, // I
    `rotateX(-90deg) translateZ(${STICKER_SIZE}rem) translateY(-${STICKER_SIZE}rem) translateX(${0.5 * STICKER_SIZE}rem)`, // J
    `rotateX(-90deg) translateZ(${STICKER_SIZE}rem) translateX(-${1.5 * STICKER_SIZE}rem)`, // L
    `rotateX(-90deg) translateZ(${STICKER_SIZE}rem) translateX(-${0.5 * STICKER_SIZE}rem)`, // center
    `rotateX(-90deg) translateZ(${STICKER_SIZE}rem) translateX(${0.5 * STICKER_SIZE}rem)`, // J
    `rotateX(-90deg) translateZ(${STICKER_SIZE}rem) translateY(${STICKER_SIZE}rem) translateX(-${1.5 * STICKER_SIZE}rem)`, // L
    `rotateX(-90deg) translateZ(${STICKER_SIZE}rem) translateY(${STICKER_SIZE}rem) translateX(-${0.5 * STICKER_SIZE}rem)`, // K
    `rotateX(-90deg) translateZ(${STICKER_SIZE}rem) translateY(${STICKER_SIZE}rem) translateX(${0.5 * STICKER_SIZE}rem)`, // K
    // Red
    `rotateY(90deg) translateZ(${STICKER_SIZE}rem) translateX(-${STICKER_SIZE}rem) translateY(${0.5 * STICKER_SIZE}rem)`, // M
    `rotateY(90deg) translateZ(${STICKER_SIZE}rem) translateX(-${STICKER_SIZE}rem) translateY(-${0.5 * STICKER_SIZE}rem)`, // M
    `rotateY(90deg) translateZ(${STICKER_SIZE}rem) translateX(-${STICKER_SIZE}rem) translateY(-${1.5 * STICKER_SIZE}rem)`, // N
    `rotateY(90deg) translateZ(${STICKER_SIZE}rem) translateY(${0.5 * STICKER_SIZE}rem)`, // P
    `rotateY(90deg) translateZ(${STICKER_SIZE}rem) translateY(-${0.5 * STICKER_SIZE}rem)`, // center
    `rotateY(90deg) translateZ(${STICKER_SIZE}rem) translateY(-${1.5 * STICKER_SIZE}rem)`, // N
    `rotateY(90deg) translateZ(${STICKER_SIZE}rem) translateX(${STICKER_SIZE}rem) translateY(${0.5 * STICKER_SIZE}rem)`, // P
    `rotateY(90deg) translateZ(${STICKER_SIZE}rem) translateX(${STICKER_SIZE}rem) translateY(-${0.5 * STICKER_SIZE}rem)`, // O
    `rotateY(90deg) translateZ(${STICKER_SIZE}rem) translateX(${STICKER_SIZE}rem) translateY(-${1.5 * STICKER_SIZE}rem)`, // O
    // Blue
    `rotateX(90deg) translateZ(${2 * STICKER_SIZE}rem) translateY(${STICKER_SIZE}rem) translateX(${0.5 * STICKER_SIZE}rem)`, // Q
    `rotateX(90deg) translateZ(${2 * STICKER_SIZE}rem) translateY(${STICKER_SIZE}rem) translateX(-${0.5 * STICKER_SIZE}rem)`, // Q
    `rotateX(90deg) translateZ(${2 * STICKER_SIZE}rem) translateY(${STICKER_SIZE}rem) translateX(-${1.5 * STICKER_SIZE}rem)`, // R
    `rotateX(90deg) translateZ(${2 * STICKER_SIZE}rem) translateX(${0.5 * STICKER_SIZE}rem)`, // T
    `rotateX(90deg) translateZ(${2 * STICKER_SIZE}rem) translateX(-${0.5 * STICKER_SIZE}rem)`, // center
    `rotateX(90deg) translateZ(${2 * STICKER_SIZE}rem) translateX(-${1.5 * STICKER_SIZE}rem)`, // R
    `rotateX(90deg) translateZ(${2 * STICKER_SIZE}rem) translateY(-${STICKER_SIZE}rem) translateX(${0.5 * STICKER_SIZE}rem)`, // T
    `rotateX(90deg) translateZ(${2 * STICKER_SIZE}rem) translateY(-${STICKER_SIZE}rem) translateX(-${0.5 * STICKER_SIZE}rem)`, // S
    `rotateX(90deg) translateZ(${2 * STICKER_SIZE}rem) translateY(-${STICKER_SIZE}rem) translateX(-${1.5 * STICKER_SIZE}rem)`, // S
    // Yellow
    `translateX(-${1.5 * STICKER_SIZE}rem) translateY(${0.5 * STICKER_SIZE}rem) translateZ(-${1.5 * STICKER_SIZE}rem) rotateY(180deg)`, // U
    `translateX(-${0.5 * STICKER_SIZE}rem) translateY(${0.5 * STICKER_SIZE}rem) translateZ(-${1.5 * STICKER_SIZE}rem) rotateY(180deg)`, // U
    `translateX(${0.5 * STICKER_SIZE}rem) translateY(${0.5 * STICKER_SIZE}rem) translateZ(-${1.5 * STICKER_SIZE}rem) rotateY(180deg)`, // V
    `translateX(-${1.5 * STICKER_SIZE}rem) translateY(-${0.5 * STICKER_SIZE}rem) translateZ(-${1.5 * STICKER_SIZE}rem) rotateY(180deg)`, // X
    `translateX(-${0.5 * STICKER_SIZE}rem) translateY(-${0.5 * STICKER_SIZE}rem) translateZ(-${1.5 * STICKER_SIZE}rem) rotateY(180deg)`, // center
    `translateX(${0.5 * STICKER_SIZE}rem) translateY(-${0.5 * STICKER_SIZE}rem) translateZ(-${1.5 * STICKER_SIZE}rem) rotateY(180deg)`, // V
    `translateX(-${1.5 * STICKER_SIZE}rem) translateY(-${1.5 * STICKER_SIZE}rem) translateZ(-${1.5 * STICKER_SIZE}rem) rotateY(180deg)`, // X
    `translateX(-${0.5 * STICKER_SIZE}rem) translateY(-${1.5 * STICKER_SIZE}rem) translateZ(-${1.5 * STICKER_SIZE}rem) rotateY(180deg)`, // W
    `translateX(${0.5 * STICKER_SIZE}rem) translateY(-${1.5 * STICKER_SIZE}rem) translateZ(-${1.5 * STICKER_SIZE}rem) rotateY(180deg)`, // W
]
