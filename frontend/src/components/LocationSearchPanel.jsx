import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props);
    
    const locations = [
        "24B, Near Kapoor's Cafe, Axios Coaching School, Bhopal",
        "21A, Near Malhotra's Cafe, Amigos Coaching School, Bhopal",
        "22P, Near Bhatia's Cafe, Ajio Coaching School, Bhopal",
        "23C, Near Patekar's Cafe, Aaloo Coaching School, Bhopal"
    ]
  return (
    <div>
        {
            locations.map(function(elem,idx){
        return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
        }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 active:border-2 items-center justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
        </div>
            })
        }
        
        
    </div>
  )
}

export default LocationSearchPanel