import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
  <section >
          <div className=' absolute vh-100 top-0 left-0' style={{backgroundImage: 'url(images/bg.svg)', zIndex:'-99999'}}>
          </div>
          <div className="dib v-top pr7-ns pr0 pa0 tl-ns tc vh-100">
          <h1 className='f-subheadline-l mt5'>Digital Product Designer</h1>
          <h3 className='mt4 fw3' style={{lineHeight: '1.8'}}>Hi there! I'm James, I creating meaningful digital experiences with a focus on user-centred design.</h3>
          <a className="f6 grow no-underline ph4 pv3 dib white neon  mt3" style={{borderRadius:'6px'}} href="#form">Get in touch</a>
          <Social/>
          </div>
</section>
    )
  }
}
export default Landing


