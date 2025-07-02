import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaSearch, FaUser, FaHotel, FaUtensils, FaMapMarkerAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useState } from 'react';

const NavbarUser = () => {
  const [selectedCity, setSelectedCity] = useState('Select City');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('restaurants'); // Default to restaurants
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleLogin = () => {
    // TODO: Implement login navigation
    console.log('Navigate to login');
  };

  const handleSignup = () => {
    // TODO: Implement signup navigation
    console.log('Navigate to signup');
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid px-4">
        {/* Left Section - Logo */}
        <div className="navbar-brand-wrapper">
          <Link className="navbar-brand" to="/">
            <span className="logo-text">
              <span className="logo-easy">Easy</span>
              <span className="logo-o">O</span>
            </span>
          </Link>
        </div>

        

        {/* Right Section - Navigation Links */}
        <div className="navbar-nav-section">
          <div className="nav-buttons-wrapper">
          
            
            
            
            <button className="login-btn" onClick={handleLogin}>
              <FaSignInAlt className="nav-icon" />
              <span className="nav-text">Login</span>
            </button>
            
            <button className="signup-btn" onClick={handleSignup}>
              <FaUserPlus className="nav-icon" />
              <span className="nav-text">Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
