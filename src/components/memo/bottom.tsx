import React from 'react'
import LettersInput from '../letters-input'
import { useStore } from '@/store/useStore'

export default function MemoBottom() {
    const { cornerMemo, setCornerMemo, input } = useStore()

    const handleCorrect = () => {
        setCornerMemo(cornerMemo + input)
    }
    const handleIncorrect = () => {}

    return (
        <div className="relative">
            {/* Start cycle */}
            <div></div>
            <LettersInput
                onCorrect={handleCorrect}
                onIncorrect={handleIncorrect}
            />
        </div>
    )
}
