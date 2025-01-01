import React, { useState } from 'react'
import { TooltipProvider } from '../ui/tooltip'
import Button from '../ui/button'
import { Settings2, Book, Play, RotateCw, X } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { AppState, LettersState, TimerState } from '@/lib/definitions'
import Timer from './timer'

export default function LettersTop() {
    const {
        score,
        setScore,
        best,
        setAppState,
        lettersState,
        setLettersState,
        setPreviousLettersState,
        rotation,
        setPreviousRotation,
        setInput,
        timerState,
        setTimerState,
        runningExpiryTimestamp,
        setRunningExpiryTimestamp,
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
                {/* Sprint*/}
                <div className="flex flex-col items-center gap-2 text-sm">
                    15s Sprint
                    <div
                        style={{
                            borderColor:
                                timerState === 'running'
                                    ? 'hsl(var(--muted-foreground)'
                                    : 'hsl(var(--muted))',
                        }}
                        className="relative grid h-20 w-[172px] grid-cols-3 items-center justify-center overflow-hidden rounded-lg border text-2xl"
                    >
                        <div className="col-span-2 h-full w-full">
                            {timerState === 'ready' && (
                                <button
                                    onClick={() => {
                                        setScore(0)
                                        setTimerState(TimerState.Countdown)
                                    }}
                                    className="flex h-full w-full items-center justify-center bg-secondary transition-all hover:cursor-pointer hover:bg-secondary/80 [&_svg]:size-8"
                                >
                                    <Play />
                                </button>
                            )}
                            {timerState === 'countdown' && (
                                <div className="flex h-full w-full items-center justify-center text-4xl">
                                    <Timer
                                        expiryTimestamp={Date.now() + 3000}
                                        onExpire={() => {
                                            setRunningExpiryTimestamp(
                                                Date.now() + 15000
                                            )
                                            setTimerState(TimerState.Running)
                                        }}
                                    />
                                </div>
                            )}
                            {(timerState === 'running' ||
                                timerState === 'expired') && (
                                <div className="flex h-full w-full items-center justify-center text-4xl">
                                    <div className="flex h-full w-full">
                                        <div className="flex w-full flex-col items-center justify-center text-3xl">
                                            <span className="text-sm font-medium text-muted-foreground">
                                                Score
                                            </span>
                                            {score}
                                        </div>
                                        {/* Divider */}
                                        <div className="h-full w-[1px] bg-muted"></div>
                                    </div>
                                    <div className="flex h-full w-full flex-col items-center">
                                        {/* Restart */}
                                        <div
                                            onClick={() => {
                                                setScore(0)
                                                setTimerState(
                                                    TimerState.Countdown
                                                )
                                            }}
                                            className="flex w-full items-center justify-center border-b-[1px] bg-secondary p-1 hover:cursor-pointer hover:bg-secondary/80"
                                        >
                                            <RotateCw size={14} />
                                        </div>
                                        <div className="flex h-full items-center justify-center text-2xl">
                                            <Timer
                                                expiryTimestamp={
                                                    runningExpiryTimestamp
                                                }
                                                onExpire={() => {
                                                    setTimerState(
                                                        TimerState.Expired
                                                    )
                                                }}
                                            />
                                        </div>
                                        {/* End */}
                                        <div
                                            onClick={() =>
                                                setTimerState(TimerState.Ready)
                                            }
                                            className="flex h-[23px] w-full items-center justify-center border-t-[1px] bg-red-600/10 p-1 hover:cursor-pointer hover:bg-red-600/10"
                                        >
                                            <X
                                                size={18}
                                                className="text-red-600"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-span-1 flex h-full">
                            {/* Divider */}
                            <div
                                style={{
                                    backgroundColor:
                                        timerState === 'running'
                                            ? 'hsl(var(--muted-foreground)'
                                            : 'hsl(var(--muted))',
                                }}
                                className="h-full w-[1px]"
                            ></div>
                            <div className="flex w-full flex-col items-center justify-center text-3xl text-yellow-500">
                                <span className="text-sm font-medium text-muted-foreground">
                                    Best
                                </span>
                                {best}
                            </div>
                        </div>
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
