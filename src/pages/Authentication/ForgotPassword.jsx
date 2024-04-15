// Image
import noise from "../../assets/noise.png";
import overlay_line from "../../assets/bg-line.png";

const ForgotPassword = () => {
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
                    <h3 className="text-4xl font-bold">Reset password</h3>
                    <p className="my-4 text-gray-500">
                        Enter the email address connected to your CertTrakka account to reset your
                        password
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

                        <button className="btn btn-primary mt-4">Send reset link</button>
                    </form>
                </div>
            </div>
        </main>
    );
};
export default ForgotPassword;
