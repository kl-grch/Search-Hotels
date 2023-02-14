import './authorizationForm.scss';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authorizationTrue } from './authorizationSlice';

function AuthorizationForm() {

    const {login, password} = useSelector(store => store.authorization);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="authorization">
            <h1 className='authorization__title'>Simple Hotel Check</h1>
            <Formik
            initialValues={{
                login: login,
                password: password
            }}
            validationSchema={
                Yup.object({
                    login: Yup.string()
                             .email('Неверный логин')
                             .required('Обязательное поле'),
                    password: Yup.string()
                                .min(8, 'Минимум 8 символов')
                                .matches(/[^[^а-яё]+$/i, 'Пароль не должен содержать кириллицу')
                                .required('Обязательное поле')
                })
            }
            onSubmit = {values => {
                console.log('Вы авторизованы');
                dispatch(authorizationTrue({login: values.login, password: values.password}));
                navigate('/');
            }}
            >
                    <Form className='authorization__form'>
                        <div className="authorization__inputs">
                            <div className="authorization__input">
                                <label 
                                className='authorization__label'
                                htmlFor='login'>Логин</label>
                                <Field 
                                name='login'
                                type="email"
                                className="input"
                                onInput={(e) => e.login}
                                />
                                <ErrorMessage id='login' name='login' component='div' className='authorization__error'/>
                            </div>
                            <div className="authorization__input">
                                <label className='authorization__label' htmlFor='password'>Пароль</label>
                                <Field 
                                name='password'
                                type="password" 
                                className="input" 
                                onInput={(e) => e.password}
                                />
                                <ErrorMessage name='password' component='div' className='authorization__error'/>
                            </div>
                        </div>
                        <button type='submit' className="button">Войти</button>
                    </Form>                
            </Formik>
        </div>
    )
}

export default AuthorizationForm;