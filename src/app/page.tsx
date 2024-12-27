'use client'

import Cube from '@/components/cube'
import { COLORS } from '@/lib/cube'
import { useStore } from '@/store/useStore'

export default function Home() {
    const { stickers, rotation, setStickers, setRotation } = useStore()

    return (
        <div className="flex h-screen w-screen items-center justify-center gap-64 bg-black">
            <Cube stickers={stickers} rotation={rotation}></Cube>
            <div className="flex flex-col items-center gap-1">
                <div className="grid grid-cols-3 gap-1">
                    {Array(9)
                        .fill('')
                        .map((_, index) => (
                            <div
                                onClick={() => setRotation(index)}
                                style={{ backgroundColor: COLORS[0] }}
                                className="h-5 w-5 opacity-60 hover:cursor-pointer hover:opacity-100"
                                key={index}
                            ></div>
                        ))}
                </div>
                <div className="flex gap-1">
                    <div className="grid grid-cols-3 gap-1">
                        {Array(9)
                            .fill('')
                            .map((_, index) => (
                                <div
                                    onClick={() => setRotation(9 + index)}
                                    style={{ backgroundColor: COLORS[1] }}
                                    className="h-5 w-5 opacity-60 hover:cursor-pointer hover:opacity-100"
                                    key={index}
                                ></div>
                            ))}
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                        {Array(9)
                            .fill('')
                            .map((_, index) => (
                                <div
                                    onClick={() => setRotation(18 + index)}
                                    style={{ backgroundColor: COLORS[2] }}
                                    className="h-5 w-5 opacity-60 hover:cursor-pointer hover:opacity-100"
                                    key={index}
                                ></div>
                            ))}
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                        {Array(9)
                            .fill('')
                            .map((_, index) => (
                                <div
                                    onClick={() => setRotation(27 + index)}
                                    style={{ backgroundColor: COLORS[3] }}
                                    className="h-5 w-5 opacity-60 hover:cursor-pointer hover:opacity-100"
                                    key={index}
                                ></div>
                            ))}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1">
                    {Array(9)
                        .fill('')
                        .map((_, index) => (
                            <div
                                onClick={() => setRotation(36 + index)}
                                style={{ backgroundColor: COLORS[4] }}
                                className="h-5 w-5 opacity-60 hover:cursor-pointer hover:opacity-100"
                                key={index}
                            ></div>
                        ))}
                </div>
                <div className="grid grid-cols-3 gap-1">
                    {Array(9)
                        .fill('')
                        .map((_, index) => (
                            <div
                                onClick={() => setRotation(45 + index)}
                                style={{ backgroundColor: COLORS[5] }}
                                className="h-5 w-5 opacity-60 hover:cursor-pointer hover:opacity-100"
                                key={index}
                            ></div>
                        ))}
                </div>
            </div>
        </div>
    )
}
