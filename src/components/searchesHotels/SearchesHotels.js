import './searchesHotels.scss';
import arrow from '../../assets/searchesHotels/arrow.svg';
import img1 from '../../assets/searchesHotels/img1.png';
import img2 from '../../assets/searchesHotels/img2.png';
import img3 from '../../assets/searchesHotels/img3.png';
import img4 from '../../assets/searchesHotels/img4.png';
import house from '../../assets/searchesHotels/house.svg';

import FavoriteHotel from '../favoriteHotel/FavoriteHotel';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, delFavorite } from '../favoriteHotels/favoriteHotelsSlice';

export default function SearchesHotels() {

    const {location, checkInDate, countDays} = useSelector(store => store.searchForm);
    const {searchHotels} = useSelector(store => store.searchesHotels);
    const {favoriteHotels} = useSelector(store => store.favoriteHotels);
    const dispatch = useDispatch();
    //Позже будем передавать в стейт избранные отели


    // Меняем в дате цифру на месяц
    // function updateSearchDate() {
    //     let now = new Date();
    //     let year = now.getFullYear();
    //     let month = now.toLocaleString('en', { month: 'long' });
    //     let day = now.getDate();
    //     day = (day < 10) ? '0' + day : day;
    //     let date = String(`${day} ${month}, ${year}`);
    //     return date;
    // }

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

    //преобразуем дату с названием месяца

    // динамическая вестка отеля
    const hotel = searchHotels?.map((item) => {
        return (
            <div 
            key={item.hotelId} 
            className="searches__result-item"
            onClick={() => dispatch(addFavorite(item))}>
                <div className="searches__result-item-img">
                    <img src={house} alt="house" />
                </div>
                <FavoriteHotel name={item.hotelName}
                date={checkInDate}
                day={countDays}
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

                <div className="searches__date">{checkInDate}</div>
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

                        {searchHotels?.length > 0 ? hotel : <div style={{'display': 'flex', 'justifyContent': 'center'}}>Отели не найдены</div>}

                    </div>
                </div>
            </div>
        </div>
    )
}