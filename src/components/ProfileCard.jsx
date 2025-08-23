import React from 'react'
import '../App.css'

function ProfileCard({ name, img, description
 }) {
    return (
    <>
   <div>
    <h1> {name}</h1>
    <img  src={img} alt="profile image" />
    <p className='heading'>{description}</p>
   </div>
         </>
    );
}

export default ProfileCard;