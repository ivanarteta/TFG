import React from "react";

interface InputProps{
    id?: string
    classes?: string[]
    type?: string
    value?: string
    checked?: boolean
    placeholder?: string
    keyDownFunction?: any
}

export const Input = ({id, classes, type, value, checked, placeholder, keyDownFunction}: InputProps) => {

    return (
        <input type={type} className={classes?.join(' ')} defaultChecked={checked} value={value} id={id} placeholder={placeholder} onKeyDown={keyDownFunction}/>
    )

}