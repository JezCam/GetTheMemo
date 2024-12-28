import {
    COLORS,
    STICKER_TRANSFORMS,
    STICKER_FOCUS_ROTATIONS,
    STICKER_SIZE,
} from '@/lib/cube'
import { Sticker } from '@/lib/definitions'
import Quaternion from 'quaternion'
import React from 'react'

export default function Cube(props: { stickers: Sticker[]; rotation: number }) {
    const quaternion = Quaternion.fromEuler(
        ...STICKER_FOCUS_ROTATIONS[props.rotation]
    )

    return (
        <div
            style={{
                width: STICKER_SIZE * 3 + 'rem',
                height: STICKER_SIZE * 3 + 'rem',
            }}
            className="flex items-center justify-center"
        >
            <div style={{ perspective: 4.5 * STICKER_SIZE + 'rem' }}>
                <div
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: quaternion.toCSSTransform(),
                    }}
                    className="relative transition-all duration-500"
                >
                    {props.stickers.map((sticker, index) => (
                        <div
                            key={index}
                            style={{
                                transform: STICKER_TRANSFORMS[index],
                                backfaceVisibility: 'hidden',
                                height: STICKER_SIZE + 'rem',
                                width: STICKER_SIZE + 'rem',
                                padding: STICKER_SIZE / 20 + 'rem',
                            }}
                            className="absolute"
                        >
                            <div
                                style={{
                                    backgroundColor: COLORS[sticker.color],
                                }}
                                className="h-full w-full rounded-md opacity-80"
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
