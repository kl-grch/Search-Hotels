import { Link, useNavigate } from "react-router-dom"
import './appBanner.scss';
import icon from '../../assets/appBanner/logOut.svg';

export default function AppBanner() {

    const navigate = useNavigate();

    const onLogOut = (e) => {
        e.preventDefault();
        localStorage.setItem('auth', false);
        navigate('/auth');
        console.log('Вы вышли с сайта');
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