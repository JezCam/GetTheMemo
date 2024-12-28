import React from 'react'
import { TooltipProvider } from '../ui/tooltip'
import Button from '../ui/button'
import Image from 'next/image'
import { useStore } from '@/store/useStore'

export default function ConfigureBottom() {
    const { style, setStyle } = useStore()

    return (
        <TooltipProvider>
            {/* Select Style */}
            <div className="flex flex-col items-center gap-2 text-sm font-semibold">
                Change style
                <div className="flex gap-3">
                    {/* Stickerless */}
                    <Button
                        onClick={() => setStyle('stickerless')}
                        position="left"
                        tooltip="Stickerless"
                        variant="checkbox"
                        active={style === 'stickerless'}
                    >
                        <Image
                            src={'/stickerless.svg'}
                            width={42}
                            height={42}
                            alt="stickerless style"
                        />
                    </Button>
                    {/*Black */}
                    <Button
                        onClick={() => setStyle('black')}
                        position="center"
                        tooltip="Black"
                        variant="checkbox"
                        active={style === 'black'}
                    >
                        <Image
                            src={'/black.svg'}
                            width={42}
                            height={42}
                            alt="black style"
                        />
                    </Button>
                    {/* White */}
                    <Button
                        onClick={() => setStyle('white')}
                        position="center"
                        tooltip="White"
                        variant="checkbox"
                        active={style === 'white'}
                    >
                        <Image
                            src={'/white.svg'}
                            width={42}
                            height={42}
                            alt="white style"
                        />
                    </Button>
                    {/* Purple */}
                    <Button
                        onClick={() => setStyle('purple')}
                        position="right"
                        tooltip="Purple"
                        variant="checkbox"
                        active={style === 'purple'}
                    >
                        <Image
                            src={'/purple.svg'}
                            width={42}
                            height={42}
                            alt="purple style"
                        />
                    </Button>
                </div>
            </div>
        </TooltipProvider>
    )
}
