import React from 'react'
import PropTypes from 'prop-types';


class Role extends React.Component {
  render() {
    return (
    <article className='w-100 ph3 pv2'>
      <a href={this.props.link} target='blank' className="link pointer dt w-100 pb2">
        <div className="dtc"
        style={{
          width: '56px'
              }}>
      <img className='db w-100 grow'
        src={this.props.img} alt='Company logo'/>
        </div>
        <div className="dtc ph3 v-top">
        <p className="lh-title mv0">{this.props.jobTitle}</p>
        <p className="mt1 mb0 secondary-text">{this.props.employer}</p>
        <p className="f7 mt2 secondary-text">{this.props.length}</p>

        </div>
      </a>
    </article>

    );
  }
}
Role.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  employer: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
};

export default Role

