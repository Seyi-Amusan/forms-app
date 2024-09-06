import { Link, useNavigate } from "react-router-dom";



function FormFooter({ prev, prevRouteUrl, nextRouteUrl }) {

    // function goBack() {
    //     const navigate = useNavigate()
    //     navigate(prevRouteUrl)
    // }

    let x = 'hidden';
    if (prev) {
        x = '';
    }

    return (
        <div className="step-footer">
            {prev && (
                <button className={x}>
                    <Link to={`/${prevRouteUrl}`}>Go back</Link>
                </button>
            )}
            <button type="submit">Next step</button>
        </div>
    );
}

export default FormFooter;
