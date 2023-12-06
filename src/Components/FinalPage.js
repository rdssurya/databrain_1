import React, { useEffect } from 'react';
import '../Styles/FinalPage.css';
import { useNavigate } from 'react-router';

const FinalPage = () => {
    const userDetails = JSON.parse(localStorage.getItem('details'));
    const navigate = useNavigate();

    useEffect(()=>{
        if(Object.keys(userDetails).length!==6){
            navigate('/');
            alert('Submit all the required details to access final page.'); 
        }
    },[]);
    
  return (
    <>
    <h1 style={{textAlign:'center'}}>Final Details</h1>
    <div className='finalBody'>
        <div className='finalForm'>
            <div className='finalElement'>
                <p>First Name: </p>
                <p style={{color:"blue"}}>{userDetails ? userDetails.firstName : ''}</p>
            </div>
            <div className='finalElement'>
                <p>Last Name: </p>
                <p style={{color:"blue"}}>{userDetails ? userDetails.lastName : ''}</p>
            </div>
            <div className='finalElement'>
                <p>Age: </p>
                <p style={{color:"blue"}}>{userDetails ? userDetails.age : ''}</p>
            </div>
            <div className='finalElement'>
                <p>Address: </p>
                <p style={{color:"blue", overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis'}}>{userDetails ? userDetails.address : ''}</p>
            </div>
            <div className='finalElement'>
                <p>Gender: </p>
                <p style={{color:"blue"}}>{userDetails ? userDetails.gender: ''}</p>
            </div>
            <div className='finalElement'>
                <p>Email: </p>
                <p style={{color:"blue"}}>{userDetails ? userDetails.email : ''}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default FinalPage;