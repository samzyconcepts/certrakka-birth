import { Link } from "react-router-dom";
// Image
import noise from "../../assets/noise.png";
import overlay_line from "../../assets/bg-line.png";

function Login() {
    return (
        <main className={`bg-gradient-to-b from-[#7680B4] to-primary to-30% h-dvh relative z-10`}>
            {/* noise overlay */}
            <div
                className={`absolute bg-center bg-cover inset-0 z-0`}
                style={{ backgroundImage: `url(${noise})` }}></div>
            {/* main login content */}
            <div
                className="relative z-10 h-full bg-cover bg-center flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${overlay_line})` }}>
                <h1 className="text-3xl font-bold text-white">CertTrakka</h1>
                <div className="bg-white w-[498px] mt-8 px-7 py-8 rounded-lg">
                    <h3 className="text-4xl font-bold">Login to CertTrakka</h3>
                    <p className="leading-loose">
                        Don&apos;t have an account?{" "}
                        <Link to="/" className="text-primary">
                            Sign Up
                        </Link>
                    </p>

                    <form>
                        <label htmlFor="email" className="block mt-2">
                            Email Address
                            <input
                                className="input-style"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email address"
                            />
                        </label>
                        <label htmlFor="pwd" className="block mt-2">
                            Password
                            <input
                                className="input-style"
                                type="password"
                                name="pwd"
                                id="pwd"
                                placeholder="Enter your Password"
                            />
                        </label>

                        <Link
                            to="/forgot_password"
                            className="block text-primary text-right leading-loose">
                            Forgot Password?
                        </Link>
                        <button className="btn btn-primary mt-4">Login</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Login;
