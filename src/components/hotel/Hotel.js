import './hotel.scss';
import starActive from '../../assets/starActive.svg';
import starDisable from '../../assets/starDisable.svg';

import { addFavorite, delFavorite } from '../favoriteHotels/favoriteHotelsSlice';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

export default function Hotel(props) {

    const dispatch = useDispatch();
    const {foundHotels} = useSelector(state => state.searchesHotels);
    const {favoriteHotels} = useSelector(state => state.favoriteHotels);

    function setNameCount(number, five, one, two) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
        return five;
        }
        n %= 10;
        if (n === 1) {
        return one;
        }
        if (n >= 2 && n <= 4) {
        return two;
        }
        return five;
    }

    const setRate = () => {
        if (props.stars === 5) {
            return <>{activeRate}{activeRate}{activeRate}{activeRate}{activeRate}</>;
        } else if (props.stars === 4) {
            return <>{activeRate}{activeRate}{activeRate}{activeRate}{disableRate}</>
        } else if (props.stars === 3) {
            return <>{activeRate}{activeRate}{activeRate}{disableRate}{disableRate}</>
        } else if (props.stars === 2) {
            return <>{activeRate}{activeRate}{disableRate}{disableRate}{disableRate}</>
        } else if (props.stars === 1) {
            return <>{activeRate}{disableRate}{disableRate}{disableRate}{disableRate}</>
        } else {
            return <>{disableRate}{disableRate}{disableRate}{disableRate}{disableRate}</>
        }
    }

    const heartActive = classNames('heart', 'heart-active');

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function handleAddFavorite() {
        if (props.favoriteStatus === true) {
             dispatch(addFavorite(props))
        } else {
            dispatch(delFavorite(props))
        }
    }


    const activeRate = <img src={starActive} alt='starActive'/>;
    const disableRate = <img src={starDisable} alt='starDisable'/>
    
    return (
        <div className="hotel">

            <div className="hotel__title">
                <div className="hotel__name">{props.hotelName}</div>
                <div 
                className="hotel__favorite"
                onClick={handleAddFavorite}
                >
                    <svg className={props.favoriteStatus ? 'heart' : heartActive} width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z" fill="white" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            <div className="hotel__date">
                    <div className="hotel__date-date">{props.checkInDate}</div>
                    <span className='hotel__date-separator'></span>
                    <div className="hotel__date-day">{props.countDays} {setNameCount(props.countDays, 'дней', 'день', 'дня')}</div>
            </div>

            <div className="hotel__rate">
                <div className="hotel__rate-stars">
                    {setRate()}
                </div>
                <div className="hotel__rate-price">
                    <div className="hotel__rate-price-title">Price:</div>
                    <div className="hotel__rate-price-price">{numberWithSpaces(Math.floor(props.priceFrom))} ₽</div>
                </div>
            </div>
        </div>
    )
}