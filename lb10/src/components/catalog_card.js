import '../styles/globalStyles.css'
import {useState} from "react";
import ModalProduct from "./modalProduct";

const CatalogCard = ({ProductID, Name_product, Country_of_origin, Impact, Taste, Thumbnail, Price}) => {
  const [open, setOpen] = useState(false)
  const data = {
    ProductID, Name_product, Country_of_origin, Impact, Taste, Thumbnail, Price
  }
  const onClose = () =>
    setOpen(false)
  return (
      <>
        <ModalProduct isOpen={open} onClose={onClose} data={data}/>
    <div className='product-card'>
      <div className='product-img' style={{maxWidth: '100%'}}>
        <img width={"100%"} src={Thumbnail} style={{borderRadius: '10px'}}/>
      </div>
      <div className='product-body'>
        <hr/>
        <h1 className='product-title'>{Name_product}</h1>
        <hr/>
        <div className='product-description'>
          <div>
            Описание:
            <div style={{color: 'rgba(0,0,0,.5)'}}>Страна производства: <span style={{color: 'rgba(0,0,0,1)'}}>{data.Country_of_origin}</span></div>
            <div style={{color: 'rgba(0,0,0,.5)'}}>Воздействие: <span style={{color: 'rgba(0,0,0,1)'}}>{data.Impact}</span></div>
            <div style={{color: 'rgba(0,0,0,.5)'}}>Вкус: <span style={{color: 'rgba(0,0,0,1)'}}>{data.Taste}</span></div>
          </div>
        </div>
        <hr/>
        <div className='product-price-buy'>
          <div style={{fontSize: '1.5rem'}}>
            {Price} ₽
          </div>
          <div>
            <button className={'auth-button'} style={{width: 'auto', borderRadius: '50px', padding: '0.5rem 3rem 0.5rem 3rem', margin: '0', fontSize: '1rem'}} onClick={() => {
              setOpen(true)
            }}>
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
      </>
  )
}

export default CatalogCard;
