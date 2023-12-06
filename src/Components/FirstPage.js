import React, { useState } from 'react';
import '../Styles/FirstPage.css';
import { useNavigate } from 'react-router';

const FirstPage = () => {
    const details = JSON.parse(localStorage.getItem('details'));
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({
        firstName: details ? details.firstName : '',
        lastName: details ? details.lastName : '',
        age: details ? details.age : ''
    });
    const [errorMessage,setErrorMessage] = useState();
    const [error, setError] = useState(false);

    

    /**
     * Function to validate form data
     * If invalid data is entered relevant error message is shown.
     * @param {Object} details 
     * @returns 
     */
    const validate = (details) => {
        if(details.firstName === ''){
            setError(true);
            setTimeout(()=>{
                setError(false);
            }, 3000)
            setErrorMessage('Enter your first name');
            return;
        }
        if(details.lastName === ''){
            setError(true);
            setTimeout(()=>{
                setError(false);
            }, 3000)
            setErrorMessage('Enter your last name');
            return;
        }
        if(Number(details.age) <= 0 || Number(details.age) > 100 ){
            setError(true);
            setTimeout(()=>{
                setError(false);
            }, 3000)
            setErrorMessage('Age should be between 1 and 100');
            return;
        }
        else if(details.age>=1 && details.age<=100){
            const obj = JSON.parse(localStorage.getItem('details'));
            if(obj){
                localStorage.setItem('details',JSON.stringify({...obj,...details}));
            }
            else{
                localStorage.setItem('details',JSON.stringify(details));
            }
            navigate('/second');
            return;
        }
        else{
            setError(true);
            setTimeout(()=>{
                setError(false);
            }, 3000)
            setErrorMessage('Enter a valid age value.');
            return;
        }
    }


    /**
     * Function which is called when there is a change in the text input fields
     * And the formDetails is updated accordingly
     * @param {Object} e 
     * 
     */
    const handleChange = (e) =>{
        setFormDetails({...formDetails, [e.target.id]: e.target.value.toUpperCase()});
    }


    /**
     * Function which is called when the next button is clicked and here form validation is done.
     * User inputs are valid then we will be navigated to second page.
     * @param {Object} e 
     */
    const handleClick = (e) => {
        validate(formDetails);
    }

  return (
    <>
        <div className='formBody'>
            <div className="form">
                <div className='formElement'>
                    <span style={{paddingBottom: '10px'}}>First name:</span>
                    <input type='text' style={{height: '30px', padding: '2px'}} id='firstName' onChange={handleChange} value={formDetails.firstName}/>
                </div>
                <div className='formElement'>
                    <span style={{paddingBottom: '10px'}}>Last name:</span>
                    <input type='text' style={{height: '30px'}} id='lastName' onChange={handleChange} value={formDetails.lastName}/>
                </div>
                <div className='formElement'>
                    <span style={{paddingBottom: '10px'}}>Age:</span>
                    <input type='text' style={{height: '30px'}} id='age' onChange={handleChange} value={formDetails.age}/>
                </div>

                {error && <h1 className='error'>{errorMessage}</h1>}
                <button style={{width: '100px'}} onClick={handleClick}>Next</button>
            
            </div>
        </div>
    </>
  )
}

export default FirstPage;