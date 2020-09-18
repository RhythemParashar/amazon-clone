import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../StateProvider';
import { auth } from '../../../firebase';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li {
        padding: 18px 10px;
    }
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0d2538;
        position: fixed;
        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
            color: #fff;
        }
    }
`;

const RightNav = ({ open }) => {
    const [{ user, basket }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };
    return (
        <Ul open={open}>
            <li>
                <div className='header__search'>
                    <form className='header__searchForm'>
                        <input className='header__searchInput' type='text' />

                        <SearchIcon className='header__searchIcon' />
                    </form>
                </div>
            </li>
            <li>
                <Link to={!user && '/login'}>
                    <div
                        onClick={handleAuthentication}
                        className='header__option'
                    >
                        <span className='header__optionLineOne'>
                            {user ? `Hello ${user.email}` : 'Hello Guest'}
                        </span>

                        <span className='header__optionLineTwo'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
            </li>
            <li>
                <Link to='/orders'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
            </li>
        </Ul>
    );
};

export default RightNav;
