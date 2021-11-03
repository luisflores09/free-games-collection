import {Link} from 'react-router-dom';
import { logOut} from '../services/firebase';
import {StyledHeader} from '../styles';

const Header = (props) => {
    return (
        <StyledHeader>
            <Link class='homenav' to='/'>
                <h1>Free-Games-Collection</h1>
            </Link>
            <nav>
                <ul>
                    {props.user ?
                    <>
                        {/* <li>Welcome, {props.user.displayName} </li>
                        <li>
                            <img src={props.user.photoURL} alt={props.user.displayName} />
                        </li> */}
                        <li>
                            <Link to='/dashboard'>My Game Collection</Link>
                        </li>
                        <li onClick={logOut}>Logout</li>
                    </>
                        :<li>
                            <Link to='/login'>Login</Link>
                    </li>
                    }
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header;