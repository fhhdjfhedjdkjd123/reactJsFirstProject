import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import Button from './Button.js';
import classes from './ErrorModel.module.css';
const BackDrop =(props)=>{
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}
const ModelOverlay=(props)=>{
    return(
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onConfirm={props.onConfirm}>Okey</Button>
            </footer>
        </Card>
    );
};
const ErrorModel=(props)=>{
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
               <BackDrop onConfirm={props.onConfirm}/>,
               document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModelOverlay 
                    title={props.title} 
                    message={props.message} 
                    onClick={props.onConfirm}
                />,
                document.getElementById("overlay-root")
            )}
        </React.Fragment>
    )
}
export default ErrorModel;