function AddOn({heading, text, price}) {
    return (
        <div className="add-on-container">
            <div>
                <input type="checkbox" />
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