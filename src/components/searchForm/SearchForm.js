import './searchForm.scss';

import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setDate } from '../../store/actions/actions';

export default function SearchForm() {

    // отправка данных в стор
    const dispatch = useDispatch();

    //получаем дефолтные данные из стора (Москва, кол-во дней)
    const {location, date, days} = useSelector(state => state);
    
    //Приводим дату к строке и отправляем в стор
    // const [date, setDate] = useState(getNowDate());
        
    const getHotels = () =>{
        fetch('http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2023-12-10&checkOut=2023-12-12&limit=10')
            .then((response) => {
                if (!response.ok) {
                  throw new Error('Error occurred!')
                }
                return response.json()
              })
            .then((data) => console.log(data[0]))
            .catch((err) => {
                console.log(err)
              })
    }

    // getHotels();

    function getNowDate() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();

        year = (year < 10) ? '0' + year : year;
        month = (month < 10) ? '0' + month : month;
        day = (day < 10) ? '0' + day : day;

        let date = String(`${year}-${month}-${day}`);

        return date;
    }

    const newDate = getNowDate();
    console.log(newDate);

    return (
        <div className="search">
            <Formik
            initialValues={{
                location: location,
                date: date,
                day: days
            }}
            validationSchema={
                Yup.object({
                    location: Yup.string()
                             .required('Обязательное поле'),
                    date: Yup.date()
                                .min(new Date(), 'Дата не может быть меньше текущей')
                                .required('Обязательное поле'),
                    day: Yup.number()
                            .moreThan(1, `Укажите не меньше 1 дня`)
                            .required('Обязательное поле')
                            .positive()
                            .integer('Введите целое количество дней')
                })
            }
            // onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
            onSubmit = {values => {getHotels()}}
            >
                    <Form className='search__form'>
                        <div className="search__inputs">
                            <div className="search__input">
                                <label className='search__label' htmlFor='location'>Локация</label>
                                <Field 
                                name='location'
                                type="text" 
                                className="input"
                                />
                                <ErrorMessage name='location' component='div' className='search__error'/>
                            </div>
                            <div className="search__input">
                                <label className='search__label' htmlFor='date'>Дата заселения</label>
                                <Field 
                                name='date'
                                type="date" 
                                className="input" 
                                />
                                <ErrorMessage name='date' component='div' className='search__error'/>
                            </div>
                            <div className="search__input">
                                <label className='search__label' htmlFor='day'>Количество дней</label>
                                <Field 
                                name='day'
                                type="number" 
                                className="input" 
                                />
                                <ErrorMessage name='day' component='div' className='search__error'/>
                            </div>

    
                        </div>
                        <button type='submit' className="button">Найти</button>
                    </Form>                
            </Formik>
        </div>
    )
}