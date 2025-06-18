import "./DashboardResturantAdmin.css"
import "../../common.css"
import { useNavigate } from "react-router-dom"


const DashboardResturantAdmin = () => {
    const navigate = useNavigate()
    return (
        <div className='outer-div'>
         <button className="btn" onClick={() => {navigate('/layout')}}>
          Create Layout of resturant
        </button>
        </div>
    )
}

export default DashboardResturantAdmin;