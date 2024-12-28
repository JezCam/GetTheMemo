'use client'

import Cube from '@/components/cube'
import { COLORS } from '@/lib/cube'
import { Move } from '@/lib/definitions'
import { useStore } from '@/store/useStore'
import Scrambo from 'scrambo'

export default function Home() {
    const { stickers, rotation, setRotation, applyMove, solve } = useStore()

    const scramble = () => {
        const scrambo = new Scrambo()
        const scramble = scrambo.get()[0].split(' ')
        scramble.forEach((move, index) =>
            setTimeout(() => applyMove(move as Move), 100 * index)
        )
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center gap-64 bg-black">
            <Cube stickers={stickers} rotation={rotation}></Cube>
            <div className="flex flex-col items-center gap-1.5">
                <div className="grid grid-cols-3 gap-1.5">
                    {Array(9)
                        .fill('')
                        .map((_, index) => (
                            <div
                                onClick={() => setRotation(index)}
                                style={{ backgroundColor: COLORS[0] }}
                                className="h-6 w-6 opacity-60 hover:cursor-pointer hover:opacity-100"
                                key={index}
                            ></div>
                        ))}
                </div>
                <div className="flex gap-1.5">
                    <div className="grid grid-cols-3 gap-1.5">
                        {Array(9)
                            .fill('')
                            .map((_, index) => (
                                <div
                                    onClick={() => setRotation(9 + index)}
                                    style={{ backgroundColor: COLORS[1] }}
                                    className="h-6 w-6 opacity-60 hover:cursor-pointer hover:opacity-100"
                                    key={index}
                                ></div>
                            ))}
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                        {Array(9)
                            .fill('')
                            .map((_, index) => (
                                <div
                                    onClick={() => setRotation(18 + index)}
                                    style={{ backgroundColor: COLORS[2] }}
                                    className="h-6 w-6 opacity-60 hover:cursor-pointer hover:opacity-100"
                                    key={index}
                                ></div>
                            ))}
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                        {Array(9)
                            .fill('')
                            .map((_, index) => (
                                <div
                                    onClick={() => setRotation(27 + index)}
                                    style={{ backgroundColor: COLORS[3] }}
                                    className="h-6 w-6 opacity-60 hover:cursor-pointer hover:opacity-100"
                                    key={index}
                                ></div>
                            ))}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                    {Array(9)
                        .fill('')
                        .map((_, index) => (
                            <div
                                onClick={() => setRotation(45 + index)}
                                style={{ backgroundColor: COLORS[5] }}
                                className="h-6 w-6 opacity-60 hover:cursor-pointer hover:opacity-100"
                                key={index}
                            ></div>
                        ))}
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                    {Array(9)
                        .fill('')
                        .map((_, index) => (
                            <div
                                onClick={() => setRotation(36 + index)}
                                style={{ backgroundColor: COLORS[4] }}
                                className="h-6 w-6 opacity-60 hover:cursor-pointer hover:opacity-100"
                                key={index}
                            ></div>
                        ))}
                </div>
            </div>
            <div className="flex gap-2">
                <button onClick={scramble} className="text-white">
                    Scramble
                </button>
                <button onClick={solve} className="text-white">
                    Solve
                </button>
            </div>
        </div>
    )
}
