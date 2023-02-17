import "./searchesHotels.scss";
import arrow from "../../assets/searchesHotels/arrow.svg";
import house from "../../assets/searchesHotels/house.svg";

import Hotel from "../hotel/Hotel";
import { useSelector } from "react-redux";
import { useEndNumber } from "../../hooks/endNumber.hooks";
import dayjs from "dayjs";
import "dayjs/locale/ru";

export default function SearchesHotels() {
  const { checkInDate, countDays } = useSelector(
    (store) => store.searchForm
  );
  const { foundHotels, images } = useSelector((store) => store.searchesHotels);
  const { favoriteHotels } = useSelector((store) => store.favoriteHotels);

  function getFavoriteStatus(status) {
    if (favoriteHotels.some(item => item.hotelId === status)) {
      return true;
    }
  }


  const hotel = foundHotels?.map((item) => {
  
    return (
      <div key={item.hotelId} className="items__item">
        <div className="item__img">
          <img src={house} alt="house" />
        </div>
        <Hotel
          hotelName={item.hotelName}
          checkInDate={dayjs(checkInDate).locale("ru").format("DD MMMM YYYY")}
          countDays={countDays}
          stars={item.stars}
          priceFrom={item.priceFrom}
          hotelId={item.hotelId}
          favoriteStatus={getFavoriteStatus(item.hotelId)}
        />
      </div>
    );
  });

  const image = images?.map((img, i) => {
    return <img key={i} src={img} alt={"img" + i} />;
  });

  return (
    <div className="searches">
      <div className="searches__hotels">
        <div className="hotels__title">
          <div className="title__route">
            <div className="route__hotel">Отели</div>
            <div className="route__arrow">
              <img src={arrow} alt="route-arrow" />
            </div>
            <div className="route__city">{foundHotels[0]?.location.name ? foundHotels[0]?.location.name : 'Не найдены' }</div>
          </div>

          <div className="title__date">
            {dayjs(checkInDate).locale("ru").format("DD MMMM YYYY")}
          </div>
        </div>

        <div className="hotels__imgs" id="horizontal-scroller">{image}</div>

        <div className="hotels__result">
          <div className="result__favorite">
            Добавлено в Избранное:<span>{favoriteHotels?.length ? favoriteHotels?.length : 0}</span>
            {useEndNumber(favoriteHotels?.length, "отелей", "отель", "отеля")}
          </div>

          <div className="result__hotels">
            <div className="hotels__items">
              {foundHotels?.length > 0 ? (
                hotel
              ) : (
                <div className="items__not-found">
                  Отели не найдены
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
