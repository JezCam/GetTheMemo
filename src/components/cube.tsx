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
            className="mb-6 flex items-center justify-center"
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
                                        padding: STICKER_SIZE / 20 + 'rem',
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
                                    transform:
                                        index === rotation
                                            ? STICKER_FOCUS_TRANSFORM[rotation]
                                            : '',
                                    borderRadius:
                                        index === rotation
                                            ? STICKER_SIZE / 5 + 'rem'
                                            : STICKER_BORDER_RADIUS[index],
                                    boxShadow:
                                        index === rotation
                                            ? {
                                                  correct:
                                                      'inset 0 0 0 3px green',
                                                  incorrect:
                                                      'inset 0 0 0 3px red',
                                                  revealed:
                                                      'inset 0 0 0 3px red',
                                                  tryingAgain: '',
                                                  guessing: '',
                                              }[lettersState]
                                            : 'inset 0 0 0 2px rgba(0,0,0,0.1)',
                                }}
                                className="relative h-full w-full overflow-hidden bg-transparent transition-transform duration-700"
                            >
                                <div
                                    style={{
                                        backgroundColor: COLORS[sticker.color],
                                        opacity: index === rotation ? 1 : 0.5,
                                        margin:
                                            index === rotation
                                                ? STICKER_SIZE / 10 + 'rem'
                                                : '',
                                        width:
                                            index === rotation
                                                ? STICKER_SIZE * 0.8 + 'rem'
                                                : STICKER_SIZE + 'rem',
                                        height:
                                            index === rotation
                                                ? STICKER_SIZE * 0.8 + 'rem'
                                                : STICKER_SIZE + 'rem',
                                        borderRadius:
                                            index === rotation
                                                ? STICKER_SIZE / 10 + 'rem'
                                                : '',
                                        transitionProperty:
                                            'transform, opacity',
                                    }}
                                    className="absolute z-[-1] h-full w-full duration-700"
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
