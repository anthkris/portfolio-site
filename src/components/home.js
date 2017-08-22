import React from 'react'
import {Link} from "phenomic"
import PropTypes from 'prop-types';


class Navigation extends React.Component {
  render() {
    return (
      <nav className="ph5-ns ph3 pv4-ns pv3">
       <Link className={`no-underline pointer code f4 mt2 db ${this.props.color}`} to="/">{"Return home"}</Link> <nav className="pa3 pa4-ns">
        <a className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Site Name</a>
        <div className="tc pb3">
          <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>
          <a className="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
          <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Store</a>
          <a className="link dim gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
        </div>
      </nav>
    </nav>
    )
  }
}

Navigation.propTypes = {
  color: PropTypes.string.isRequired,
};
export default Navigation
