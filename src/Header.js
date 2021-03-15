import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header() {
    let user =  JSON.parse(localStorage.getItem('user-info'))
console.warn(user);

return
(
    <div>
        <Navbar bg='' variant=''>
            <Navbar.Brand href='#home'>MyFlix</Navbar.Brand>
            <Nav className="mr-auto nav_bar_wrapper">
                {
                    localStorage.getItem('user-info') ?
                    <>
                    <Link to="/login" >Login </Link>
                    <Link to="/signup">Sign-up</Link>

                        
                    </>
                    :
                    <>
                        <Link to="/watchlist" >Watch-List</Link>
                        <Link to="/completedList" >Completed-List</Link>
                    </>
                }
            </Nav>

            <Nav>
                <NavDropdown title="User Name">
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
                
            </Nav>
            </Navbar>



     </div> 
)
}

export default Header;