import {
    COLORS,
    STICKER_TRANSFORMS,
    STICKER_FOCUS_ROTATIONS,
    STICKER_SIZE,
    STICKER_BORDER_RADIUS,
    STICKER_FOCUS_TRANSFORM,
    BAR_COLORS,
    CENTERS,
    BAR_ROTATIONS,
} from '@/lib/cube'
import { useStore } from '@/store/useStore'
import Quaternion from 'quaternion'
import React from 'react'
import { Input } from './ui/input'
import Button from './ui/button'
import { Repeat2Icon } from 'lucide-react'
import { TooltipProvider } from './ui/tooltip'

export default function Cube() {
    const {
        style,
        rotation,
        stickerIndexes,
        lettersState,
        setRotation,
        configureState,
        letters,
        setLetter,
        resetLetters,
    } = useStore()

    const quaternion = Quaternion.fromEuler(
        ...STICKER_FOCUS_ROTATIONS[rotation]
    )

    const faceIndex = Math.floor(stickerIndexes[rotation] / 9)

    return (
        <div
            style={{
                width: STICKER_SIZE * 5.2 + 'rem',
                height: STICKER_SIZE * 5.2 + 'rem',
            }}
            className="relative mb-6 flex items-center justify-center"
        >
            {/* Letter config bars */}
            {configureState === 'letters' &&
                [
                    {
                        bottom: STICKER_SIZE * 5 + 'rem',
                        transform: 'rotate(180deg)',
                    },
                    { top: STICKER_SIZE * 5 + 'rem' },
                    {
                        top: 0,
                        transform: 'rotate(-90deg)',
                        transformOrigin: `calc(100% - ${STICKER_SIZE / 10.4 + 'rem'}) ${STICKER_SIZE / 10.4 + 'rem'}`,
                    },
                    {
                        top: 0,
                        transform: 'rotate(90deg)',
                        transformOrigin: `${STICKER_SIZE / 10.4 + 'rem'} ${STICKER_SIZE / 10.4 + 'rem'}`,
                    },
                ].map((style, i) => (
                    <div
                        onClick={() => setRotation(BAR_ROTATIONS[faceIndex][i])}
                        key={'i' + i}
                        style={{
                            ...style,
                            width: STICKER_SIZE * 5.2 + 'rem',
                            height: STICKER_SIZE / 5.2 + 'rem',
                            padding: `0 ${STICKER_SIZE / 3 + 'rem'}`,
                        }}
                        className="absolute flex gap-2 transition-all hover:!h-6 hover:cursor-pointer"
                    >
                        {Array(3)
                            .fill('')
                            .map((_, j) => (
                                <div
                                    key={'j' + j}
                                    style={{
                                        backgroundColor:
                                            COLORS[BAR_COLORS[faceIndex][i]],
                                        borderRadius: STICKER_SIZE / 6 + 'rem',
                                    }}
                                    className="relative h-full w-full"
                                ></div>
                            ))}
                    </div>
                ))}
            {/* Inputs */}
            {configureState === 'letters' && (
                <div className="absolute z-10 grid grid-cols-3 gap-8">
                    {Array(9)
                        .fill('')
                        .map((_, i) =>
                            i !== 4 ? (
                                <Input
                                    key={i}
                                    value={letters[faceIndex * 9 + i]}
                                    onChange={(e) => {
                                        const newLetter =
                                            e.currentTarget.value.toUpperCase()
                                        setLetter(faceIndex * 9 + i, newLetter)
                                    }}
                                    className="h-16 w-16 bg-black/40 p-0 text-center !text-4xl"
                                />
                            ) : (
                                <TooltipProvider key={i}>
                                    <Button
                                        variant="secondary"
                                        tooltip={'Reset letters'}
                                        position={'center'}
                                        style={{
                                            width: '4rem',
                                            height: '4rem',
                                        }}
                                        onClick={() => resetLetters(faceIndex)}
                                    >
                                        <Repeat2Icon />
                                    </Button>
                                </TooltipProvider>
                            )
                        )}
                </div>
            )}
            <div style={{ perspective: 4.5 * STICKER_SIZE + 'rem' }}>
                <div
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: quaternion.toCSSTransform(),
                    }}
                    className="pointer-events-none transition-all duration-500"
                >
                    {stickerIndexes.map((stickerIndex, index) => (
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
                                    backgroundColor:
                                        COLORS[Math.floor(stickerIndex / 9)],
                                    opacity: CENTERS.includes(rotation)
                                        ? 1
                                        : index === rotation
                                          ? 1
                                          : 0.5,
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
