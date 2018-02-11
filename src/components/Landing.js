import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
  <section >
          <div className="dib v-top w-80-ns w-100 mt4-ns pa0 tl-ns tc vh-100 pt3">
          <p className='f7 secondary-text ttu'>James Ciclitira - Product Designer</p>
          <h1 className='f2-ns f3' style={{lineHeight: '1.4'}}>Hello! I'm a Product Designer based in Berlin, designing digital experiences using user-centred design principles to create meaningful user experiences.</h1>
          <a className="f6 grow no-underline ph4 pv3 dib neon white mt4" style={{borderRadius:'6px'}} href="#form">Get in touch</a>
          <Social/>
          </div>
</section>

    )
  }
}
export default Landing


