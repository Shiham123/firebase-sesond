import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/userContext';

const Login = () => {
  const signInContext = useContext(AppContext);
  const { signInUser } = signInContext;

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValue = event.target.email.value;
    const passwordValue = event.target.password.value;

    signInUser(emailValue, passwordValue)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                {/*  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                {/*  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {/*  */}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {/*  */}
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="form-control mt-6">
                  <Link to="/register">
                    <button className="btn btn-primary">Register</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
