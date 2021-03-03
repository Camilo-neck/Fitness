import React from 'react';
import '../components/styles/Errors.css';
import image from "../images/500.png";

const FatalError = () => (
    <div className="text-center">
        <img src={image} alt="500 Unexpected Error" className='Error_Image'/>
        <h1 className="Error_Text">Fatal Error: 500 Unexpected Error</h1>
    </div>
)

export default FatalError