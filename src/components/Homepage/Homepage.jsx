import { useNavigate } from 'react-router-dom';
import { FaUser, FaHotel, FaUtensils } from 'react-icons/fa';
import "../common.css"
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/user');
  };
  const handlResturantClick = () => {
    navigate('./dashboardres')
  }

  return (
    <div className="homepage-outer">
      <div className="homepage-card">
        <h1>Welcome to HotelHub</h1>
        <p>Your one-stop destination for the perfect stay and dining experience</p>
        
        <button className="btn home-btn" onClick={handleUserClick}>
          <FaUser /> Continue as User
        </button>
        
        <button className="btn home-btn" onClick={handlResturantClick}>
          <FaUtensils /> Restaurant Portal
        </button>
        
        <button className="btn home-btn">
          <FaHotel /> Hotel Portal
        </button>
      </div>
    </div>
  );
};

export default Homepage;
