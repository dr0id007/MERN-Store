import React , {useState} from 'react'
import { Navbar , Form , Nav , FormControl , Button } from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'
import { VscSignOut } from 'react-icons/vsc'
import { RiAccountCircleLine } from 'react-icons/ri'

const NavbarComp = (props) => {

    const [visible, setVisible] = useState(false)
    const [isSidebarOpen , setIsSidebarOpen] = useState(false)
    const auth = useSelector(state => state.auth.auth)
    const handleLogout = () => {
        localStorage.removeItem('auth-token')
        window.location.reload()
    }

    return (
        <>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header" >
                <NavLink className="navbar-brand" to={'/'}>Brand Logo</NavLink>
                </div>
                <ul className="nav navbar-nav navbar-right" style={{display: 'flex' , flexDirection: 'row' , marginRight: '20px' , marginTop: '2px'}}>
                <StyleLi><Btn><NavLink to={'/'} ><span className="glyphicon glyphicon-user"></span>Brands</NavLink></Btn></StyleLi>
                {auth ?   
                    <>
                    <StyleLi><Btn><NavLink to={'/account'} style={{margin: 'auto'}} to={'/account'}><span className="glyphicon glyphicon-log-in"></span> Account</NavLink></Btn></StyleLi>
                    <StyleLi><Btn onClick={handleLogout} ><span className="glyphicon glyphicon-log-in"></span> Logout</Btn></StyleLi>
                    </>
                    :<>
                    <StyleLi><Btn><NavLink to={'/login'} ><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></Btn></StyleLi>
                    </>
                }
                    <StyleLi><Btn><NavLink to={'/order'} ><FiShoppingCart style={{verticalAlign: 'sub'}} /> Cart</NavLink></Btn></StyleLi>
                </ul>
            </div>
            </nav>  
    </>
    )
}

const StyleLi = styled.li`
    margin: 10px;
`;

const Btn = styled.button`
    background: transparent;
    border: none;
    // margin: 0px;
    // padding: 0px;  
    color: inherit;
    outline: none;
    outline: 0;
    font-size: 16px;

    &:hover , &::selection , &:focus   {
        background: transparent;
        border: none;
        // margin: 0px;
        // padding: 0px; 
        color: inherit;
        // text-decoration: underline; 
        outline: none;
        outline: 0;
    }
`;

export default NavbarComp