import React from 'react'
import { TooltipProvider } from '../ui/tooltip'
import Button from '../ui/button'
import { Settings2, Book } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { AppState, LettersState } from '@/lib/definitions'

export default function LettersTop() {
    const {
        score,
        best,
        setAppState,
        lettersState,
        setLettersState,
        setPreviousLettersState,
        rotation,
        setPreviousRotation,
        setInput,
    } = useStore()

    return (
        <div className="flex gap-3 font-semibold text-white">
            <TooltipProvider>
                <Button
                    label="Configure"
                    tooltip="Customise cube"
                    position="left"
                    variant="secondary"
                    onClick={() => setAppState(AppState.Configure)}
                >
                    <Settings2 />
                </Button>
                {/* Score */}
                <div className="flex flex-col items-center gap-2 text-sm">
                    Score
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-lg border border-muted-foreground text-2xl">
                        {score}
                    </div>
                </div>
                {/* Best */}
                <div className="flex flex-col items-center gap-2 text-sm">
                    Best
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-lg border border-muted-foreground text-2xl">
                        {best}
                    </div>
                </div>
                <Button
                    label="Memo"
                    tooltip="Memo walkthrough"
                    position="right"
                    variant="secondary"
                    onClick={() => {
                        setPreviousLettersState(lettersState)
                        setPreviousRotation(rotation)
                        setLettersState(LettersState.Disabled)
                        setInput('')
                        setAppState(AppState.Memo)
                    }}
                >
                    <Book />
                </Button>
            </TooltipProvider>
        </div>
    )
}
