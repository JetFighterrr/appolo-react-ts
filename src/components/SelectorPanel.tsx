import React from "react";

interface PanelProps {
    children: any[];
}

const SelectorPanel: React.FC<PanelProps> = ({children}) => {
    return (
        <div className='container'>
            <div className='selectors'>
                {children}
            </div>
        </div>
    );

}

export {SelectorPanel};