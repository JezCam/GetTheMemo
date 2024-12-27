import { moves } from './cube'
import { Move, Sticker } from './definitions'

export const applyMove = (stickers: Sticker[], move: Move): Sticker[] => {
    return stickers.map((_, index) => stickers[moves[move][index]])
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
