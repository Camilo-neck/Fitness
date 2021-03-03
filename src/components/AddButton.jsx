import React from 'react';
import Add from '../images/add.png';
import "./styles/Add.css";
import { Link } from "react-router-dom";

const AddButton = () => (
    <Link to="/new">
        <img src={Add} alt='' className="Fitness-Add"/>
    </Link>
)

export default AddButton