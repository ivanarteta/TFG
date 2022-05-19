import React from "react";
import {useTranslation} from "../../context/LanguageContext";
import {capitalize} from "../utils/Utils";

interface inputProps {
    id?: string
    classes: string[]
    editable: boolean
    content: string[] | string
}

interface TextInputGroupProps {
    input: inputProps
    labelText: string
    labelClasses: string[]
    optionalLabel?: boolean
    classes: string[]
    id?: string
}

export const TextInputGroup = ({input, labelText, labelClasses, classes, id, children, optionalLabel=false}: React.PropsWithChildren<TextInputGroupProps>) => {

    const {t} = useTranslation()

    return (
        <div id={id} className={classes.join(' ')}>
            <div id={'labels'} className="flex_item flex-row justify-content-between">
                <label className={labelClasses.join(' ')}>{labelText}</label>
                {optionalLabel && <label className={'optional_label'}>{capitalize(t('optional'))}</label>}
            </div>

            <span className={input.classes.join(' ')} id={input.id} data-kt-autosize={true}
                  contentEditable={input.editable} suppressContentEditableWarning={true}>
                {Array.isArray(input.content) ? input.content.map(item => {
                    return (
                        <span className=" margin-right-1rem margin-bottom-halfrem">
                            {item}
                        </span>
                    )
                }) :  input.content}
            </span>
            {children}
        </div>
    )
}