import {
    COLORS,
    STICKER_TRANSFORMS,
    STICKER_FOCUS_TRANSFORMS,
} from '@/lib/cube'
import { Sticker } from '@/lib/definitions'
import Quaternion from 'quaternion'
import React from 'react'

export default function Cube(props: { stickers: Sticker[]; rotation: number }) {
    const quaternion = Quaternion.fromEuler(
        ...STICKER_FOCUS_TRANSFORMS[props.rotation]
    )

    return (
        <div
            style={{
                perspective: '300px',
                transformStyle: 'preserve-3d',
                transform: quaternion.toCSSTransform(),
            }}
            className="relative"
        >
            {props.stickers.map((sticker, index) => (
                <div
                    key={index}
                    style={{
                        transform: STICKER_TRANSFORMS[index],
                        backfaceVisibility: 'hidden',
                    }}
                    className="absolute h-20 w-20 p-1"
                >
                    <div
                        style={{ backgroundColor: COLORS[sticker.color] }}
                        className="h-full w-full rounded-md"
                    ></div>
                </div>
            ))}
        </div>
    )
}
