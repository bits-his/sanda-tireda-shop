import './index.css'
import SignUp from "./SignUp";
import Login from "./LogIn";

export default function AuthModal({type, setType, toggle}){
    
    return (<>
    {type==='Login'?<Login setType={setType} toggle={toggle}/>:<SignUp setType={setType} toggle={toggle} />}
    </>)
}