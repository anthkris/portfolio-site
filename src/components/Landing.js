import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
  <section >
          <div className="dib v-top w-80-ns w-100 mt4-ns pa0 tl-ns tc vh-100">
          <h1 style={{lineHeight: '1.2'}}>Hello! <br /><br /> I'm a Product Designer based in Berlin, creating meaningful digital experiences with a focus on user-centred design.</h1>
          <a className="f6 grow no-underline ph4 pv3 dib neon white mt3" style={{borderRadius:'6px'}} href="#form">Get in touch</a>
          <Social/>
          </div>
</section>
    )
  }
}
export default Landing


