import Button from '../button/Button'
import './Product.css'

export default function Product({ title, img_url, description, price, onClick }) {
    return (
        <div className='card-product'>
            <div className='img-card-product'>
                <img src={img_url} alt={description} ></img>
            </div>
            <div className='body-card'>
                <div className='title-container'>
                    <h4 className='title-card-product'>{title.slice(0, 67)}...</h4>
                </div>
                <div className='price-container'>
                    <p>{Number.parseFloat(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>

                <Button 
                    content={'Adicionar ao carrinho'}
                    type={'button'}
                    fontSize={20}
                    onClick={onClick}
                />
            </div>
        </div>
    )
}