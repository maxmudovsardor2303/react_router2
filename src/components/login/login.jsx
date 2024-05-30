import { useState } from "react"
import "./login.css"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const [form, setForm] = useState({})
    const navigate = useNavigate()
    const handleChange=(event)=>{
        const {value, name} = event.target
        setForm({...form, [name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        const {usarname, password} = form
        if(usarname === "admin" && password === "123"){
            navigate("/cars")
        }else{
            alert('404')
        }
    }
  return (
    <div>
      <div className="container">
        <div className="row mt-2">
            <div className="col-md-6 offset-3">
               <div className="card">
                <div className="card-header">
                    <h1 className="text-center">Login</h1>
                </div>
                <div className="card-body">
                <form id="submit" onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" placeholder="usarname" className="form-control my-2" name="usarname"/>
                    <input onChange={handleChange} type="password" placeholder="password" className="form-control my-2" name="password"/>
                </form>
                </div>
                <div className="card-footer">
                    <button type="submit" form="submit" className="btn btn-success offset-5">Login</button>
                </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login

