'use client'

import ConfigureBottom from '@/components/configure/bottom'
import ConfigureTop from '@/components/configure/top'
import Cube from '@/components/cube'
import LettersBottom from '@/components/letters/bottom'
import LettersTop from '@/components/letters/top'
import MemoBottom from '@/components/memo/bottom'
import MemoTop from '@/components/memo/top'
import { useStore } from '@/store/useStore'

export default function Home() {
    const { appState, stickers, rotation, applyMove } = useStore()

    return (
        <div className="flex h-screen w-screen items-center justify-center gap-64 bg-background">
            <div className="flex flex-col items-center gap-8 rounded-3xl border-[1px] border-white/10 bg-card p-6">
                {/* Top */}
                {appState === 'letters' && <LettersTop />}
                {appState === 'configure' && <ConfigureTop />}
                {appState === 'memo' && <MemoTop />}
                <Cube />
                {/* Bottom */}
                {appState === 'letters' && <LettersBottom />}
                {appState === 'configure' && <ConfigureBottom />}
                {appState === 'memo' && <MemoBottom />}
            </div>
        </div>
    )
}
