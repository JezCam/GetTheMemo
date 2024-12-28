import React from 'react'
import { TooltipProvider } from '../ui/tooltip'
import Button from '../ui/button'
import { ArrowLeft, RotateCw } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { AppState, ConfigureState, Move } from '@/lib/definitions'
import { CORNERS, EDGES } from '@/lib/cube'
import { getRandomPiece } from '@/lib/utils'
import Image from 'next/image'
import Scrambo from 'scrambo'

export default function MemoTop() {
    const {
        setAppState,
        rotation,
        corners,
        setCorners,
        edges,
        setEdges,
        configureState,
        setConfigureState,
        setRotation,
        solve,
        applyMove,
    } = useStore()

    const scrambleCube = () => {
        const scrambo = new Scrambo()
        const scramble = scrambo.get()[0].split(' ')
        scramble.forEach((move, index) =>
            setTimeout(() => applyMove(move as Move), 100 * index)
        )
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
                        setAppState(AppState.Letters)
                    }}
                >
                    <ArrowLeft />
                </Button>
                {/* Configure Pieces */}
                <div className="flex flex-col items-center gap-2 text-sm">
                    Configure pieces
                    <div className="flex gap-3">
                        {/* Corners */}
                        <Button
                            disabled={!edges}
                            tooltip="Allow corners"
                            position="center"
                            variant="checkbox"
                            active={corners}
                            onClick={() => {
                                if (CORNERS.includes(rotation)) {
                                    setRotation(
                                        getRandomPiece(rotation, 'edge')
                                    )
                                }
                                setCorners(!corners)
                            }}
                        >
                            <Image
                                src={'/corner.svg'}
                                width={32}
                                height={32}
                                alt="corner"
                            />
                        </Button>
                        {/* Edges */}
                        <Button
                            disabled={!corners}
                            tooltip="Allow edges"
                            position="center"
                            variant="checkbox"
                            active={edges}
                            onClick={() => {
                                if (EDGES.includes(rotation)) {
                                    setRotation(
                                        getRandomPiece(rotation, 'corner')
                                    )
                                }
                                setEdges(!edges)
                            }}
                        >
                            <Image
                                src={'/edge.svg'}
                                width={32}
                                height={32}
                                alt="corner"
                                className="rotate-90"
                            />
                        </Button>
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
