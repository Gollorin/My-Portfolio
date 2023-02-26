import NotFoundPic from '../../../pictures/NotFound.svg';
import { Link } from "react-router-dom";
import './NotFoundStyle.css';

function NotFound() {
    return (
        <div className="notfound-container">
            <img src={NotFoundPic} alt='ilustration'></img>
            <h1>What happened? Stay calm. It's okay.</h1>
            <Link to='/' className="btn">Home</Link>
        </div>
    );
}

export default NotFound;