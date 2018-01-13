import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
  <section>
          <div className="dib v-top w-80-ns w-100 mt4-ns pa0 tl-ns tc vh-100">
          <h1 className='fw3 f1 mb4'>Hi there! </h1>
          <h3 className='fw3' style={{lineHeight: '1.6'}}>Since you are here I guess you want to know a little about me...</h3>
          <h3 className='fw3 mw7' style={{lineHeight: '1.6'}}>I'm a Product Designer based in Berlin, designing interfaces and experiences for Android, iOS, and the Web, using user-centred design practices to develop meaningful experiences.</h3>
          <a className="f6 grow no-underline ph4 pv3 dib bg-black-80 white mt5 shadow-4" style={{borderRadius:'6px'}} href="#form">Get in touch</a>
          <Social/>
          </div>
</section>

    )
  }
}
export default Landing


