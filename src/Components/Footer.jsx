import React from 'react';
import './Styles/Footer.css';
import apple from './Icons/apple.png';
import facebook from './Icons/facebook.png';
import instagram from './Icons/instagram.png';
import pinterest from './Icons/pinterest.png';
import twitter from './Icons/twitter.png';
import youtube from './Icons/youtube.png';

const Footer = () => {
    return (
        <div className="Footer">
            <div className='icon-container'>
                <img className='icon' src={instagram} alt={'Error'} />
                <img className='icon' src={facebook} alt={'Error'} />
                <img className='icon' src={youtube} alt={'Error'} />
                <img className='icon' src={apple} alt={'Error'} />
                <img className='icon' src={twitter} alt={'Error'} />
                <img className='icon' src={pinterest} alt={'Error'} />
            </div>
            <div className='btn-container'>
                <input className='footer-btn' type={'button'} value={'NEWSLETTER SIGN-UP'} />
                <input className='footer-btn' type={'button'} value={'TERMS OF USE'} />
                <input className='footer-btn' type={'button'} value={'PRIVACY POLICY'} />
                <input className='footer-btn' type={'button'} value={'CONTACT US'} />
                <input className='footer-btn' type={'button'} value={'FREQUENTLY ASKED QUESTIONS'} />
                <input className='footer-btn' type={'button'} value={'CREDITS'} />
            </div>
            <div className='pr'>
                <p>
                    BLACKBLOOD® A Blend Of Straight Wines Finished In Black Brandy Casks
                </p>
                <p>
                    Bottled By Sweet Amber Distilling Co., Mineville, NY 45% Alc./Vol. Copyright ©2021 Sweet Amber Ventures, Inc.
                </p>
                <p>
                    All Rights Reserved
                </p>
                <p>
                All Material On This Site Is Intended For Individuals Of Legal Drinking Age.
                </p>
            </div>
        </div>
    )
}

export default Footer