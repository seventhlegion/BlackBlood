import React, { useState } from 'react';
import './Styles/Quote.css';

const Quote = () => {

    const [change, setChange] = useState('');
    const [validation, setValidation] = useState(null);

    const onChange = (e) => {
        e.preventDefault();
        setChange(e.target.value);
    }

    const onSubmit = () => {
        const regex = new RegExp ("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if(regex.test(change) === true)
        {
            setValidation(true)
        }
        else
        {
            setValidation(false);
        }
    }

    const valid = () =>{
        if(validation === true)
        {
            return (
                <div className='content'>
                    Thanks to you : )
                </div>
            )
        }
        else if(validation === false)
        {
            return (
                <div className='content'>
                    Invalid !
                </div>
            )
        }
        else
        {
            return (
                <div className='content'>

                </div>
            )
        }
    }

    return (
        <div className='submit-container'>
            <p> 
                Enter your email to stay up to date with the latest news and events
            </p>
            <div className='input'>
                <form onSubmit={onSubmit}>

                    <input className={'email'}
                    onChange={onChange}
                    type={'text'}
                    placeholder={'Enter your email...'} />

                    <input className={'submit'}
                    onClick={onSubmit}
                    type={'button'}
                    value={'Subscribe Now'} />

                </form>
                {
                    valid()
                }
            </div>
        </div>
    )
}

export default Quote