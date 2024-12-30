import React from 'react'
import { TooltipProvider } from '../ui/tooltip'
import Button from '../ui/button'
import { ArrowLeft, RotateCw } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { AppState, LettersState, MemoState, Move } from '@/lib/definitions'
import Image from 'next/image'
import Scrambo from 'scrambo'

export default function MemoTop() {
    const {
        setAppState,
        solve,
        applyMove,
        previousRotation,
        setRotation,
        previousLettersState,
        setLettersState,
        memoState,
        setMemoState,
        cornerMemo,
        edgeMemo,
        input,
    } = useStore()

    const scrambleCube = () => {
        const scrambo = new Scrambo()
        const scramble = scrambo.get()[0].split(' ')

        console.log(scramble)
        scramble.forEach((move, index) => {
            setTimeout(() => {
                applyMove(move as Move)
                if (index === scramble.length - 1) {
                    setLettersState(LettersState.Guessing)
                    setMemoState(MemoState.Corners)
                    setRotation(9)
                }
            }, 100 * index)
        })
    }

    return (
        <div className="flex gap-3 font-semibold text-white">
            <TooltipProvider>
                <Button
                    label="Back"
                    tooltip="Go back"
                    position="left"
                    variant="secondary"
                    onClick={() => {
                        solve()
                        setLettersState(previousLettersState)
                        setMemoState(MemoState.Before)
                        setRotation(previousRotation)
                        setAppState(AppState.Letters)
                    }}
                >
                    <ArrowLeft />
                </Button>
                {/* Memo screen */}
                <div className="flex flex-col items-center gap-2 text-sm">
                    {
                        {
                            before: 'Scramble to start...',
                            after: 'Memo complete',
                            corners: 'Memorising corners...',
                            edges: 'Memorising edges...',
                        }[memoState]
                    }
                    <div className="relative flex h-20 w-[172px] flex-col items-center justify-center rounded-lg border border-muted-foreground p-2">
                        <div className="flex h-full w-full items-center gap-2 text-lg text-muted">
                            <Image
                                src={'/corner.svg'}
                                height={20}
                                width={20}
                                alt="corner"
                                className="max-h-5"
                            />
                            {cornerMemo}
                        </div>
                        <div className="flex h-full w-full items-center gap-2">
                            <Image
                                src={'/edge.svg'}
                                width={20}
                                height={20}
                                alt="corner"
                            />
                            {edgeMemo}
                        </div>
                    </div>
                </div>
                <Button
                    label="Scramble"
                    tooltip="Scramble cube"
                    position="right"
                    variant="secondary"
                    onClick={scrambleCube}
                >
                    <RotateCw />
                </Button>
            </TooltipProvider>
        </div>
    )
}
