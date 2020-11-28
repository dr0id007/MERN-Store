import React , {useState} from 'react'
import { Navbar , Form , Nav , FormControl , Button } from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'
import { VscSignOut } from 'react-icons/vsc'
import { RiAccountCircleLine } from 'react-icons/ri'
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
  } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const NavbarComp = (props) => {

    const [visible, setVisible] = useState(false)
    const [isSidebarOpen , setIsSidebarOpen] = useState(false)
    const auth = useSelector(state => state.auth)
    const handleLogout = () => {
        localStorage.removeItem('auth-token')
        window.location.reload()
    }

    const handleCart = () => {

    }

    const handleSidebar = () => {
        setIsSidebarOpen(true)
    }

    return (
        <>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header" style={{height: '20px'}}>
                <NavLink className="navbar-brand" style={{height: '20px'}} to={'/'}>Brand Logo</NavLink>
                </div>
                <ul className="nav navbar-nav navbar-right" style={{display: 'flex' , flexDirection: 'row' , marginRight: '20px' , marginTop: '2px'}}>
                <StyleLi><NavLink to={'/'} ><span className="glyphicon glyphicon-user"></span>Brands</NavLink></StyleLi>
                {auth ?   
                    <>
                    <StyleLi><NavLink to={'/account'} ><span className="glyphicon glyphicon-log-in"></span> Account</NavLink></StyleLi>
                    <StyleLi><Btn onClick={handleLogout} ><span className="glyphicon glyphicon-log-in"></span> Logout</Btn></StyleLi>
                    </>
                    :<>
                    <StyleLi><NavLink to={'/login'} ><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></StyleLi>
                    </>
                }
                    <StyleLi><Btn 
                    // onClick={handleCart}
                    className="sidenav---sidenav-toggle---1KRjR"
                    ><span ></span><FiShoppingCart style={{verticalAlign: 'sub'}} /> Cart</Btn></StyleLi>
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
    margin: 0px;
    padding: 0px;  
    
    &:hover {
        background: transparent;
        border: none;
        margin: 0px;
        padding: 0px; 
    }
`;

export default NavbarComp