import React, { forwardRef, useState, useRef, useImperativeHandle } from "react";
import ReactMapGL from "react-map-gl";
import { useDispatchMap } from "./hooks/mapHook";
import { MarkerList } from "./Marker/MarkerList";
import './usershortdetails.css';
import MapDialog from '../MapDialog/MapDialog.js';
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

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
export const UserShortDetails = () => {
    const childRef = useRef();
    const classes = useStyles();

    const [userContacts, setUserContacts] = useState([]);

    const handleDataChange = () => {
        console.log('Mouse Enter...');
    }

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
            <div class="container px-5 sm:mt-60 mx-auto">
                <div class="flex flex-col text-left w-full">
                    <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                    <h1 class="sm:text-3xl tracking-tight font-extrabold text-left text-2xl title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1>
                    <p class="lg:w-2/3 text-left leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
            </div>
            <section class="text-gray-600 body-font">
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-10 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            {
                                userContacts.map((el, index) => {
                                    return (
                                        <div key={index} class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                            <div class="h-full flex items-center bg-gray-700 border-gray-600 shadow-xl border p-3 pb-1 rounded-lg">
                                                <div className="ring-2 ring-green-500 rounded-full mr-3">
                                                    <Avatar className={classes.orange}>{el.name.substring(0, 2)}</Avatar>
                                                </div>
                                                <div className="flex flex-row justify-between space-x-4">
                                                    <div class="flex-grow w-36">
                                                        <h2 class="text-yellow-400 title-font font-medium">{el.name}</h2>
                                                        <p class="text-gray-200 text-xs">{el.email}</p>
                                                        <div className="sm:hidden flex flex-row justify-between space-x-2 mt-4 cursor-pointer" onClick={() => childRef.current.handleModalOpen(el,true)}>
                                                            <p class="text-green-500 text-xs font-bold">View Map</p>
                                                        </div>
                                                    </div>
                                                    <div class="hidden sm:block flex-grow">
                                                        <h2 class="text-gray-100 title-font font-medium">{el.username}</h2>
                                                        <p class="text-gray-200 text-xs">{el.phone}</p>
                                                        <div className="flex flex-row justify-between float-right space-x-2 mt-4 cursor-pointer" onClick={() => childRef.current.handleModalOpen(el,false)}>
                                                            <p class="text-green-500 text-xs font-bold">View Map</p>
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
                </section>
                <MapDialog ref={childRef} />
            </section>
        </React.Fragment>
    );
};

export default UserShortDetails;
