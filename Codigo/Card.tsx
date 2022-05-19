import React, {ReactElement} from "react";

interface cardOptions {
    title?: string;
    toolbarButtons?: ReactElement[];
    classList?: string[];
    id?: string;
    noHeader?: boolean
    headerClasses?: string[]
    bodyClasses?: string[]
}

export const Card = ({title, toolbarButtons, children, classList = [], id, noHeader, headerClasses, bodyClasses}: React.PropsWithChildren<cardOptions>) => {

    classList?.push("card")
    function printButtons() {
        if (toolbarButtons) {
            return (
                <div className="card-toolbar">
                    {toolbarButtons.map(button =>
                        button
                    )}
                </div>
            )
        }
    }

    return (
        <div className={classList?.join(' ')} id={id}>
            {!noHeader && <div className={"card-header " + headerClasses?.join(' ')}>
                <div className="card-title">
                    {title}
                </div>
                {printButtons()}
            </div>}
            <div className={"card-body " + bodyClasses?.join(' ')}>
                {children}
            </div>
        </div>
    );
}