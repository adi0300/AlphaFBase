import {useEffect} from 'react';
import Axios from 'axios';
const Logout = () => {
    useEffect( () => {
       try{
          const res = Axios.get("http://localhost:3001/api/out/logout");
          if(res){
           localStorage.removeItem("token");
           localStorage.removeItem("username");
           window.location = "/login";
          }
       }catch(err){
           console.log(err.message);
       }
    });
    return(
        <div>Logout</div>
    );
}

export default Logout;