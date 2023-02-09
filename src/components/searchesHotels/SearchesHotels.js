import './searchesHotels.scss';
import arrow from '../../assets/searchesHotels/arrow.svg';
import img1 from '../../assets/searchesHotels/img1.png';
import img2 from '../../assets/searchesHotels/img2.png';
import img3 from '../../assets/searchesHotels/img3.png';
import img4 from '../../assets/searchesHotels/img4.png';
import house from '../../assets/searchesHotels/house.svg';

import Hotel from '../hotel/Hotel';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite } from '../favoriteHotels/favoriteHotelsSlice';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export default function SearchesHotels() {

    const {location, checkInDate, countDays} = useSelector(store => store.searchForm);
    const {foundHotels} = useSelector(store => store.searchesHotels);
    const {favoriteHotels} = useSelector(store => store.favoriteHotels);
    const dispatch = useDispatch();


    // Окончание числительных
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

    const hotel = foundHotels?.map((item) => {
        return (
            <div 
            key={item.hotelId} 
            className="searches__result-item"
            onClick={() => dispatch(addFavorite(item))}>
                <div className="searches__result-item-img">
                    <img src={house} alt="house" />
                </div>
                <Hotel name={item.hotelName}
                date={dayjs(checkInDate).locale('ru').format('DD MMMM YYYY')}
                day={countDays}
                stars={item.stars}
                price={item.priceFrom}
                />
            </div>
        )
    })

    // верстка

    return (
        <div className="searches__hotels">
            <div className="searches__title">
                <div className="searches__route">
                    <div className="searches__route-hotel">Отели</div>
                    <div className="searches__route-arrow">
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className="searches__route-city">{location}</div>
                </div>

                <div className="searches__date">{dayjs(checkInDate).locale('ru').format('DD MMMM YYYY')}</div>
            </div>

            <div className="searches__imgs">
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
                <img src={img4} alt="img4" />
            </div>

            <div className="searches__result">
                <div className="searches__result-favorite">
                Добавлено в Избранное:<span>{favoriteHotels?.length}</span>{setNameCount(favoriteHotels?.length, 'отелей', 'отель', 'отеля')}
                </div>

                <div className="searches__result-hotels">
                    <div className="searches__result-items">

                        {foundHotels?.length > 0 ? hotel : <div style={{'display': 'flex', 'justifyContent': 'center'}}>Отели не найдены</div>}

                    </div>
                </div>
            </div>
        </div>
    )
}