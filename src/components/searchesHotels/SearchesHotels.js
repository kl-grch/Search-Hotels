import './searchesHotels.scss';
import arrow from '../../assets/searchesHotels/arrow.svg';
import img1 from '../../assets/searchesHotels/img1.png';
import img2 from '../../assets/searchesHotels/img2.png';
import img3 from '../../assets/searchesHotels/img3.png';
import img4 from '../../assets/searchesHotels/img4.png';
import house from '../../assets/searchesHotels/house.svg';

import FavoriteHotel from '../favoriteHotel/FavoriteHotel';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../../store/actions/actions';


const hotels = [
    {
        name: 'Moscow Marriott Grand Hotel',
        date: '28 June, 2020',
        day: '1',
        price: '23 924'
    },
    {
        name: 'Moscow Marriott Grand Hotel',
        date: '28 June, 2020',
        day: '1',
        price: '13 924'
    }
]


export default function SearchesHotels() {

    const {location, date, searchHotels} = useSelector(store => store);
    const dispatch = useDispatch();
    //Позже будем передавать в стейт избранные отели


    // Меняем в дате цифру на месяц
    function updateSearchDate() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.toLocaleString('en', { month: 'long' });
        let day = now.getDate();
        day = (day < 10) ? '0' + day : day;
        let date = String(`${day} ${month}, ${year}`);
        return date;
    }

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
    const hotel = hotels.map((item, i) => {
        return (
            <div key={i} className="searches__result-item">
            <div className="searches__result-item-img">
                <img src={house} alt="house" />
            </div>
            <FavoriteHotel name={item.name}
            date={item.date}
            day={item.day}
            price={item.price}
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

                <div className="searches__date">{date}</div>
            </div>

            <div className="searches__imgs">
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
                <img src={img4} alt="img4" />
            </div>

            <div className="searches__result">
                <div className="searches__result-favorite">
                Добавлено в Избранное:<span>{searchHotels.length}</span>{setNameCount(searchHotels.length, 'отелей', 'отель', 'отеля')}
                </div>

                <div className="searches__result-hotels">
                    <div className="searches__result-items">

                        {hotels.length > 0 ? hotel : <div style={{'display': 'flex', 'justify-content': 'center'}}>Отели не найдены</div>}

                    </div>
                </div>
            </div>
        </div>
    )
}