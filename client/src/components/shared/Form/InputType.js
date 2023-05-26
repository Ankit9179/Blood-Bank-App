import React from "react";

const InputType = ({ labelFore, labelText, inputType, value, onChange, name }) => {
    return (
        <>
            <div className="mb-3">
                <label
                    htmlFor={labelFore}
                    className="form-label">
                    {labelText}
                </label>
                <input
                    type={inputType}
                    className="form-control"
                    id="exampleInputEmail1"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    );
};

export default InputType;
