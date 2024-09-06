function Plan({iconUrl, name, price, timeFree}) {
    return (
        <div className="plan-container">
            <img className="plan-icon" src={iconUrl} alt="arcade-icon" />

            <div>
                <p className="plan-name">{name}</p>
                <p className="plan-price">{price}</p>
                <p className="plan-time">{timeFree}</p>
            </div>
        </div>
    );
}

export default Plan;



