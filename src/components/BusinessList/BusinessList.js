import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        console.log(this.props.businesses)
        return (
            <div className="BusinessList">
              {this.props.businesses.map(value => <Business key={value.id} business={value}/>)}
            </div>
        )
    }
}

export default BusinessList