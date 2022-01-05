import React from 'react';
import HeaderCartContainer from '../../containers/HeaderCartContainer';
import HeaderSearchContainer from '../../containers/HeaderSearchContainer';
import HeaderNavbar from './HeaderNavbar';
import HeaderSearch from './HeaderSearch';
import './style.css'

Header.propTypes = {

};

function Header(props) {
    return (
        <header className="header">
            <div className="grid wide">
                <HeaderNavbar />
                <div className="header-with-search">
                    {/* <HeaderSearch /> */}
                    <HeaderSearchContainer />
                    <HeaderCartContainer />
                </div>
            </div>
        </header>
    );
}

export default Header;