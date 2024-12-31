import React, { useRef } from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'
import { useStore } from '@/store/useStore'
import Button from '@/components/ui/button'
import { ArrowRight, CornerDownLeft, Eye, Repeat2 } from 'lucide-react'
import { COLORS } from '@/lib/cube'
import { Input } from '@/components/ui/input'
import { LettersState } from '@/lib/definitions'
import { getRandomPiece } from '@/lib/utils'

export default function LettersInput(props: {
    onCorrect: () => void
    onIncorrect: () => void
}) {
    const {
        corners,
        edges,
        lettersState,
        letters,
        setLettersState,
        stickerIndexes,
        input,
        setInput,
        rotation,
        setRotation,
    } = useStore()

    const inputRef = useRef<HTMLInputElement>(null)
    const submitRef = useRef<HTMLButtonElement>(null)

    const handleReveal = () => {
        const correctLetter = letters[stickerIndexes[rotation]]
        setInput(correctLetter)
        setLettersState(LettersState.Revealed)
        props.onIncorrect()
    }

    const handleSubmit = () => {
        const correctLetter = letters[stickerIndexes[rotation]]
        if (input === correctLetter) {
            if (lettersState === 'guessing') {
                props.onCorrect()
            }
            setLettersState(LettersState.Correct)
        } else {
            setLettersState(LettersState.Incorrect)
            setInput(correctLetter)
            props.onIncorrect()
        }
    }

    const handleTryAgain = () => {
        setLettersState(LettersState.TryingAgain)
        setInput('')
    }

    const handleNext = () => {
        setLettersState(LettersState.Guessing)
        setInput('')
        if (!corners) {
            setRotation(getRandomPiece(rotation, 'edge'))
        } else if (!edges) {
            setRotation(getRandomPiece(rotation, 'corner'))
        } else {
            setRotation(getRandomPiece(rotation))
        }

        inputRef.current?.focus()
    }

    return (
        <div className="flex items-end gap-3">
            <TooltipProvider>
                {['guessing', 'tryingAgain', 'disabled'].includes(
                    lettersState
                ) ? (
                    <Button
                        disabled={lettersState === 'disabled'}
                        tooltip="Reveal letter"
                        variant="destructive"
                        onClick={handleReveal}
                        position="left"
                    >
                        <Eye />
                    </Button>
                ) : (
                    <Button
                        tooltip="Try Again"
                        variant="secondary"
                        onClick={handleTryAgain}
                        position="left"
                    >
                        <Repeat2 />
                    </Button>
                )}
                <div className="flex flex-col items-center gap-2 text-sm font-semibold">
                    Enter a letter
                    <Input
                        value={input}
                        disabled={lettersState === 'disabled'}
                        onChange={(e) => {
                            if (e.target.value.slice(0, 1) != input) {
                                setInput(
                                    e.target.value.slice(0, 1).toUpperCase()
                                )
                                if (!e.target.value) {
                                    return
                                }
                                submitRef.current?.focus()
                            }
                        }}
                        style={{
                            outlineColor:
                                COLORS[
                                    Math.floor(stickerIndexes[rotation] % 9)
                                ],
                            outlineOffset: 4,
                            outlineWidth: 3,
                            border: {
                                correct: `1px solid ${COLORS[2]}`,
                                incorrect: `1px solid ${COLORS[3]}`,
                                guessing: '1px solid white',
                                revealed: '1px solid red',
                                tryingAgain: '1px solid white',
                                configuring: '1px solid white',
                                disabled: '1px solid hsl(var(--muted))',
                            }[lettersState],
                            color: {
                                correct: COLORS[2],
                                incorrect: COLORS[3],
                                guessing: 'white',
                                revealed: COLORS[3],
                                tryingAgain: 'white',
                                configuring: 'white',
                                disabled: 'hsl(var(--muted))',
                            }[lettersState],
                        }}
                        ref={inputRef}
                        className="h-20 w-[172px] rounded-lg bg-black text-center font-[family-name:var(--font-geist-mono)] !text-6xl text-white !ring-black"
                    />
                </div>
                {['guessing', 'tryingAgain', 'disabled'].includes(
                    lettersState
                ) ? (
                    <Button
                        disabled={lettersState === 'disabled'}
                        ref={submitRef}
                        tooltip="Submit"
                        variant="primary"
                        onClick={handleSubmit}
                        position="right"
                    >
                        <CornerDownLeft />
                    </Button>
                ) : (
                    <Button
                        tooltip="Next"
                        variant="primary"
                        onClick={handleNext}
                        position="right"
                    >
                        {' '}
                        <ArrowRight />
                    </Button>
                )}
            </TooltipProvider>
        </div>
    )
}
