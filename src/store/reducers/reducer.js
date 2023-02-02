const initialState = {

    authorization: false,
    login: 'info@liis.su',
    password: '11111111',

    location: 'Москва',
    date: '2023-02-02',
    days: 1,

    searchHotels: [],
    favoriteHotels: [],
    hotelLoadingStatus: 'ok'
}

export default function reducer(state = initialState, action) {

    switch(action.type) {
        case "LOCATION_SET": {
            return {
                ...state,
                // сюда передать город из формы поиска
                location: action.payload.location
            }
        }
        case 'DATE_SET': {
            return {
                ...state,
                date: action.payload.date
            }
        }
        default: return state;
    }

}