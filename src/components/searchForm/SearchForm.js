import './searchForm.scss';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import { searchHotels } from '../searchesHotels/searchesHotelsSlice';
import { setSearchForm, setCheckInDate } from './searchFormSlice';
import { useEffect } from 'react';

export default function SearchForm() {

    const {location, checkInDate, countDays} = useSelector(state => state.searchForm);
    const dispatch = useDispatch();

    const getHotels =  async () =>{
         await fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkInDate}&limit=10`)
            .then((response) => {
                if (!response.ok) {
                  throw new Error('Error occurred!')
                }
                return response.json()
              })
            .then((data) => dispatch(searchHotels(data)))
            .catch((err) => {
                console.log(err)
              })
    }

    useEffect(() => {
        dispatch(setCheckInDate({checkInDate: getNowDate()}));
    }, [])

    useEffect(() => {
        getHotels();
    }, [])

    function getNowDate() {
        let nowDate = new Date();
        return nowDate.toLocaleDateString();
      }


    return (
        <div className="search">
            <Formik
            initialValues={{
                location: location,
                checkInDate: checkInDate,
                countDays: countDays
            }}
            validationSchema={
                Yup.object({
                    location: Yup.string()
                             .required('Обязательное поле'),
                    checkInDate: Yup.date()
                                .min(new Date(), 'Дата не может быть меньше текущей')
                                .required('Обязательное поле'),
                    countDays: Yup.number()
                            .moreThan(1, `Укажите не меньше 1 дня`)
                            .required('Обязательное поле')
                            .positive()
                            .integer('Введите целое количество дней')
                })
            }
            onSubmit = {(values) => {
                dispatch(setSearchForm({location: values.location, checkInDate: values.checkInDate.toString(), countDays:values.countDays}), getHotels());
            }}
            >
                    <Form className='search__form'>
                        <div className="search__inputs">
                            <div className="search__input">
                                <label className='search__label' htmlFor='location'>Локация</label>
                                <Field 
                                name='location'
                                type="text" 
                                className="input"
                                onInput={((e) => e.location)}
                                />
                                <ErrorMessage name='location' component='div' className='search__error'/>
                            </div>
                            <div className="search__input">
                                <label className='search__label' htmlFor='checkInDate'>Дата заселения</label>
                                <Field 
                                name='checkInDate'
                                type="date" 
                                className="input" 
                                onInput={(e) => e.checkInDate}
                                />
                                <ErrorMessage name='checkInDate' component='div' className='search__error'/>
                            </div>
                            <div className="search__input">
                                <label className='search__label' htmlFor='countDays'>Количество дней</label>
                                <Field 
                                name='countDays'
                                type="number" 
                                className="input"
                                onInput={(e) => e.countDays}
                                />
                                <ErrorMessage name='countDays' component='div' className='search__error'/>
                            </div>

    
                        </div>
                        <button type='submit' className="button">Найти</button>
                    </Form>                
            </Formik>
        </div>
    )
}