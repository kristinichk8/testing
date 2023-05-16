import {Button, Modal, ModalTitle} from "react-bootstrap";
import {useNavigate} from "react-router";

const ModalProduct = ({isOpen, onClose, data}) => {
    const navigate = useNavigate()
    return (
        <Modal show={isOpen} onBackdropClick={() => onClose()} onHide={() => onClose()} centered={true}>
            <Modal.Header>
                {data.Name_product}
            </Modal.Header>
            <Modal.Body>
                 <div className={'modal-flex'}>
                     <div style={{maxWidth: '50%', paddingRight: '1rem'}}>
                         <img width={'100%'} src={data.Thumbnail}/>
                     </div>
                     <div>
                         Описание:
                         <div style={{color: 'rgba(0,0,0,.5)'}}>Страна производства: <span style={{color: 'rgba(0,0,0,1)'}}>{data.Country_of_origin}</span></div>
                         <div style={{color: 'rgba(0,0,0,.5)'}}>Воздействие: <span style={{color: 'rgba(0,0,0,1)'}}>{data.Impact}</span></div>
                         <div style={{color: 'rgba(0,0,0,.5)'}}>Вкус: <span style={{color: 'rgba(0,0,0,1)'}}>{data.Taste}</span></div>
                     </div>
                 </div>
                <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '1rem'}}>
                    <div>
                        Цена
                    </div>
                    <div>
                        {data.Price} ₽
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'success'} onClick={() => {
                    onClose()
                    navigate(`/order/${data.ProductID}`)
                }}>
                    Заказать
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalProduct
