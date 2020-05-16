import React, { Component } from 'react';
import TopNav from './TopNavComponent';
class HeaderNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <TopNav />
            </div>
        );
    }
}

export default HeaderNav;
