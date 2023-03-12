import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
     // Showing=====>
     const [checktype, setChecktype] = useState("password");
     const handleshowhidepassword = (e)=>{
         const gettype= e.target.value;
         if (gettype==="password") {
             setChecktype("text");
         }else{
             setChecktype("password");
         }
     }
     ///Showing======>
 
 
 
 
     const navigate = useNavigate();
     useEffect(()=>{
         let token = localStorage.getItem("token")
         if(token) navigate("/")
     },[])
   
     async function handleLogin(e) {
         e.preventDefault();
         try {
             let res = await axios.post("https://reqres.in/api/login", values)
             if(res.status === 200){
                 toast("Login success",{type:"success"});
                 localStorage.setItem("token", res.data.token);
                 navigate("/")
             }
         } catch (error) {
             toast("Erorr", {type : "error", theme: "dark"});
             console.log(error);
         }finally{
             setValues({email:"",password:""})
         }   
     }
     const [values, setValues] = useState({ email: "", password:""})
 
     function handleInputChange(e){
         setValues(ov => ({...ov, [e.target.name]: e.target.value}))
     }
 
  return (
    <div className='min-vh-100 d-flex align-items-center justify-content-center text-bg-light'>
     <form onSubmit={handleLogin} className='shadow form bg-white w-50 p-3 '>
        <h1 className="d-3 text-center ">Login</h1>
        <div className="my-3">
            <label className='form-label' htmlFor="email">Your email</label>
            <input required onChange={handleInputChange} value={values.email} className='form-control' type="email" name='email' id="email" />   
        </div>
        <div className="my-3">
            <label className='form-label' htmlFor="password">Your password</label>
            <input required onChange={handleInputChange} value={values.password} min={4} className='form-control' type={checktype} name='password' id="password" /> 
            <button type="button" onClick={(e)=>handleshowhidepassword(e)} value={checktype} className="fa-solid show my-3  fa-eye-slash" ></button><small>Show password    </small>
        </div>
        <div className="mt-3">
            <button disabled={!values.email || !values.password} className='btn  btn-primary d-block fs-3 w-100'>Login</button>
        </div>
     </form>
    </div>
  )
}

export default Login
