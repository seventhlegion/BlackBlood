import React from 'react';
import './Styles/Header.css';

const Header = () => {
    return (
        <div className="Header">
            <table>
                <tr>
                    <th className='name'>
                        <span>
                            Black Blood
                        </span>
                    </th>
                    <th className='header-buttons-container'>
                        <input type={'button'} className={'header-buttons'} value={'Products'} />
                        <input type={'button'} className={'header-buttons'} value={'Locator'} />
                        <input type={'button'} className={'header-buttons'} value={'Blog'} />
                        <input type={'button'} className={'header-buttons'} value={'News & Events'} />
                        <span>
                            |
                        </span>
                        <input type={'button'} className={'buyNow'} value={'Buy Now'} />
                    </th>
                </tr>
            </table>
        </div>
    )
}

export default Header