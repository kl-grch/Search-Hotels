// export const fetchingHotels = () => {
//     fetch('http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2023-12-10&checkOut=2023-12-12&limit=10')
//     .then((response) => {
//         if (!response.ok) {
//           throw new Error('Error occurred!')
//         }
//         return response.json()
//       })
//     .then((data) => console.log(data[0]))
//     .catch((err) => {
//         console.log(err)
//       })
// }

export const setLocation = (location) => {
  return {
    type: 'LOCATION_SET',
    payload: location
  }
}

export const setDate = (date) => {
  return {
    type: 'DATE_SET',
    payload: date
  }
}

export const setAuthorization = () => {
  return {
    type: 'AUTHORIZATION'
  }
}