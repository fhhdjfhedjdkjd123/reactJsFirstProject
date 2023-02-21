import React,{useState,useRef} from 'react';
import Card from '../UI/Card.js';
import classes from './AddUser.module.css';
import Button from '../UI/Button.js';
import ErrorModel from '../UI/ErrorModel.js';
import Wrapper from '../Helpers/Wrapper.js';
const AddUser=(props)=>{
    const collegeInputRef=useRef();

    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState();

    const onAddUserHandler =(event)=>{
        event.preventDefault();
        const enteredCollege = collegeInputRef.current.value;
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:"Invalid input",
                message:"Please enter a valid name and age"
            })
            return;
        }
        if(+enteredAge<1){
            setError({
                title:"Invalid age",
                message:"Please enter a valid  age (>0)"
            })

            return;
        }
        props.onAddUser(enteredUsername,enteredAge,enteredCollege);

        //console.log(enteredCollege);
        setEnteredUsername('');
        setEnteredAge('');
        collegeInputRef.current.value='';
    }
    const usernameChange=(event)=>{
        setEnteredUsername(event.target.value);

    }
    const ageChange=(event)=>{
        setEnteredAge(event.target.value);
    }
    const errorHandler=()=>{
        setError(null);
    }
    return(
        <Wrapper>
        {error &&(
            <ErrorModel 
                title={error.title} 
                message={error.message} 
                onConfirm={errorHandler}>
            </ErrorModel>
        )}
        <Card className={classes.input}>
         <form onSubmit={onAddUserHandler}>
            <label htmlFor='username'>Username:</label> 
            <input id='username' type="text" value={enteredUsername} onChange={usernameChange}/>
            <label htmlFor='age'>Age(years):</label>
            <input id='age' type="number" value={enteredAge} onChange={ageChange}/>
            <label htmlFor="college">College name:</label>
            <input id="college" type="text" ref={collegeInputRef}/>
            <Button type="submit">Add User</Button>
         </form>
        </Card>
        </Wrapper>
    );
}
export default AddUser;