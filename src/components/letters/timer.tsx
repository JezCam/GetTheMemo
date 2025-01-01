import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'

export default function Timer(props: {
    expiryTimestamp: number
    onExpire: () => void
}) {
    useEffect(() => {
        restart(new Date(props.expiryTimestamp))
    }, [props.expiryTimestamp])

    const { seconds, restart } = useTimer({
        expiryTimestamp: new Date(props.expiryTimestamp),
        onExpire: props.onExpire,
    })
    return <div>{seconds}</div>
}
