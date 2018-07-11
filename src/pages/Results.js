import React from "react";
import PropTypes from "prop-types";

// Utilities
import kebabCase from "lodash/kebabCase";

// Components
import Helmet from "react-helmet";
import Link from "gatsby-link";

class SearchResultsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: {}
    }
  } 
  render(){
    return(
      <div className='center mw8 db ph3 pt3 pb5' aria-live="polite">
        <h1>Search Results</h1>
        {
          (this.props.location.state === undefined || this.props.location.state.results.length === 0)
          ? <p>No results found</p>
          :<div> 
            <p>{this.props.location.state.results.length} result(s) found</p>
              <ul>
                {this.props.location.state.results.map(page => (
                  <li key={page.path}>
                    <Link className="link hover-neon" to={page.path}>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
        }
      </div>
    );
  }
}


SearchResultsPage.propTypes = {
};

export default SearchResultsPage;