/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { Link } from "react-router-dom";
import FurniturePage from './FurniturePage'
import AllRoomData from '../../../Data/AllProjectsData'
import cover from '../../../Images/Categories/Appliances/Appliances Cover.jpg'
import '../../Categories.css'
export default function Home(props) {
    // form State
    const [roomsArray,setRoomsArray]=React.useState(AllRoomData)
    const[forms,setForms]=React.useState({
        ClientName :'',
        LocationFilter:'',
        // pets:false,
        // Breakfast:false
    })
    console.log(forms);
React.useEffect(()=>{
    // Client Name
    forms.ClientName ==='Client1' && setRoomsArray(roomsArray.filter(item=>item.ClientFilter.includes('ClientName1')))
    forms.ClientName ==='Client2' && setRoomsArray(roomsArray.filter(item=>item.ClientFilter.includes('ClientName2')))
    forms.ClientName ==='Client3' && setRoomsArray(roomsArray.filter(item=>item.ClientFilter.includes('ClientName3')))
    forms.ClientName ==='Client4' && setRoomsArray(roomsArray.filter(item=>item.ClientFilter.includes('ClientName4')))
    // Location
    forms.LocationFilter ==='Dubai' && setRoomsArray(roomsArray.filter(item=>item.LocationFilter.includes('Dubai')))
    forms.LocationFilter ==='Abu Dhabi' && setRoomsArray(roomsArray.filter(item=>item.LocationFilter.includes('Abu Dhabi')))
    // Room LocationFilter
    // room pets
    // forms.pets && setRoomsArray(roomsArray.filter(item=>item.Pets === true))
    // // room Breakfast
    // forms.Breakfast && setRoomsArray(roomsArray.filter(item=>item.Breakfast === true))
},[forms])

    const allRoomData = roomsArray.map(allRoomItem => {
        return<FurniturePage
        id={allRoomItem.id}
        {...allRoomItem}
        />
    })

function handleChange(event){
    const{name, value, type, checked} = event.target
    setForms(prevForms=>{
        return{
            ...prevForms,
            [name]:type === 'checkbox' ? checked : value
        }
    })
    setRoomsArray(AllRoomData)
}
return (
    <main className="cat-cont">
        <div className="cat-cont-ch">
            <img 
            src={cover}
            className='cat-card-img'
            />
            <div className="cat-card-det cat-card-det1">
                <h1 className="cat-card-title card-width">FURNITURES</h1>
                <hr className="line"/>
                <p className="cat-card-dis">All types of furnitures at all prices</p>
                <div className="cat-card-btn-cont">
                    <Link to="/" className="cat-card-btn-ch"><button className="cat-card-btn">RETURN HOME</button></Link>
                    <a href="#" className="cat-card-btn-ch"><button className="cat-card-btn">DOWNLOAD CATALOG</button></a>
                </div>
            </div>
        </div>
        <div className="cat-search-forms">
            <h2 className="cat-head-name">Our Projects</h2>
            <hr className="line mini"/>
       {/* forms */}
        <form className="cat-form-container">
        <div className="cat-form-one">
            <p className="cat-form-title">Client</p>
            <select 
            id="ClientName"
            className="cat-select-box"
            onChange={handleChange}
            name="ClientName"
            value={forms.ClientName}
            >
                
                <option value="" hidden>Choose Client Name</option>
                <option value="Client1">Client Name 1</option>
                <option value="Client2">Client Name 2</option>
                <option value="Client3">Client Name 3</option>
                <option value="Client4">Client Name 4</option>
                <option value="Client4">Client Name 5</option>
            </select>
            </div>
            <div className="cat-form-two">
            <p className="cat-form-title">Location</p>
            <select 
            id="LocationFilter"
            className="cat-select-box"
            onChange={handleChange}
            name="LocationFilter"
            value={forms.LocationFilter}
            >
                <option value="" hidden>Choose Location</option>
                <option value="Dubai">Dubai</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
            </select>
            </div>
            {/* <div className="cat-check-box-cont">
                <div className="cat-check-box">
                <input 
                type='checkbox'
                id="pets"
                className="cat-check-box-label"
                onChange={handleChange}
                name="pets"
                checked={forms.pets}
                />
                
                <label htmlFor=''>  pets</label>
                </div>
                <div className="cat-check-box">
                <input 
                type='checkbox'
                id="Breakfast"
                className="cat-check-box-label"
                onChange={handleChange}
                name="Breakfast"
                checked={forms.Breakfast}
                />
                <label htmlFor='Breakfast'>  Breakfast</label>
                </div>
            </div> */}
        </form>
        </div>
        <div>
            <div className="project-card-cont">
            {allRoomData}
            </div>
        </div>

    </main>
)
}
