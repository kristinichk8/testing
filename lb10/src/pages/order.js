import {useNavigate, useParams} from "react-router";
import logo from "../resources/img/valley 1.png";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import AuthService from "../services/UserService";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ProductService from "../services/ProductService";

const Order = () => {
    const {curUser} = useSelector(state => state)
    const {id} = useParams()
    const {createOrder} = AuthService()
    const [product, setProduct] = useState({})
    const {fetchProductID} = ProductService()
    const navigate = useNavigate()
    useEffect(() => {
        fetchProductID(id).then(data => setProduct(data.data[0]))
    }, [])
    const [errors, setErrors] = useState('')
    const handleSubmit = async (address, fio) => {
        try {
            await createOrder(curUser.UsersID, product.ProductID, address, fio).then(() => {
                navigate('/order-success')
            })
        } catch (e) {
            setErrors(e.response.data.message)
        }
    }
    return (
        <>
        <div className={'auth-background'}>
            <div className='login-container' style={{display: 'flex', justifyContent: 'space-around'}}>
                <div className={'order-tovar'}>
                    <div style={{maxWidth: '100%'}}>
                        <img width={'100%'} src={product.Thumbnail} style={{borderRadius: '15px'}}/>
                    </div>
                    <hr/>
                    <div>
                        <h1>{product.Name_product}</h1>
                    </div>
                    <hr/>
                    <div style={{textAlign: 'start'}}>
                        <div style={{color: 'rgba(255,255,255,.5)'}}>Страна производства: <span style={{color: 'rgba(255,255,255,1)'}}>{product.Country_of_origin}</span></div>
                        <div style={{color: 'rgba(255,255,255,.5)'}}>Воздействие: <span style={{color: 'rgba(255,255,255,1)'}}>{product.Impact}</span></div>
                        <div style={{color: 'rgba(255,255,255,.5)'}}>Вкус: <span style={{color: 'rgba(255,255,255,1)'}}>{product.Taste}</span></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            Цена
                        </div>
                        <div>
                            {product.Price} ₽
                        </div>
                    </div>
                </div>
                <div>
                <Formik
                    initialValues={
                        {
                            FIO: '',
                            address: '',
                            card_number: '',
                            cvc_code: '',
                            card_date: ''
                        }
                    }

                    enableReinitialize={true}

                    validationSchema={Yup.object({
                        FIO: Yup.string()
                            .required('Обязательное поле!'),
                        address: Yup.string()
                            .required('Обязательное поле!'),
                        card_number: Yup.string()
                            .required('Обязательное поле!'),
                        cvc_code: Yup.string()
                            .required('Обязательное поле!'),
                        card_date: Yup.string()
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
                            <hr/>
                            <h1>Оформление заказа</h1>
                            <hr/>
                            <div style={{textAlign: 'center'}}>
                                <div>

                                <div>
                                    <Field
                                        name={"FIO"}
                                        className="order_style"
                                        id={"FIO"}
                                        placeholder="ФИО"
                                    />
                                    <ErrorMessage className={'error-message-validation'} name={'FIO'}
                                                  component={'div'}/>
                                </div>

                                <div>
                                    <Field
                                        name={"address"}
                                        className="order_style"
                                        id={"address"}
                                        type={'address'}
                                        placeholder="Адрес"
                                    />
                                    <ErrorMessage className={'error-message-validation'} name={'address'}
                                                  component={'div'}/>
                                </div>

                                <div>
                                    <Field
                                        name={"card_number"}
                                        className="order_style"
                                        id={"card_number"}
                                        placeholder="Номер кредитной карты"
                                    />
                                    <ErrorMessage className={'error-message-validation'} name={'card_number'}
                                                  component={'div'}/>
                                </div>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div>
                                    <Field
                                        name={"cvc_code"}
                                        className="order_style"
                                        id={"cvc_code"}
                                        type={'password'}
                                        placeholder="CVC код"
                                    />
                                    <ErrorMessage className={'error-message-validation'} name={'cvc_code'}
                                                  component={'div'}/>
                                </div>

                                <div>
                                    <Field
                                        name={"card_date"}
                                        className="order_style"
                                        id={"card_date"}
                                        type={'card_date'}
                                        placeholder="Дата окончания карты"
                                    />
                                    <ErrorMessage className={'error-message-validation'} name={'card_date'}
                                                  component={'div'}/>
                                </div>
                                </div>

                            </div>
                            {errors.length > 1 ? <div className={'error-message-validation'}>{errors}</div> : null}
                            <button className={'auth-button'} style={{width: '100%', marginTop:'40%'}} type={'submit'}
                                    disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                isSubmitting = true
                                await handleSubmit(values.address, values.FIO)
                                setTimeout(() => resetForm(), 500)
                            }}>Оформить заказ
                            </button>
                        </Form>
                    )}
                </Formik>
                </div>
            </div>
        </div>
            </>
    )
}

export default Order
