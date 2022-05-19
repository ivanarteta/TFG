import React from "react";

interface props {
    classes?: string[];
    key?: any;
    id?: string;
    icon?: string;
    onClickFunction?: any;
    title: string;
    type?: "button" | "submit" | "reset";
    noButtonClass?: boolean
    btnRef?: React.RefObject<HTMLButtonElement>
    iconAfter?: boolean
}

export const Button = ({classes = [], key, id, icon, onClickFunction, title, type, btnRef, noButtonClass, iconAfter=false}: props) => {

    icon && classes?.push('btn_gap');
    !noButtonClass && classes?.push("btn")

    return <button key={key} className={classes?.join(' ')} onClick={onClickFunction} id={id} type={type} ref={btnRef}>
        {icon && !iconAfter && <i className={icon}/>}
        <span>{title}</span>
        {icon && iconAfter && <i className={icon}/>}
    </button>
}