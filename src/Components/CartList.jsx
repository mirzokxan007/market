import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartList = () => {
    const{items} = useSelector(s =>s.cart);
    const dispatch = useDispatch()
 
     function handleIncItem(id) {
         dispatch({type:"INC_ITEM_COUNT",payload:id})
         
     }
     function handleDecItem(id) {
         dispatch({type:"DEC_ITEM_COUNT",payload:id})
         
     }
     function handleRemoveItem(id) {
         dispatch({type:"REMOVE_CART",payload:id})
         
     }
 
  return (
    <section className='text-bg-light '>
    <div className="container py-3">
        <div className="d-flex justify-content-between">
            <h2 className='text-center'>Yor Card</h2>
            <span>{items.reduce((p,c)=> p + c.count * c.product.price ,0).toFixed(2)}</span>
        </div>

        {items.length === 0 && <div className='d-flex justify-content-center'><img src="/21.gif" alt="" /></div>}

        <ul className="list-group">
            {
                items.map(({ product:{image,title,description,id,price},count }) =>(
                    <li key={id} className="list-group-item row d-flex align-items-center">
                        <div className="col-1">
                            <img src={image} alt={title} className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                        <div className="col-md-1">
                            ${price}
                        </div>
                        <div className="col-md-1 mx-3 ">
                            <button disabled={count <= 1} onClick={() => handleDecItem(id)} className='btn btn-secondary'>-</button>
                            {count}
                            <button onClick={() => handleIncItem(id)} className='btn btn-secondary'>+</button>
                        </div>
                        <div className="col-md-1 mx-3">
                            ${price * count}
                        </div>
                        <div  className="col-md-1 mx-3">
                            <button onClick={() => handleRemoveItem(id)} className='btn-danger btn'><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </li>
                )
                )
            }
        </ul>
        <div className="d-flex justify-content-between my-3">
            <Link to="/" className="btn btn-outline-success"><i className=" mx-2 fa-solid fa-circle-chevron-left"></i>Back to Shopping</Link>
            <button disabled={items.length === 0} className="btn btn-success">Proceed to pay<i className=" mx-2 fa-solid fa-circle-chevron-right"></i></button>
        </div>
    </div>
</section>
)
}

export default CartList
