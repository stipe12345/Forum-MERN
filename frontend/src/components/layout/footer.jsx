import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';

class Footer extends Component {
   
    render() { 
        return ( 
            <footer className="footer">
                Stjepan Čapko 2021.
            </footer>
         );
    }
}
 
export default Footer;