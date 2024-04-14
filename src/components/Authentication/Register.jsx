import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Helmet, } from 'react-helmet-async';

const Register = () => {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null)
    const [showAll, setShowAll] = useState(false)
    const { createUser, googleLogin, gitHubLogin, loading } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imageUrl = form.ImageUrl.value;
        console.log(name, email, password, imageUrl);

        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            setError(toast("password must have atleaset 6 character one upperCase and one lowerCase"))
            return
        }
        createUser(email, password, name, imageUrl)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess(toast("User Created Successfully"))
                 
                // update profile
                   updateProfile(result.user, {
                        displayName: name,
                        photoURL:imageUrl
                   })
                   .then(()=>{
                      console.log("profile Updated")
                   })
                   .catch(error=>{
                      console.log(error)
                   })

                setTimeout(() => {
                    navigate('/')
                }, 4000)

                updateProfile(loggedUser, {
                    displayName: name,
                    photoURL: imageUrl
                })
            })
            .catch(error => {
                console.log(error)
                setError(toast(error.message))
            })

    }

    const handleGoogleSignUp = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess(toast("User Login Successfully"))
                setTimeout(() => {
                    navigate('/')
                }, 5000)

            })
            .catch(error => {
                console.log(error)
                setError(toast(error.message))
            })
    }
    const handleGitHubSignUp = () => {
        gitHubLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess(toast("User Login Successfully"))
                setTimeout(() => {
                    navigate('/')
                }, 5000)

            })
            .catch(error => {
                console.log(error)
                setError(toast(error.message))
            })
    }


    return (
        <>
          <Helmet>
        <title>Regal || Register</title>
                </Helmet>

                 {
                    loading ? <div className="flex justify-center items-center"> <span className="loading text-orange-400 loading-bars loading-lg"></span>  </div> 
                    : <>
                       <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full md:w-2/4 flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Please Register</h1>

                    </div>
                    <div className="card  w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
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

                                <Link className="absolute top-12 right-5 text-2xl" onClick={() => setShowAll(!showAll)}> {showAll ? <FaEyeSlash /> : <FaEye />}  </Link>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ImageUrl</span>
                                </label>
                                <input type="text" placeholder="ImageUrl" name="ImageUrl" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="text-center text-xl py-2"> Already Have an account Please <Link className=" text-xl btn-link" to={"/login"}>Login</Link> </p>
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
                 }
                   
        </>
    );
};

export default Register;