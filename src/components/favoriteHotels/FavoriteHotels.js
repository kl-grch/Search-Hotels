import './favoriteHotels.scss';

import FilterButton from '../filterButton/FilterButton';
import FavoriteHotel from '../favoriteHotel/FavoriteHotel';

const hotels = [
    {
        name: 'Moscow Marriott Grand Hotel',
        date: '28 June, 2020',
        day: '12',
        price: '23 924'
    },
    {
        name: 'Moscow Marriott Grand Hotel',
        date: '28 June, 2020',
        day: '1',
        price: '13 924'
    }
]


export default function FavoriteHotels() {

    const hotel = hotels.map((item, i) => {
        return (
            <FavoriteHotel name={item.name}
            date={item.date}
            day={item.day}
            price={item.price}
            key={i}
            />
        )
    })

    return(
        <div className="favorite">
            <div className="favorite__title">
                Избранное
            </div>
            <div className="favorite__filters">
                <FilterButton name={'Рейтинг'}/>
                <FilterButton name={'Цена'}/>
            </div>
            <div className="favorite__hotels">
                {hotels.length > 0 ? hotel : <div style={{'display': 'flex', 'justify-content': 'center'}}>Нет избранного</div>}
            </div>
        </div>
    )
}