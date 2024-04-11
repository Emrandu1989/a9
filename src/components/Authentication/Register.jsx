import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Register = () => {
    const {createUser,googleLogin} = useContext(AuthContext);
    const handleRegister = (e) =>{
         e.preventDefault();
         const form = e.target;
         const name = form.name.value;
         const email = form.email.value;
         const password = form.password.value;
         const imageUrl = form.ImageUrl.value;
         console.log(name,email,password,imageUrl);
         createUser(email,password,name,imageUrl)
         .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)

            updateProfile(loggedUser,{
                displayName: name,
                photoURL: imageUrl
            })
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
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-2/4 flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Please Register</h1>

                    </div>
                    <div className="card  w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister } className="card-body">
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

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
                                 <button onClick={handleGoogleSignUp} className="btn text-2xl"><FaGithub /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;