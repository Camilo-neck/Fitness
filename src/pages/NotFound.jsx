import React from 'react';
import '../components/styles/Errors.css';
import image from "../images/404.png";

const NotFound = () => (
    <div className="text-center">
        <img src={image} alt="Not Found Error" className='Error_Image'/>
        <h1 className="Error_Text">Error 404 Not Found bru</h1>
    </div>
)

export default NotFound