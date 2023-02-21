import React,{useState,Fragment} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList.js';
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler =(username,userage)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name:username, age:userage, id:Math.random().toString()}];
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
