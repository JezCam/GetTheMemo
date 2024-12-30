import {
    COLORS,
    STICKER_TRANSFORMS,
    STICKER_FOCUS_ROTATIONS,
    STICKER_SIZE,
    STICKER_BORDER_RADIUS,
    STICKER_FOCUS_TRANSFORM,
} from '@/lib/cube'
import { useStore } from '@/store/useStore'
import Quaternion from 'quaternion'
import React from 'react'

export default function Cube() {
    const { style, rotation, stickers, lettersState } = useStore()

    const quaternion = Quaternion.fromEuler(
        ...STICKER_FOCUS_ROTATIONS[rotation]
    )

    return (
        <div
            style={{
                width: STICKER_SIZE * 5 + 'rem',
                height: STICKER_SIZE * 5 + 'rem',
            }}
            className="pointer-events-none mb-6 flex items-center justify-center"
        >
            <div style={{ perspective: 4.5 * STICKER_SIZE + 'rem' }}>
                <div
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: quaternion.toCSSTransform(),
                    }}
                    className="relative transition-all duration-500"
                >
                    {stickers.map((sticker, index) => (
                        <div
                            key={index}
                            style={{
                                zIndex: index === rotation ? 2 : 1,
                                transform: STICKER_TRANSFORMS[index],
                                backfaceVisibility: 'hidden',
                                height: STICKER_SIZE + 'rem',
                                width: STICKER_SIZE + 'rem',
                                ...{
                                    stickerless: {},
                                    black: {
                                        padding:
                                            index === rotation
                                                ? ''
                                                : STICKER_SIZE / 20 + 'rem',
                                    },
                                    white: {
                                        padding: STICKER_SIZE / 20 + 'rem',
                                        backgroundColor: 'white',
                                        boxShadow: '0 0 0 1px white',
                                        borderRadius: '2px',
                                    },
                                    purple: {
                                        padding: STICKER_SIZE / 20 + 'rem',
                                        backgroundColor: '#7c3aed',
                                        boxShadow: '0 0 0 1px #7c3aed',
                                        borderRadius: '2px',
                                    },
                                }[style],
                            }}
                            className="absolute transition-all duration-300"
                        >
                            <div
                                style={{
                                    borderRadius:
                                        index === rotation
                                            ? STICKER_SIZE / 6 + 'rem'
                                            : STICKER_BORDER_RADIUS[index],
                                    transform:
                                        index === rotation
                                            ? STICKER_FOCUS_TRANSFORM[rotation]
                                            : '',
                                    backgroundColor: COLORS[sticker.color],
                                    opacity: index === rotation ? 1 : 0.5,
                                    transitionProperty: 'transform, opacity',
                                    boxShadow: 'inset 0 0 0 2px rgba(0,0,0,.1)',
                                }}
                                className="relative flex h-full w-full items-center justify-center duration-700"
                            >
                                {/* STATE INDICATOR */}
                                {index === rotation && (
                                    <div
                                        style={{
                                            border: {
                                                correct: `3px solid ${COLORS[2]}`,
                                                guessing: '',
                                                incorrect: `3px solid ${COLORS[3]}`,
                                                revealed: `3px solid ${COLORS[3]}`,
                                                tryingAgain: '',
                                                disabled: '',
                                            }[lettersState],
                                            height: STICKER_SIZE * 1.2 + 'rem',
                                            width: STICKER_SIZE * 1.2 + 'rem',
                                            borderRadius:
                                                STICKER_SIZE * 0.267 + 'rem',
                                        }}
                                        className="absolute"
                                    ></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
