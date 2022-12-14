import { NavLink } from 'react-router-dom'


const Nav = ({ authenticated, user, handleLogOut }) => {
    let userOptions;
    if (user) {
        userOptions = (
            <header className = 'nav-container'>
                <span id = 'nav-banner'>
                    <marquee> 
                        <h4 id='nav-banner-text'>Weclome {user.userName} enjoy browsing the video games available </h4>
                    </marquee>
                </span>
                <div id='nav-content'>
                    <NavLink to ={`/`}>
                        <p> alt="website logo" className='logo'</p>
                    </NavLink>
                <nav className="nav-text" id='menu_box'>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/games' className='nav-link'>Video Games</NavLink>
                    <NavLink to='/about_us' className='nav-link'>About Us</NavLink>
                    <NavLink onClick={handleLogOut} to='/login' className='nav-link'>Log Out</NavLink>
                </nav>
                </div>
            </header>
        );
    }

    const globalOptions = (
        <nav>
            <NavLink to='/login' className='login-link'></NavLink>
        </nav>
    );


    return (

          <div id='links-container'>
            {authenticated && user ? userOptions : globalOptions}
          </div>
        
    );
};

export default Nav;