import React from 'react'
import LettersInput from '../letters-input'
import { useStore } from '@/store/useStore'

export default function LettersBottom() {
    const { score, setScore, best, setBest } = useStore()

    const handleCorrect = () => {
        const newScore = score + 1
        setScore(newScore)
        if (newScore > best) {
            setBest(newScore)
        }
    }
    const handleIncorrect = () => {
        setScore(0)
    }

    return (
        <LettersInput onCorrect={handleCorrect} onIncorrect={handleIncorrect} />
    )
}
