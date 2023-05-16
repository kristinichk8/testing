import '../styles/globalStyles.css'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import AuthService from '../services/UserService'
import { loginUser, setAuth } from '../actions/actions'
import {useNavigate} from "react-router";
import logo from "../resources/img/valley 1.png";
import {useState} from "react";

const Registration = () => {

  const {registration} = AuthService()
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const [errors, setErrors] = useState('')

  const handleSubmit = async (E_mail, Password, User_name) => {
    try {
        await registration(E_mail, User_name, Password).then((data) => {
            localStorage.setItem('token', data.data.accessToken)
          dispatch(loginUser(data.data));
          dispatch(setAuth(true));
          navigate('/')
        })
    } catch (e) {
        setErrors(e.response.data.message)
    }
}

  return (
      <div className={'auth-background'}>
    <div className='login-container'>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer'}} onClick={() => navigate('/')}>
            <img src={logo} width={'30%'}/>
        </div>
      <Formik
                initialValues={
                    {
                        User_name: '',
                        Password: '',
                        E_mail: ''
                    }
                }

                validationSchema={Yup.object({
                        User_name: Yup.string()
                        .min(2, 'Минимум 2 символа!')
                        .required('Обязательное поле!'),
                        Password: Yup.string()
                        .min(6, 'Длина пароля должна быть больше 6 символов!')
                        .required('Обязательное поле!'),
                        E_mail: Yup.string()
                        .email('Некорректная эл. почта!')
                        .required('Обязательное поле!'),
                })}

                onSubmit={
                    values => console.log(JSON.stringify(values))
                }>
                {({
                      values,
                      isValid,
                      dirty,
                      isSubmitting,
                      resetForm
                  }) => (
                <Form>
                    <h1>Регистрация</h1>
                    <div style={{textAlign: 'center'}}>
                        <div>
                            <Field
                                name={"User_name"}
                                className="form-style"
                                id={"User_name"}
                                type={'text'}
                                placeholder="Логин"
                            />
                            <ErrorMessage className={'error-message-validation'} name={'User_name'} component={'div'}/>
                        </div>

                        <div>
                            <Field
                                name={"Password"}
                                className="form-style"
                                id={"Password"}
                                type={'Password'}
                                placeholder="Пароль"
                            />
                            <ErrorMessage className={'error-message-validation'} name={'Password'} component={'div'}/>
                        </div>

                        <div>
                            <Field
                                name={"E_mail"}
                                className="form-style"
                                id={"E_mail"}
                                placeholder="Адрес электронной почты"
                            />
                            <ErrorMessage className={'error-message-validation'} name={'E_mail'} component={'div'}/>
                        </div>
                    </div>
                    {errors.length > 1 ? <div className={'error-message-validation'}>{errors}</div> : null}
                <button className={'auth-button'} type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                    isSubmitting = true
                    await handleSubmit(values.E_mail, values.Password, values.User_name)
                    setTimeout(() => resetForm(), 500)
                }}>Зарегистрироваться</button>
                </Form>
                    )}
            </Formik>
    </div>
      </div>
  )
}

export default Registration;
