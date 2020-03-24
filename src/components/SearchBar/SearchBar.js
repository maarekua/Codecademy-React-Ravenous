import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
      super(props);
      this.state = { term: '',
                    location: '',
                    sortBy: 'best_match' };
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.getSortByClass = this.getSortByClass.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
      }
    }

    handleTermChange(event){
      const value = event.target.value;
      this.setState({ ...this.state, term: value })
    }

    handleLocationChange(event){
      const value = event.target.value;
      this.setState({ ...this.state, location: value })
    }

    getSortByClass(sortByOption){
      if (this.state.sortBy === sortByOption) {
        return 'active'
      } else {
        return ''
      }
    }

    handleSortByChange(sortByOption){
      this.setState({ ...this.state, sortBy: sortByOption });
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
        })
    }

    handleSubmit(event){
      event.preventDefault()
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
    }

    render() { return (
        <div className="SearchBar">
          <div className="SearchBar-sort-options">
            <ul>
              {this.renderSortByOptions()}
            </ul>
          </div>
          <div className="SearchBar-fields">
            <input onChange={this.handleTermChange} value={this.state.term} placeholder="Search Businesses" />
            <input onChange={this.handleLocationChange} value={this.state.location} placeholder="Where?" />
          </div>
          <div className="SearchBar-submit">
            <a href='#' onClick={this.handleSubmit} >Let's Go</a>
          </div>
        </div>
        )
    }
}

export default SearchBar