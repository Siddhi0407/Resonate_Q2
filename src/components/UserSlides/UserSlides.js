import React, { useState } from 'react';
import EmblaCarousel from "embla-carousel";
import { setupPrevNextBtns, disablePrevNextBtns } from "./js/prevAndNextButtons";
import { setupDotBtns, generateDotBtns, selectDotBtn } from "./js/dotButtons";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import "./css/base.css";
import "./css/reset.css";
import "./css/embla.css";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));

const UserSlides = () => {
    const classes = useStyles();
    const [userContacts, setUserContacts] = useState([]);

    React.useEffect(() => {
        setTimeout(() => {
            const setupEmblaCarousel = (emblaNode, options) => {
                const viewPort = emblaNode.querySelector(".embla__viewport");
                const prevBtn = emblaNode.querySelector(".embla__button--prev");
                const nextBtn = emblaNode.querySelector(".embla__button--next");
                const dots = emblaNode.querySelector(".embla__dots");
                const embla = EmblaCarousel(viewPort, options);
                const dotsArray = generateDotBtns(dots, embla);
                const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
                const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

                setupPrevNextBtns(prevBtn, nextBtn, embla);
                setupDotBtns(dotsArray, embla);

                embla.on("select", setSelectedDotBtn);
                embla.on("select", disablePrevAndNextBtns);
                embla.on("init", setSelectedDotBtn);
                embla.on("init", disablePrevAndNextBtns);
            };

            const options = { loop: false };
            const emblaNodes = [].slice.call(document.querySelectorAll(".embla"));
            const emblaCarousels = emblaNodes.map(emblaNode =>
                setupEmblaCarousel(emblaNode, options)
            );
        }, 1500);

        fetchUserContact();
    }, []);

    const fetchUserContact = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            console.log('response', response.data);
            setUserContacts(response.data);
        }).catch((err) => {
            console.log('Error:', err);
        });
    }
    return (
        <React.Fragment>
            <section>
                <div class="container px-5 py-20 pb-0 mx-auto">
                    <div class="flex flex-col text-center w-full mb-2">
                        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">USER CONTACT SLIDES</h2>
                        <h1 class="sm:text-3xl text-2xl tracking-tight font-extrabold title-font mb-4 text-white">User Contacts</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">Blow are the few slides of user contact details.Slide left to view each user contact card.</p>
                    </div>
                </div>
                <div className="carousel">
                    <div className="embla">
                        <div className="embla__viewport">
                            <div className="embla__container">
                                {
                                    userContacts.map((el, index) => {
                                        return (
                                            <div key={index} className="embla__slide bg-white rounded-xl mr-5">
                                                <div className="embla__slide__inner">
                                                    <div class="p-2 w-full mt-1">
                                                        <div class="h-full flex pb-1 items-center rounded-lg">
                                                            <div className="ring-2 ring-green-500 rounded-full mr-3">
                                                                <Avatar className={classes.orange}>{el.name.substring(0, 2)}</Avatar>
                                                            </div>
                                                            <div className="flex flex-row justify-between space-x-3">
                                                                <div class="flex-grow">
                                                                    <h2 class="text-gray-900 title-font font-medium">{el.name}</h2>
                                                                    <p class="text-gray-500">{el.email}</p>
                                                                </div>
                                                                <div class="flex-grow">
                                                                    <h2 class="text-gray-900 title-font font-medium">#{el.username}</h2>
                                                                    <p class="text-gray-500">#{el.id}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="w-full">
                                                        <div class="h-full flex items-center bg-indigo-50 border-gray-200 border-b-0 px-4 py-2 space-x-4">
                                                            <div class="flex-grow w-full truncate">
                                                                <h2 class="text-gray-900 text-left truncate text-xs title-font font-medium">Street</h2>
                                                                <p class="text-gray-500 text-left truncate text-sm">{el.address.street}</p>
                                                            </div>
                                                            <div class="flex-grow w-full truncate">
                                                                <h2 class="text-gray-900 text-left truncate text-xs title-font font-medium">Suite</h2>
                                                                <p class="text-gray-500 text-left truncate text-sm">{el.address.suite}</p>
                                                            </div>
                                                            <div class="flex-grow w-full truncate">
                                                                <h2 class="text-gray-900 text-xs text-left title-font font-medium">City</h2>
                                                                <p class="text-gray-500 text-sm text-left">{el.address.city}</p>
                                                            </div>
                                                        </div>
                                                        <div class="h-full flex items-center space-x-4 bg-indigo-50 px-4 py-2 pt-0">
                                                            <div class="flex-grow w-full">
                                                                <h2 class="text-gray-900 text-xs title-font font-medium">Zip Code</h2>
                                                                <p class="text-gray-500 text-sm">{el.address.zipcode}</p>
                                                            </div>
                                                            <div class="flex-grow w-full">
                                                                <h2 class="text-gray-900 text-xs title-font font-medium">Phone</h2>
                                                                <p class="text-gray-500 text-sm">{el.phone}</p>
                                                            </div>
                                                            <div class="flex-grow w-full">
                                                                <h2 class="text-gray-900 text-xs title-font font-medium">Website</h2>
                                                                <p class="text-gray-500 text-sm">{el.website}</p>
                                                            </div>
                                                        </div>
                                                        <div class="h-full pt-2 flex items-center space-x-4 bg-white px-4 py-2 pb-3 rounded-xl">
                                                            <div class="flex-grow w-full">
                                                                <h2 class="text-gray-900 truncate text-xs title-font font-medium">Company</h2>
                                                                <p class="text-gray-500 truncate text-sm">{el.company.name}</p>
                                                            </div>
                                                            <div class="flex-grow w-full">
                                                                <h2 class="text-gray-900 truncate text-xs title-font font-medium">CatchPhrase</h2>
                                                                <p class="text-gray-500 truncate text-sm">{el.company.catchPhrase}</p>
                                                            </div>
                                                            <div class="flex-grow w-full">
                                                                <h2 class="text-gray-900 truncate text-xs title-font font-medium">Bs</h2>
                                                                <p class="text-gray-500 truncate text-sm">{el.company.bs}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="embla__dots"></div>

                        <button className="embla__button embla__button--prev" type="button">
                            <svg
                                className="embla__button__svg"
                                viewBox="137.718 -1.001 366.563 643.999"
                            >
                                <path
                                    d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
                                ></path>
                            </svg>
                        </button>
                        <button className="embla__button embla__button--next" type="button">
                            <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
                                <path
                                    d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default UserSlides;