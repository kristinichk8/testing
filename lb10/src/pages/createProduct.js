import '../styles/globalStyles.css'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import AuthService from '../services/UserService'
import {useDispatch} from 'react-redux'
import {loginUser, setAuth} from '../actions/actions'
import {useNavigate} from 'react-router'
import logo from '../resources/img/valley 1.png'
import {useState} from "react";

const CreateProduct = () => {
    const {createProduct} = AuthService()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState('')
    const handleSubmit = async (Name_product, Country_of_origin, Impact, Taste, Thumbnail, Price) => {
        try {
            await createProduct(Name_product, Country_of_origin, Impact, Taste, Thumbnail, Price).then((data) => {
                navigate(-1)
            })
        } catch (e) {
            setErrors(e.response.data.message)
        }
    }
    return (
        <div className={'auth-background'}>
            <div className='login-container'>
                <Formik
                    initialValues={
                        {
                            Name_product: '',
                            Country_of_origin: '',
                            Impact: '',
                            Taste: '',
                            Price: '',
                            Thumbnail: ''
                        }
                    }

                    validationSchema={Yup.object({
                        Name_product: Yup.string()
                            .required('Обязательное поле!'),
                        Country_of_origin: Yup.string()
                            .required('Обязательное поле!'),
                        Impact: Yup.string()
                            .required('Обязательное поле!'),
                        Taste: Yup.string()
                            .required('Обязательное поле!'),
                        Price: Yup.string()
                            .required('Обязательное поле!'),
                        Thumbnail: Yup.string()
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
                            <h1 style={{paddingBottom: '2rem'}}>Создание продукта</h1>
                            <div style={{textAlign: 'center'}}>

                                <div>
                                    <Field
                                        name={"Name_product"}
                                        className="form-style"
                                        id={"Name_product"}
                                        placeholder="Название продукта"
                                    />
                                    <ErrorMessage className={'error-message-validation'} name={'Name_product'}
                                                  component={'div'}/>
                                </div>

                                <div>
                                    <Field
                                        name={"Country_of_origin"}
                                        className="form-style"
                                        id={"Country_of_origin"}
                                        type={'Country_of_origin'}
                                        placeholder="Страна производства"
                                    />
                                    <ErrorMessage className={'error-message-validation'} name={'Country_of_origin'}
                                                  component={'div'}/>
                                </div>

                                <div>
                                    <Field
                                        name={"Impact"}
                                        className="form-style"
                                        id={"Impact"}
                                        placeholder="Воздействие"
                                    />
                                    <ErrorMessage className={'error-message-validation'} name={'Impact'}
                                                  component={'div'}/>
                                </div>

                                <div>
                                    <Field
                                        name={"Taste"}
                                        className="form-style"
                                        id={"Taste"}
                                        type={'Taste'}
                                        placeholder="Вкус"
                                    />
                                    <ErrorMessage className={'error-message-validation'} name={'Taste'}
                                                  component={'div'}/>
                                </div>

                                <div>
                                    <Field
                                        name={"Price"}
                                        className="form-style"
                                        id={"Price"}
                                        placeholder="Цена"
                                    />
                                    <ErrorMessage className={'error-message-validation'} name={'Price'}
                                                  component={'div'}/>
                                </div>

                                <div>
                                    <Field
                                        name={"Thumbnail"}
                                        className="form-style"
                                        id={"Thumbnail"}
                                        type={'Thumbnail'}
                                        placeholder="Ссылка на фотку"
                                    />
                                    <ErrorMessage className={'error-message-validation'} name={'Thumbnail'}
                                                  component={'div'}/>
                                </div>

                            </div>
                            {errors.length > 1 ? <div className={'error-message-validation'}>{errors}</div> : null}
                            <button className={'auth-button'} type={'submit'}
                                    disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                isSubmitting = true
                                await handleSubmit(values.Name_product, values.Country_of_origin, values.Impact, values.Taste, values.Thumbnail, values.Price)
                                setTimeout(() => resetForm(), 500)
                            }}>Добавить
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default CreateProduct
