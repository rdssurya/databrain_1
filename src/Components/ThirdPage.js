import React, { useState } from 'react';
import '../Styles/ThirdPage.css';
import { useNavigate } from 'react-router';

const ThirdPage = () => {
    const details = JSON.parse(localStorage.getItem('details'));
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({
        email: details ? details.email : '',
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
        if(details.email === '' || !details.email){
            setError(true);
            setTimeout(()=>{
                setError(false);
            }, 3000)
            setErrorMessage('Enter your email address');
            return;
        }
        if(!details.email.includes('@') || !details.email.includes('.')){
            setError(true);
            setTimeout(()=>{
                setError(false);
            }, 3000)
            setErrorMessage('Enter a valid email address');
            return;
        }
        if(details.gender === ''){
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
            navigate('/final');
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
        setFormDetails({...formDetails, [e.target.id]: e.target.value});
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
                    <span style={{paddingBottom: '10px'}}>Email:</span>
                    <input type='email' style={{height: '30px', padding: '2px'}} id='email' onChange={handleChange} value={formDetails.email}/>
                </div>

                {error && <h1 className='error'>{errorMessage}</h1>}
                <div style={{width: '100%', display:'flex', justifyContent:'space-between'}}>
                    <button style={{width: '100px'}} onClick={()=>{navigate('/second');}}>Back</button>
                    <button style={{width: '100px'}} onClick={handleClick}>Submit</button>
                </div>

            </div>
        </div>
    </>
  )
}

export default ThirdPage;