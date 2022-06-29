import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { FaEdit } from "react-icons/fa";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';

const [petInfo, setPetInfo] = useState(' ');
const[errors, setErrors] = useState({});
const submitHandler = (e) => {
    e.preventDefault();
    axios
    .post(
        'http://localhost:8000/api/pets',
        {
            task,
            time, 
            frecuency,
        }) 
        .then((res) => {
            Navigate('/');
        })
        

        }
    )
}

