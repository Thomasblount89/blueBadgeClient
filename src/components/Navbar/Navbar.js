
import Logout from './Logout/Logout';



const Navbar =(props) => {
    console.log(props); 

    return (
        <div>
            <navbar>
                <Logout clearLocalStorage={props.clearLocalStorage} />
            </navbar>
        </div>
    );
}

export default Navbar;
