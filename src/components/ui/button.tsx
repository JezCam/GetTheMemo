import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

export default function Button({
    label,
    tooltip,
    position,
    variant,
    active,
    children,
    ...rest
}: {
    label?: string
    tooltip: string
    position: 'left' | 'center' | 'right'
    variant: 'primary' | 'secondary' | 'destructive' | 'checkbox'
    active?: boolean
} & React.ComponentProps<'button'>) {
    return (
        <div
            style={{
                alignItems: {
                    left: 'flex-end',
                    center: 'center',
                    right: 'flex-start',
                }[position],
            }}
            className="flex flex-col gap-2 text-sm font-semibold"
        >
            {label}
            <Tooltip>
                <TooltipContent>{tooltip}</TooltipContent>
                <TooltipTrigger asChild>
                    <button
                        style={{
                            transform: {
                                left: 'perspective(300px) rotateY(35deg) translateX(6px) scaleX(1.2) scaleY(1.1)',
                                center: '',
                                right: 'perspective(300px) rotateY(-35deg) translateX(-6px) scaleX(1.2) scaleY(1.1)',
                            }[position],
                        }}
                        className={
                            {
                                primary:
                                    'relative flex h-20 w-20 items-center justify-center rounded-lg bg-white text-black transition-all hover:border-white hover:bg-white/80 disabled:cursor-not-allowed [&_svg]:size-8',
                                secondary:
                                    'relative flex h-20 w-20 items-center justify-center rounded-lg border bg-secondary transition-all hover:bg-secondary/80 disabled:cursor-not-allowed [&_svg]:size-8',
                                destructive:
                                    'relative flex h-20 w-20 items-center justify-center rounded-lg bg-red-600 transition-all hover:border-white hover:bg-red-500 disabled:cursor-not-allowed [&_svg]:size-8',
                                checkbox: active
                                    ? 'relative flex h-20 w-20 items-center justify-center rounded-lg border border-white bg-white/20 transition-all disabled:cursor-not-allowed [&_svg]:size-8'
                                    : 'relative flex h-20 w-20 items-center justify-center rounded-lg border border-muted-foreground transition-all hover:bg-white/10 [&_svg]:size-8',
                            }[variant]
                        }
                        {...rest}
                    >
                        <div className="pointer-events-none text-3xl">
                            {children}
                        </div>
                    </button>
                </TooltipTrigger>
            </Tooltip>
        </div>
    )
}
