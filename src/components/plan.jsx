import React from 'react';

function Plan({ iconUrl, name, price, timeFree, isSelected, onSelect }) {
  
    const handleClick = () => {
        onSelect(name); // Toggle plan selection
    };

    return (
        <div
            className={`plan-container ${isSelected ? 'clicked' : ''}`}
            onMouseUp={handleClick}
        >
            <img className="plan-icon" src={iconUrl} alt="plan-icon" />

            <div>
                <p className="plan-name">{name}</p>
                <p className="plan-price">{price}</p>
                <p className="plan-time">{timeFree}</p>
            </div>
        </div>
    );
}

export default Plan;

