import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
  <section>
          <div className="dib v-top mw7 pr7-ns pr0 mt5-ns pa0 tl-ns tc vh-100">
          <h1>Digital Product and Web Designer in Berlin</h1>
          <h3 className='mt4 fw3' style={{lineHeight: '1.8'}}>Hi there! My name is James Ciclitira. I creating meaningful digital experiences with a focus on user-centred design.</h3>
          <a className="f6 grow no-underline ph4 pv3 dib neon white mt3" style={{borderRadius:'6px'}} href="#form">Get in touch</a>
          <Social/>
          </div>
</section>
    )
  }
}
export default Landing


