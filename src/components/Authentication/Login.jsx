import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {login} = useContext(AuthContext)
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
          <p className="text-center text-xl py-2"> New To This site Please <Link className=" text-xl btn-link" to={"/register"}>Register</Link> </p>
      </form>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;