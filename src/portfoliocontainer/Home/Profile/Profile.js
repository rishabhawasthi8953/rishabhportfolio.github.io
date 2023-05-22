import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
export default function Profile() {
  return (
    <div className='profile-container'>
         <div className='profile-parent'>
            <div className='profile-details'>
               <div className='colz'>
                 <div className='colz-icon'>

               <a href="https://www.facebook.com/">
                <i className='fa fa-facebook-square'></i>
               </a>
               <a href="https://www.google.com/">
                <i className='fa fa-google-plus-square'></i>
               </a>
               <a href="https://www.instagram.com/">
                <i className='fa fa-instagram'></i>
               </a>
               <a href="https://www.youtube.com/">
                <i className='fa fa-youtube-square'></i>
               </a>
               <a href="https://twitter.com/home">
                <i className='fa fa-twitter'></i>
               </a>
                 </div>
               </div>
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello,I'M<span className='highlighted-text'>Rishabh</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <span className='primary-text'>
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                           loop={Infinity}
                           steps={[
                            "Enthusiastic Developer",
                            1000,
                            "Full-stack Developer",
                            1000,
                            "MERN stack Developer",
                            1000,
                            "Cross-platform Developer",
                            1000,
                            "React/React Native Developer",
                            1000,
                            
                           ]}

                        />

                        
                    </h1>
                    <span className='profile-role-tagline'>
                        knack of building websites with front and backend development
                    </span>
                </span>
            </div>
            <div className='profile-options'>
                <button className='btn primary-btn'>
                    {" "}
                    hire me{" "}
                </button>
            </div>
            </div>
            <div className='profile-picture'>
            <div className='profile-picture-background'>
             </div>
            </div>
        </div>
    </div>
  )
}
