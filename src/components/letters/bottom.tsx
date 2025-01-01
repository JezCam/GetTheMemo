import React from 'react'
import LettersInput from '../letters-input'
import { useStore } from '@/store/useStore'

export default function LettersBottom() {
    const { score, setScore, best, setBest, timerState } = useStore()

    const handleCorrect = () => {
        if (timerState !== 'running') {
            return
        }
        const newScore = score + 1
        setScore(newScore)
        if (newScore > best) {
            setBest(newScore)
        }
    }

    return <LettersInput onCorrect={handleCorrect} />
}
