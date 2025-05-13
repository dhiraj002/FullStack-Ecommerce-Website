// components/CheckboxFilter.jsx
import React from "react";

const CheckboxFilter = ({ title, options, selectedOptions, onChange, showFilter }) => {
    return (
        <div className={`border border-gray-300 pl-5 py-3 mt-6  sm:block ${showFilter ? "" : "hidden"}`}>
            <p className="mb-3 text-sm font-medium">{title.toUpperCase()}</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                {options.map((option) => (
                    <label key={option} className="flex gap-2">
                        <input className="w-3" type="checkbox" value={option} checked={selectedOptions.includes(option)} onChange={onChange} />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default CheckboxFilter;
