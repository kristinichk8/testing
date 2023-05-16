import logo from "../resources/img/valley 1.png";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import AuthService from "../services/UserService";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {loginUser, setAuth} from "../actions/actions";

const TakePassword = () => {
    const {checkEmail, setPassword} = AuthService()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState('')
    const handleSubmit = async (E_mail) => {
        try {
            await checkEmail(E_mail).then((data) => {
                setEmail(E_mail)
            })
        } catch (e) {
            setErrors(e.response.data.message)
        }
    }
    const handleSubmitPassword = async (Password) => {
        try {
            await setPassword(email, Password).then((data) => {
                navigate('/login')
            })
        } catch (e) {
            setErrors(e.response.data.message)
        }
    }
    return (
        <div className={'auth-background'}>
            <div className='login-container'>
                {email ?
                    <Formik
                        initialValues={
                            {
                                Password: ''
                            }
                        }

                        validationSchema={Yup.object({
                            Password: Yup.string()
                                .min(6, 'Минимум 6 символов')
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
                                <h1 style={{paddingBottom: '2rem'}}>Введите новый пароль</h1>
                                <div style={{textAlign: 'center'}}>

                                    <div>
                                        <Field
                                            name={"Password"}
                                            className="form-style"
                                            id={"Password"}
                                            placeholder="Новый пароль"
                                        />
                                        <ErrorMessage className={'error-message-validation'} name={'Password'}
                                                      component={'div'}/>
                                    </div>

                                </div>
                                {errors.length > 1 ? <div className={'error-message-validation'}>{errors}</div> : null}
                                <button className={'auth-button'} type={'submit'}
                                        disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                    isSubmitting = true
                                    await handleSubmitPassword(values.Password)
                                    setTimeout(() => resetForm(), 500)
                                }}>Отправить
                                </button>
                            </Form>
                        )}
                    </Formik>
                    :
                    <Formik
                        initialValues={
                            {
                                E_mail: ''
                            }
                        }

                        validationSchema={Yup.object({
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
                                <h1 style={{paddingBottom: '2rem'}}>Введите адрес электронной почты</h1>
                                <div style={{textAlign: 'center'}}>

                                    <div>
                                        <Field
                                            name={"E_mail"}
                                            className="form-style"
                                            id={"E_mail"}
                                            placeholder="Адрес электронной почты"
                                        />
                                        <ErrorMessage className={'error-message-validation'} name={'E_mail'}
                                                      component={'div'}/>
                                    </div>

                                </div>
                                {errors.length > 1 ? <div className={'error-message-validation'}>{errors}</div> : null}
                                <button className={'auth-button'} type={'submit'}
                                        disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                    isSubmitting = true
                                    await handleSubmit(values.E_mail, values.Password)
                                    setTimeout(() => resetForm(), 500)
                                }}>Отправить
                                </button>
                            </Form>
                        )}
                    </Formik>
                }

            </div>
        </div>
    )
}

export default TakePassword
