import React, { useRef } from 'react'
import { TooltipProvider } from '../ui/tooltip'
import { useStore } from '@/store/useStore'
import Button from '../ui/button'
import { ArrowRight, CornerDownLeft, Eye, Repeat2 } from 'lucide-react'
import { COLORS } from '@/lib/cube'
import { Input } from '../ui/input'
import { LettersState } from '@/lib/definitions'
import { getRandomPiece } from '@/lib/utils'

export default function LettersBottom() {
    const {
        corners,
        edges,
        lettersState,
        setLettersState,
        stickers,
        input,
        setInput,
        score,
        setScore,
        best,
        setBest,
        rotation,
        setRotation,
    } = useStore()

    const inputRef = useRef<HTMLInputElement>(null)
    const submitRef = useRef<HTMLButtonElement>(null)

    const handleReveal = () => {
        setInput(stickers[rotation].letter)
        setLettersState(LettersState.Revealed)
        setScore(0)
    }

    const handleSubmit = () => {
        const correctLetter = stickers[rotation].letter
        if (input === correctLetter) {
            if (lettersState === 'guessing') {
                if (score === best) {
                    setBest(score + 1)
                }
                setScore(score + 1)
            }
            setLettersState(LettersState.Correct)
        } else {
            setLettersState(LettersState.Incorrect)
            setInput(correctLetter)
            setScore(0)
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
                {lettersState === 'guessing' ||
                lettersState === 'tryingAgain' ? (
                    <Button
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
                            outlineColor: COLORS[stickers[rotation].color],
                            outlineOffset: 4,
                            outlineWidth: 3,
                            border: {
                                correct: '1px solid green',
                                incorrect: '1px solid red',
                                guessing: '1px solid white',
                                revealed: '1px solid red',
                                tryingAgain: '1px solid white',
                                configuring: '1px solid white',
                            }[lettersState],
                            color: {
                                correct: 'green',
                                incorrect: 'red',
                                guessing: 'white',
                                revealed: 'red',
                                tryingAgain: 'white',
                                configuring: 'white',
                            }[lettersState],
                        }}
                        ref={inputRef}
                        className="h-20 w-[172px] rounded-lg bg-black text-center font-[family-name:var(--font-geist-mono)] !text-6xl text-white !ring-black"
                    />
                </div>
                {lettersState === 'guessing' ||
                lettersState === 'tryingAgain' ? (
                    <Button
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
