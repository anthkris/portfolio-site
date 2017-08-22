import React from 'react'
import PropTypes from 'prop-types';

class Media extends React.Component {
  render() {
    return (
    <a className="link db w-100 pa3 pb2 mt2 dim" href={this.props.link}>
      <div className="dtc w3">
        <img src={this.props.img} className="db w-100" alt='Design Tool'/>
      </div>
      <div className="dtc v-top pl3">
        <h3 className="lh-title primary-text mv0">{this.props.title}</h3>
        <p className="f6 lh-copy mv0 secondary-text pt1">{this.props.summary}</p>
          </div>
    </a>
    );
  }
}

Media.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,

};

export default Media

