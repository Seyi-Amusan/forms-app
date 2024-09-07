import { useNavigate } from "react-router-dom";



function FormFooter({ prev, prevRouteUrl, nextRouteUrl }) {

    const navigate = useNavigate(); 

    let cls = 'hidden';
    if (prev) {
        cls = '';
    }

    return (
        <div className="step-footer">
            {prev && (
                <button
                    className={cls}
                    onClick={() => navigate(`/${prevRouteUrl}`)}
                >Go back</button>
            )}
            <button type="submit">Next step</button>
        </div>
    );
}

export default FormFooter;
