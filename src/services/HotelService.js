import { useHttp } from '../hooks/http.hooks';

    export default function useHotelService() {

        // https://support.travelpayouts.com/hc/ru/articles/115000343268-API-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%BE%D1%82%D0%B5%D0%BB%D0%B5%D0%B9#price

        const { loading, request, error, clearError } = useHttp();

        const _apiBase = 'http://engine.hotellook.com/api/v2/lookup.json';

        const getAllHotels = async () => {
            const res = await request(
                `${_apiBase}?location=Moscow&currency=rub&checkIn=2023-12-10&checkOut=2023-12-12&limit=10`
            )
            return res.data.results.map(_transformHotel);
        };


        const _transformHotel = (hotel) => {
            return {
                id: hotel[0].hotelId,
                name: hotel[0].hotelName,
                stars: hotel[0].stars,
                price: hotel[0].priceAvg,
            }
        }

        return {
            loading,
            error,
            clearError,
            getAllHotels
        };
    }