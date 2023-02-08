import './favoriteHotels.scss';

import FilterButton from '../filterButton/FilterButton';
import FavoriteHotel from '../favoriteHotel/FavoriteHotel';

import { useSelector } from 'react-redux';

export default function FavoriteHotels() {

    const {checkInDate, countDays} = useSelector(store => store.searchForm);
    const {favoriteHotels} = useSelector(store => store.favoriteHotels);

    const hotel = favoriteHotels?.map((item) => {
        return (
            <FavoriteHotel name={item.hotelName}
            date={checkInDate}
            day={countDays}
            price={item.priceFrom}
            stars={item.stars}
            key={item.hotelId}
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
                {favoriteHotels?.length > 0 ? hotel : <div style={{'display': 'flex', 'justifyContent': 'center'}}>Нет избранного</div>}
            </div>
        </div>
    )
}