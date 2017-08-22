import React from 'react'
import PropTypes from 'prop-types';


class Title extends React.Component {
  render() {
    return (
        <div>
        <h1 className='dib fw4 mv4 pv4'>{this.props.text}</h1>
        </div>
    );
  }
}
Title.propTypes = {
  text: PropTypes.string.isRequired,
};


export default Title
