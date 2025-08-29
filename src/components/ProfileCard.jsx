import React from 'react'
import '../App.css'

function ProfileCard({ name, img, description
 }) {
    return (
    <>
   <div>
    <h1 style={{ color: 'yellow' }}>{name}</h1>
    <img  src={img} alt="profile image" />
    <p className='description'>{description}</p>
   </div>
         </>
    );
}

export default ProfileCard;