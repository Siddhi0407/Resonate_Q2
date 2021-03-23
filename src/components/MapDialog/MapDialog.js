import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ReactMapGL from "react-map-gl";
import { useDispatchMap } from "../UserShortDetails/hooks/mapHook.js";
import { MarkerList } from "../UserShortDetails/Marker/MarkerList.js";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const CustomizedDialogs = forwardRef((props, ref) => {
    const [open, setOpen] = React.useState(false);
    const [usetLat, setUserLat] = React.useState(-33.920921);
    const [usetLong, setUserLong] = React.useState(150.923141);
    const [mapViewport, setMapViewport] = useState({
        height: "300px",
        width: "600px",
        longitude: usetLong,
        latitude: usetLat,
        zoom: 10
    });

    useImperativeHandle(ref, () => ({

        handleModalOpen(el, ismobile) {
            console.log('insdie modal', el);
            setMapViewport({
                height: ismobile ? "200px" : "300px",
                width: ismobile ? "300px" : "600px",
                longitude: Number(el.address.geo.lng),
                latitude: Number(el.address.geo.lat),
                zoom: 10
            });
            setUserLat(Number(el.address.geo.lat))
            setUserLong(Number(el.address.geo.lng))
            // mapDispatch({ type: "ADD_MARKER", payload: { marker: [usetLong, usetLat] } })
            setOpen(true);
        }
    }));
    const mapDispatch = useDispatchMap();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        mapDispatch({ type: "ADD_MARKER", payload: { marker: [usetLong, usetLat] } })
    }, [usetLong]);

    return (
        <div>
            <Dialog maxWidth="xl" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    User Location <div><span className="sm:text-sm text-xs font-bold">latitude: {usetLat}</span>/<span className="sm:text-sm text-xs font-bold">longitude: {usetLong}</span></div>
                </DialogTitle>
                <DialogContent dividers className="w-full">
                    <ReactMapGL
                        className="rounded-lg"
                        {...mapViewport}
                        mapboxApiAccessToken="pk.eyJ1IjoiZXJuZWJ1dGEiLCJhIjoiY2s2bDVwYTRlMGFwdDNncGE0ZWdjaWZzMCJ9.2PppNmYQsYZ8HDSjEGwjCA"
                        mapStyle="mapbox://styles/ernebuta/ck6l5q6me1dmn1ip74713pndm"
                        onViewportChange={setMapViewport}
                    >
                        {console.log("redraw")}
                        <MarkerList />
                    </ReactMapGL>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});

export default CustomizedDialogs;
