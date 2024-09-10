import React from 'react';

function AddOn({ heading, text, price, isSelected, onSelect }) {

    const handleClick = () => {
        onSelect(heading); // Toggle add-on selection
    };

    return (
        <div className="add-on-container" onClick={handleClick}>
            <div>
                <input 
                    type="checkbox" 
                    checked={isSelected} 
                    onChange={() => onSelect(heading)} // Toggle checkbox directly if clicked
                />
            </div>

            <div>
                <p className="add-on-heading">{heading}</p>
                <p className="add-on-text">{text}</p>
            </div>
            
            <p className="add-on-price">{price}</p>
        </div>
    );
}

export default AddOn;
