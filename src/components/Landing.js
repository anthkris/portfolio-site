import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
  <section>
          <div className="dib v-top w-80-ns w-100 mt4-ns pa0 tl-ns tc vh-100">
          <h1 className='fw5 f2 mb4'>Hi there! </h1>
          <h3 className='fw3' style={{lineHeight: '1.6'}}>Since you are here I guess you want to know a little about me. <br /><br /> I'm James a Product Designer in Berlin. My passion lie in problem solving through user-centered research & developing innovative solutions to solve these. To date my career has focused within the digital field with a emphasis on mobile and web.</h3>

          <a className="f6 grow no-underline ph4 pv3 dib bg-black-80 white mt5 shadow-4" style={{borderRadius:'6px'}} href="#form">Get in touch</a>
          <Social/>
          </div>
</section>

    )
  }
}
export default Landing


