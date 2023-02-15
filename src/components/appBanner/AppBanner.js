import { Link, useNavigate } from "react-router-dom";
import "./appBanner.scss";
import icon from "../../assets/appBanner/logOut.svg";
import { useDispatch } from "react-redux";
import { authorizationFalse } from "../authorizationForm/authorizationSlice";

export default function AppBanner() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogOut = (e) => {
    e.preventDefault();
    dispatch(authorizationFalse());
    navigate("/auth");
  };

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" className="logo__link">
          Simple Hotel Check
        </Link>
      </div>
      <Link 
      onClick={onLogOut} 
      to="/auth" 
      className="header__logout">
        <div className="logout__text">Выход</div>
        <img src={icon} alt="logout" className="logout__icon" />
      </Link>
    </div>
  );
}