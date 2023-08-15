import React from 'react';

interface SelectProps {
    options: string[];
    value?: string | undefined;
    selectName: string;
    onChange: (value: string) => void;
}

const Selector: React.FC<SelectProps> = ({ options, value, selectName, onChange}: SelectProps) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };

    return (
        <div className='selector-container'>
            <label htmlFor={selectName}>{ selectName }</label>
            <br/>
            <select
                id={selectName}
                value={value}
                onChange={handleOnChange}>
                className='selector'
                    <option key={''} value={''}></option>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export {Selector};