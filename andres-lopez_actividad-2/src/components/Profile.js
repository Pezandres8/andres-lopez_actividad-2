import React from 'react';
import '../styles/Profile.css'

function Profile(props){
    return(
        <div className='container-profile'>
            <img className='image-profile'
            src={require(`../images/profile-${props.image}.png`)}
            alt='developer-photo' />
        <div className='container-text-profile'>
            <p className='profile-name'>
               <strong>{props.movie}</strong> by {props.director} 
            </p>
            <p className= 'position-profile'>
            <strong>{props.country}</strong> in <strong> {props.year}</strong>
            </p>
            <p className = 'text-profile'> "{props.synopsis}"</p>
            </div>
            {/*We added the trailer, IMBD and Letterbox buttons on February 19th*/}
             <button onClick= {()=>window.open(props.trailer,'_blank')}> 
                Watch the trailer
            </button>
            <button onClick= {()=>window.open(props.imbd,'_blank')}> 
                Read more on IMBD
            </button>
            <button onClick= {()=>window.open(props.letterboxd,'_blank')}> 
                Rate on Letterboxd
            </button>
            </div>
    );
}
export default Profile;