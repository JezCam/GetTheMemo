import { CORNERS, EDGES, moves } from './cube'
import { Move } from './definitions'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const applyMove = (stickers: number[], move: Move): number[] => {
    return stickers.map((_, index) => stickers[moves[move][index]])
}

export const getRandomPiece = (
    currentIndex: number,
    pieceType?: 'corner' | 'edge'
) => {
    switch (pieceType) {
        case 'corner':
            function getRandomCornerStickerIndex() {
                const randomIndex = CORNERS[Math.floor(Math.random() * 24)]
                if (randomIndex === currentIndex) {
                    return getRandomCornerStickerIndex()
                } else return randomIndex
            }
            return getRandomCornerStickerIndex()
        case 'edge':
            function getRandomEdgesStickerIndex() {
                const randomIndex = EDGES[Math.floor(Math.random() * 24)]
                if (randomIndex === currentIndex) {
                    return getRandomEdgesStickerIndex()
                } else return randomIndex
            }
            return getRandomEdgesStickerIndex()
        default:
            const centers = [4, 13, 22, 31, 40, 49]
            function getRandomStickerIndex() {
                const randomIndex = Math.floor(Math.random() * 54)
                if (centers.includes(randomIndex)) {
                    return getRandomStickerIndex()
                } else return randomIndex
            }
            const randomIndex = getRandomStickerIndex()
            return randomIndex
    }
}
