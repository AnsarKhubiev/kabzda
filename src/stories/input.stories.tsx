import {ChangeEvent, useRef, useState} from "react";

export default {
    title: "input",
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const getValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <><input onChange={getValue}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const ref = useRef<HTMLInputElement>(null)
    const saveValue = () => {
        const el = ref.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <>
            <input ref={ref}/>
            <button onClick={saveValue}>save</button>
            - actual value: {value}
        </>
    )
}

export const ControlledInputWithFixedValue = () => <input value="it-incubator"/>