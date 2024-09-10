import { useNavigate } from "react-router-dom";



function FormFooter({ prevRouteUrl }) {

    const navigate = useNavigate(); 

    return (
        <div className="step-footer">
            <button
                className={`white ${prevRouteUrl ? '' : 'hidden'}`} //if theres no prev route this btn should be hidden
                onClick={() => navigate(`/${prevRouteUrl}`)}
            >Go back</button>
            <button type="submit">Next step</button>
        </div>
    );
}

export default FormFooter;
