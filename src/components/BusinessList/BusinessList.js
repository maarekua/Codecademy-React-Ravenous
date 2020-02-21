import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {

    render() {
        return (
            <div class="BusinessList">
              {this.props.businesses.map(value => <Business business={value}/>)}
            </div>
        )
    }
}

export default BusinessList