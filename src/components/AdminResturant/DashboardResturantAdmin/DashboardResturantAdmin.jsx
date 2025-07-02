import "./DashboardResturantAdmin.css"
import "../../common.css"
import { useNavigate } from "react-router-dom"
import Navbar from "../../common/Navbar/Navbar"


const DashboardResturantAdmin = () => {
    const navigate = useNavigate()
    return (
        <div className='outer-div'>
        <Navbar/>
         <button className="btn" onClick={() => {navigate('/layout')}}>
          Create Layout of resturant
        </button>
        </div>
    )
}

export default DashboardResturantAdmin;