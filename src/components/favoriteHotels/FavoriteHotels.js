import "./favoriteHotels.scss";

import FilterButton from "../filterButton/FilterButton";
import Hotel from "../hotel/Hotel";
import { useSelector, useDispatch } from "react-redux";
import { filterRate, filterPrice } from "./favoriteHotelsSlice";
import classNames from "classnames";

export default function FavoriteHotels(props) {
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
        priceFrom={item.priceFrom * item.countDays}
        stars={item.stars}
        hotelId={item.hotelId}
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
          filterRateStatus
          filterActiveBorder={classNames("filter", {
            "filter--active": filterRateStatus,
          })}
          filterActiveTitle={classNames("filter__title", {
            "filter__title--active": filterRateStatus,
          })}
          filterActiveArrowUp={classNames("filter__arrows-up", {
            "filter__arrows-up--active": filterRateStatus,
          })}
        />
        <FilterButton
          title={"Цена"}
          activeFilter={false}
          onClick={
            favoriteHotels?.length > 0 ? () => dispatch(filterPrice()) : null
          }
          filterPriceStatus
          filterActiveBorder={classNames("filter", {
            "filter--active": filterPriceStatus,
          })}
          filterActiveTitle={classNames("filter__title", {
            "filter__title--active": filterPriceStatus,
          })}
          filterActiveArrowUp={classNames("filter__arrows-up", {
            "filter__arrows-up--active": filterPriceStatus,
          })}
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