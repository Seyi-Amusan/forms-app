function FormHeader({heading, text}) {
    return (
    <div className="step-header">
        <h1 className="step-heading">{heading}</h1>
        <p className="step-text">{text}</p>
    </div> );
}

export default FormHeader;