import { Link, useNavigate } from "react-router-dom"
import './appBanner.scss';
import icon from '../../assets/appBanner/logOut.svg';
import { useDispatch } from "react-redux";
import { authorizationFalse } from "../authorizationForm/authorizationSlice";

export default function AppBanner() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogOut = (e) => {
        e.preventDefault();
        dispatch(authorizationFalse());
        console.log('Вы вышли с сайта');
        navigate('/auth');
    }

    return (
        <div className="app__banner">
            <div className="app__logo">
                <Link to='/' className="app__logo-link">
                    Simple Hotel Check
                </Link>
            </div>
                <Link onClick={onLogOut} to='/auth' className="app__logout">
                    <div className="app__logout-text">Выход</div>
                    <img src={icon} alt="logout" className="app__logout-icon" />
                </Link>
        </div>
    )
}