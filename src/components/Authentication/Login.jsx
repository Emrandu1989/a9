import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Helmet, } from 'react-helmet-async';

const Login = () => {
    const {googleLogin,gitHubLogin} = useContext(AuthContext);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null)
     const [showAll, setShowAll] = useState(false)
    const {login} = useContext(AuthContext)
    const navigate =  useNavigate()

    const handleLogin = (e) =>{
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email,password)
          login(email,password)
          .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess(toast("User Login successfully"))
            setTimeout(()=>{
                 navigate('/')
            },5000)
          })
          .catch(error=>{
            console.log(error)
          })
    }

    const handleGoogleSignUp = () =>{
        googleLogin()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess(toast("User Login Successfully"))
            setTimeout(()=>{
                navigate('/')
           },5000)
        })
        .catch(error=>{
            console.log(error)
            setError(toast(error.message))
        })
    }
    const handleGitHubSignUp = () =>{
        gitHubLogin()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess(toast("User Login Successfully"))
            setTimeout(()=>{
                navigate('/')
           },5000)
        })
        .catch(error=>{
            console.log(error)
            setError(toast(error.message))
        })
    }

    return (
        <>

           <Helmet>
        <title>Regal || Login</title>
                </Helmet>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-2/4 flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Please Login</h1>

                </div>
                <div className="card  w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control  relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showAll ? "text" : "password"}
                             placeholder="password"
                              name="password" className="input input-bordered" required />

                            <Link className="absolute top-12 right-5 text-2xl" onClick={()=> setShowAll(!showAll) }> {showAll ? <FaEyeSlash />  :<FaEye />}  </Link>

                        </div>
                    
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-center text-xl py-2"> New to this site Please <Link className=" text-xl btn-link" to={"/register"}>Register</Link> </p>
                           <div className="text-center">
                                <p className="text-2xl font-bold">Or</p>
                           </div>

                        <div className="flex justify-center my-1.5">
                             <button onClick={handleGoogleSignUp} className="btn text-2xl"><FaGoogle /></button>
                             <button onClick={handleGitHubSignUp} className="btn text-2xl"><FaGithub /></button>
                        </div>

                    </form>

                    
                      
                </div>
            </div>
        </div>
        <ToastContainer />
    </>
    );
};

export default Login;