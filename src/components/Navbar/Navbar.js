
import { Button } from 'bootstrap';
import { NavItem } from 'reactstrap';
// import Logout from './Logout/Logout';



const Navbar =(props) => {
    console.log(props); 

    return (
       
            <NavItem>
                <Button onClick={props.clickLogout}>Logout</Button> 
            </NavItem>
        
    );
}

export default Navbar;
