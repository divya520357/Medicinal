import './style.css'
const Header = () => {
    return (  
    <nav className="navContainer">
            <ul>
                <li className='nav-logo'> <img src='/assets/sihlogo.png' alt="Logo" /> </li>
                <a href='/'><li className="active">Home</li></a>
                <a href="/">
                    <li>How to Use</li>
                </a>
                <a href='/' rel="noopener noreferrer"><li>Category</li></a>
                <a href="/contact" passHref>
                    <a rel="noopener noreferrer">
                    <li>About Us</li>
                    </a>
                </a>
            </ul>
            
    </nav>
);
}
 
export default Header;
