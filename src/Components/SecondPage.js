import React, { useState } from 'react';
import '../Styles/SecondPage.css';
import { useNavigate } from 'react-router';

    
const SecondPage = () => {
    const details = JSON.parse(localStorage.getItem('details'));
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({
        address: details ? details.address : '',
        gender: details ? details.gender : ''
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
        if(details.address === '' || !details.address){
            setError(true);
            setTimeout(()=>{
                setError(false);
            }, 3000)
            setErrorMessage('Enter your address');
            return;
        }
        if(details.address.length < 20){
            setError(true);
            setTimeout(()=>{
                setError(false);
            }, 3000)
            setErrorMessage('Address should be atleast 20 characters long');
            return;
        }
        if(details.gender === '' || !details.gender){
            setError(true);
            setTimeout(()=>{
                setError(false);
            }, 3000)
            setErrorMessage('Please select your gender');
            return;
        }
        else{
            const obj = JSON.parse(localStorage.getItem('details'));
            if(obj){
                localStorage.setItem('details',JSON.stringify({...obj,...details}));
            }
            else{
                localStorage.setItem('details',JSON.stringify(details));
            }
            navigate('/third');
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
     * Function which is called when user selects his/her gender
     * @param {Object} e 
     */
    const handleGender = (e) => {
        setFormDetails({...formDetails, gender: e.target.value});
    }

    /**
     * Function which is called when the next button is clicked and here form validation is done.
     * User inputs are valid then we will be navigated to second page.
     * @param {Object} e 
     */
    const handleClick = (e) => {
        validate(formDetails);
    }

    const handleBackClick = () => {
        navigate('/');
    }

  return (
    <>
        <div className='formBody'>
            <div className="form">
                <div className='formElement'>
                    <span style={{paddingBottom: '10px'}}>Address:</span>
                    <input type='text' style={{height: '30px', padding: '2px'}} id='address' onChange={handleChange} value={formDetails.address}/>
                </div>
                <div className='formElement'>
                    <span style={{paddingBottom: '10px'}}>Gender:</span>
                    <select style={{height: '30px'}} onChange={handleGender} defaultValue={formDetails.gender || ''}>
                        <option disabled value="">No Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {error && <h1 className='error'>{errorMessage}</h1>}
                <div style={{width: '100%', display:'flex', justifyContent:'space-between'}}>
                    <button style={{width: '100px'}} onClick={handleBackClick}>Back</button>
                    <button style={{width: '100px'}} onClick={handleClick}>Next</button>
                </div>

            </div>
        </div>
    </>
  )
}

export default SecondPage;