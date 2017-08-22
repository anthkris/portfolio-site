import React from 'react'
import PropTypes from 'prop-types';

class AboutTile extends React.Component {
  render() {
    return (
  <div className="h4-5 dib w-100 w-third-ns pv2-ns ph3-ns ph0 pv1">
    <div className="h-100 br2 pv3 ph3">
      <div className="dtc w3"><img src={this.props.icon} alt='icon'/></div>
      <div className="dtc v-top pt2 pl3">
        <h1 className="f5 fw7 lh-title mv0">{this.props.title}</h1>
        <h2 className="f6 fw4 mt2 mb0 secondary-text">{this.props.summary}</h2>
      </div>
    </div>
    </div>
    )
  }
}
AboutTile.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default AboutTile



