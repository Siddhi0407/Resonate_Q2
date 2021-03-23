import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
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
                <div class="container px-5 mt-48 pb-0 mx-auto">
                    <div class="flex flex-col text-center w-full mb-2">
                        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">USER CONTACT SLIDES</h2>
                        <h1 class="sm:text-3xl text-2xl tracking-tight font-extrabold title-font mb-4 text-white">User Contacts</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">Blow are the few slides of user contact details.Slide left to view each user contact card.</p>
                    </div>
                </div>
                <div className="vertical-carousel mt-16 mx-auto w-full">
                    <div className="vertical__container h-screen overflow-auto">
                        {
                            userContacts.map((el, index) => {
                                return (
                                    <div key={index} className="bg-white rounded-xl mx-2 my-4">
                                        <div class="p-2 w-full mt-1">
                                            <div class="h-full flex pb-1 items-center rounded-lg">
                                                <div className="ring-2 ring-green-500 rounded-full mr-3">
                                                    <Avatar className={classes.orange}>{el.name.substring(0, 2)}</Avatar>
                                                </div>
                                                <div className="flex flex-row justify-between space-x-3">
                                                    <div class="flex-grow">
                                                        <h2 class="text-gray-900  w-24 truncate title-font font-medium">{el.name}</h2>
                                                        <p class="text-gray-500  w-24 truncate">{el.email}</p>
                                                    </div>
                                                    <div class="flex-grow">
                                                        <h2 class="text-gray-900 w-24 truncate title-font font-medium">#{el.username}</h2>
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
                                            </div>
                                            <div class="h-full flex items-center bg-indigo-50 border-gray-200 border-b-0 px-4 py-2 space-x-4">
                                                <div class="flex-grow w-full truncate">
                                                    <h2 class="text-gray-900 text-xs text-left title-font font-medium">City</h2>
                                                    <p class="text-gray-500 text-sm text-left">{el.address.city}</p>
                                                </div>
                                                <div class="flex-grow w-full">
                                                    <h2 class="text-gray-900 text-xs title-font font-medium">Website</h2>
                                                    <p class="text-gray-500 text-sm">{el.website}</p>
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
                                            </div>
                                            <div class="h-full pt-2 flex flex-col space-y-1 items-center bg-white px-4 py-2 pb-3 rounded-xl">
                                                <div class="flex-grow w-full">
                                                    <h2 class="text-gray-900 truncate text-xs title-font font-medium">Company</h2>
                                                    <p class="text-gray-500 truncate text-sm">{el.company.name}</p>
                                                </div>
                                                <div class="flex-grow w-full">
                                                    <h2 class="text-gray-900 truncate text-xs text-left title-font font-medium">CatchPhrase</h2>
                                                    <p class="text-gray-500 truncate text-sm">{el.company.catchPhrase}</p>
                                                </div>
                                                <div class="flex-grow w-full">
                                                    <h2 class="text-gray-900 truncate text-xs title-font font-medium">Bs</h2>
                                                    <p class="text-gray-500 truncate text-sm">{el.company.bs}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default UserSlides;