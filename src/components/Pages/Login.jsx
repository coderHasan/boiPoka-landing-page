import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { handleGoogle, setUser, handleUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleWithGoogle = () => {
    handleGoogle().then((user) => {
      const users = user.user;
      setUser(users);
    });
  };
  // SignIn User with email
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    handleUser(email, password)
      .then((user) => {
        Swal.fire({
          title: "Drag me!",
          icon: "success",
          draggable: true,
        });
        setUser(user.user);
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: `<a href="#">Why do I have this issue?</a> ${err.message}`,
        });
      });
  };
  return (
    <div className="container mx-auto px-3 md:px-5">
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-[400px] shrink-0 shadow-2xl">
              <div className="text-center mt-5 px-5">
                <button
                  onClick={handleWithGoogle}
                  className="btn w-full bg-sky-400 hover:bg-sky-400 text-lg font-semibold text-white "
                >
                  <span className="">
                    <FaGoogle size={28} />
                  </span>
                  Cotinue with Google
                </button>
              </div>
              <div className="divider">OR</div>
              <form onSubmit={handleSubmit} className="card-body pt-0">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>

                  <p className="mt-5">
                    You have a new this web site please{" "}
                    <Link
                      to="/register"
                      className="font-semibold text-[crimson]"
                    >
                      Register!
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
