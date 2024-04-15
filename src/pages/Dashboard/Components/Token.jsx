const Token = () => {
    return (
        <section className=" col-span-5 p-7">
            <section>
                <h1 className="font-bold text-2xl">My Token</h1>
                <p>Take an overview tour of your tokens</p>
            </section>
            <section className=" mt-6">
                <div className="flex justify-between">
                    <h3 className="font-bold text-lg">My recent tokens</h3>

                    <div className="flex items-center justify-center gap-3 border-2 rounded-lg  p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M10.8337 7.49999C10.8337 7.03975 10.4606 6.66666 10.0003 6.66666C9.54009 6.66666 9.16699 7.03975 9.16699 7.49999V9.16666H7.50033C7.04009 9.16666 6.66699 9.53975 6.66699 9.99999C6.66699 10.4602 7.04009 10.8333 7.50033 10.8333H9.16699V12.5C9.16699 12.9602 9.54009 13.3333 10.0003 13.3333C10.4606 13.3333 10.8337 12.9602 10.8337 12.5V10.8333H12.5003C12.9606 10.8333 13.3337 10.4602 13.3337 9.99999C13.3337 9.53975 12.9606 9.16666 12.5003 9.16666H10.8337V7.49999Z"
                                fill="#344054"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.0003 1.66666C5.39795 1.66666 1.66699 5.39762 1.66699 9.99999C1.66699 14.6024 5.39795 18.3333 10.0003 18.3333C14.6027 18.3333 18.3337 14.6024 18.3337 9.99999C18.3337 5.39762 14.6027 1.66666 10.0003 1.66666ZM3.33366 9.99999C3.33366 6.31809 6.31843 3.33332 10.0003 3.33332C13.6822 3.33332 16.667 6.31809 16.667 9.99999C16.667 13.6819 13.6822 16.6667 10.0003 16.6667C6.31843 16.6667 3.33366 13.6819 3.33366 9.99999Z"
                                fill="#344054"
                            />
                        </svg>
                        <p className="text-sm">Buy Token</p>
                    </div>
                </div>
            </section>
        </section>
    );
};
export default Token;
