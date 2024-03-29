import "./hotel.scss";
import starActive from "../../assets/starActive.svg";
import starDisable from "../../assets/starDisable.svg";
import { useEndNumber } from "../../hooks/endNumber.hooks";

import {
  addFavorite,
  delFavorite,
} from "../favoriteHotels/favoriteHotelsSlice";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

export default function Hotel(props) {
  const dispatch = useDispatch();
  const {favoriteHotels} = useSelector(state => state.favoriteHotels);

  const setRate = () => {
    const stars = new Array(props.stars).fill(<>{activeRate}</>);
    if (stars.length !== 5) {
      stars.push(...new Array(5 - stars.length).fill(<>{disableRate}</>));
    }
    return stars;
  };

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function handleAddFavorite() {
    if (!favoriteHotels.some(item => item.hotelId === props.hotelId)) {
        dispatch(addFavorite(props));
    } else {
      dispatch(delFavorite(props));
    }
  }

  const activeRate = <img key={''} src={starActive} alt="starActive" />;
  const disableRate = <img key={''} src={starDisable} alt="starDisable" />;

  return (
    <div className="hotel">
      <div className="hotel__title">
        <div className="title__name">{props.hotelName}</div>
        <div className="title__favorite" onClick={handleAddFavorite}>
          <svg
            className={classNames('heart', {'heart--active': props.favoriteStatus})}
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z"
              fill="white"
              stroke="#C4C4C4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="hotel__date">
        <div className="date__check-in">{props.checkInDate}</div>
        <span className="date__separator"></span>
        <div className="date__count-day">
          {props.countDays}
          {useEndNumber(props.countDays, " дней", " день", " дня")}
        </div>
      </div>

      <div className="hotel__rating">
        <div className="rating__stars">{setRate(props.stars)}</div>
        <div className="rating__price">
          <div className="price__title">Price:</div>
          <div className="price__price-from">
            {numberWithSpaces(Math.floor(props.priceFrom))} ₽
          </div>
        </div>
      </div>
    </div>
  );
}
