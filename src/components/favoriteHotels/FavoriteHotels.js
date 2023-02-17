import "./favoriteHotels.scss";

import FilterButton from "../filterButton/FilterButton";
import Hotel from "../hotel/Hotel";
import { useSelector, useDispatch } from "react-redux";
import { filterRate, filterPrice } from "./favoriteHotelsSlice";

export default function FavoriteHotels() {
  const { favoriteHotels, filterRateStatus, filterPriceStatus } = useSelector(
    (store) => store.favoriteHotels
  );
  const dispatch = useDispatch();

  const hotel = favoriteHotels?.map((item) => {
    return (
      <Hotel
        key={item.hotelId}
        hotelName={item.hotelName}
        checkInDate={item.checkInDate}
        countDays={item.countDays}
        priceFrom={item.priceFrom}
        stars={item.stars}
        hotelId={item.hotelId}
        favoriteStatus={item.favoriteStatus}
      />
    );
  });


  return (
    <div className="favorites">
      <div className="favorites__title">Избранное</div>
      <div className="favorites__filters">
        <FilterButton
          title={"Рейтинг"}
          activeFilter={false}
          onClick={
            favoriteHotels?.length > 0 ? () => dispatch(filterRate()) : null
          }
          isActive={filterRateStatus}
        />
        <FilterButton
          title={"Цена"}
          activeFilter={false}
          onClick={
            favoriteHotels?.length > 0 ? () => dispatch(filterPrice()) : null
          }
          isActive={filterPriceStatus}
        />
      </div>
      <div className="favorites__hotels">
        {favoriteHotels?.length > 0 ? (
          hotel
        ) : (
          <div className="hotels__not-found">
            Нет избранного
          </div>
        )}
      </div>
    </div>
  );
}