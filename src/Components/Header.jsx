import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const Header = () => {

    const navigate = useNavigate()
    const {cart}  = useSelector((store) => store);
    // console.log(cart);

    function handleLogout() {
        localStorage.removeItem("token")
        toast("Logged out" , { type: "info"});
        navigate("/login")
    }
  return (
    <header className="text-bg-primary shadow sticky-top  py-3">
        <nav className="container d-flex align-items-center justify-content-between">
            <Link className="text-warning text-decoration-none fs-2" to="/" >Market</Link>
            <ul className="list-unstyled d-flex align-items-center gap-3 m-0">
                <li><Link className="btn btn-primary fs-4" to="/cart"><i className="fa-solid fa-cart-shopping"></i>
                 <span className="badge text-bg-danger ms-2">{cart.items.length}</span>
                </Link></li>
                <li><button onClick={handleLogout}  className='btn  fs-4 btn-primary'> <i className="fa-solid fa-arrow-right-from-bracket"></i></button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
