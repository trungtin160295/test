import {Row,Col } from 'react-bootstrap';
import { useState ,useEffect} from 'react';
import { useSelector ,useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import cartSlice from "../redux/slices/cartSlice";


 export default function CartProductDetal({product}){
    console.log(product);
    const dispatch =useDispatch()
    const [quantity, setQuantity] = useState(product.quantity)
    const [color, setColor] = useState(product.color)
    const [size, setSize] = useState(product.size)
    const [del, setDel] = useState(false)
    

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }     
        }
   const deleteProduct = () => {
        (dispatch(
            cartSlice.actions.deleteProduct({
              id:product.id,
              quantity: quantity
            })))
     }
        
            
        
    useEffect(() => {
        (dispatch(
            cartSlice.actions.updateProduct({
              color: color,
              size: size,
              quantity: quantity,                        
              id:product.id,
              product:product.product,                

            })))
        
    },[quantity,color,size])

  
    
    return( 
         product.id &&
         
            <Row className='product-cart-detail'>
               
                <Col xs={5}  sm= {5} md={6}  lg={5}  xl={5} xxl={4}  className='product-img'>
                    <img src={product.product.linkImages[1]} alt={product.product.ductName} />
                <Link to={`/product/${product.product.id}`}> </Link>
                </Col>
                <Col xs={7}  sm= {7} md={6}  lg={7}  xl={7} xxl={8} className='product-detail-right'>
                    <div className='product-detail-top'>
                        <div className='product-detail-text'>
                        <Link to={`/product/${product.product.id}`}>
                            <div className='product-detail-name'>
                                
                                {product.product.ductName}
                            </div>
                        </Link>
                        
                        <button className='button-delete' onClick={deleteProduct}>X</button>

                        </div>
                        
                        <div className='product-detail-selected'>
                            <i>{color} / {size}</i> 
                        </div>
                    </div>
                    <div className='product-detail-bottom'>
                        <div className='select-color-size'>
                            <select
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className='select'
                            >
                                {product.product.listColor.map((option) => (
                                <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                            <select
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                className='select'
                            >
                                {product.product.listSize.map((option) => (
                                <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div className='quantity-price'>
                            <div className="product-quantity-change">
                                <button className="product-quantity-down" onClick={() => updateQuantity('minus')}>
                                -
                                </button>
                                <span className="quantity-buy">
                                    {quantity}
                                </span>
                                <button className="product-quantity-up" onClick={() => updateQuantity('plus')}>
                                    +
                                </button>

                            </div>
                            <div className='price'>
                                <span>{Math.round(product.product.price*(1-(product.product.discount/100))*quantity)}.000 đ</span>
                                {product.product.discount&&<i><strike>{product.product.price*quantity}.000 đ</strike> </i>}
                            </div>
                        </div>
                       
                        
                       
                    </div>
                    
                </Col>
        </Row>

         
        
    )
}