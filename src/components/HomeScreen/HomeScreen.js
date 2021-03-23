import React from "react";
import Lottie from 'react-lottie';
import animationData from '../../lotties/homescreen.json';

const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <section>
                <div className="w-full bg-center h-screen bg-transparent">
                    <div className="flex items-center justify-center h-full w-full">
                        <section className="text-gray-600 body-font mt-56 md:mt-0">
                            <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                                    <div className="hidden sm:block md:block lg:block 2xl:block">
                                        <Lottie
                                            options={defaultOptions}
                                            height={300}
                                            width={400}
                                        />
                                    </div>
                                    <div className="sm:hidden md:hidden lg:hidden 2xl:hidden">
                                        <Lottie
                                            options={defaultOptions}
                                            height={170}
                                            width={240}
                                        />
                                    </div>
                                </div>
                                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 mt-10 sm:mt-0 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                    <h1 className="tracking-tight font-extrabold sm:text-4xl text-3xl md:text-5xl mb-1 text-indigo-700 tracking-wider">Web Contact</h1>
                                    <h1 className="tracking-tight sm:text-4xl text-md md:text-2xl mb-4 font-bold text-gray-400 tracking-widest">A basic sample data set of users.</h1>
                                    <p className="mb-2 md:mb-8 leading-relaxed text-sm sm:text-md text-gray-500 font-medium tracking-wider" >Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
                                    <p className="text-sm mt-2 text-gray-500 mb-8 w-full font-medium tracking-widest" >Neutra shabby chic ramps, viral fixie.</p>
                                    <div className="flex lg:flex-row md:flex-col">
                                        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                            </svg>
                                            <span className="ml-4 flex items-start flex-col leading-none">
                                                <span className="text-xs text-gray-600 mb-1" style={{ fontFamily: 'Luckiest Guy' }}>GET STARTED</span>
                                                <span className="title-font font-medium" style={{ fontFamily: 'Luckiest Guy' }}>Scroll Down</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;
