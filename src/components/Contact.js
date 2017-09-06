import React from 'react'


class Contact extends React.Component {
  render() {
    return (
<section className='mw8 db ph3 center mt6'>
<h2 className='fw4 mb5'>Get in touch</h2>


<form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
        <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

    <label className='dib w-50-ns w-100'>Name:
    <input className="bg-transparent db mt3 w-80-ns w-100 pointer" type="text" name="name"/>
    </label>

    <label className='dib w-50-ns w-100 mt4 mt0-ns'>Email:
    <input className="bg-transparent db mt3 w-80-ns w-100 pointer" type="email" name="email"/>
    </label>

    <label className='db w-100 pt4 mv3'>Message
    <textarea rows="3" className="db w-100 bg-transparent pointer" name="message"/>
    </label>

    <button className='f6 grow no-underline bn ph4 pv3 mt3 dib bg-black white mt5 shadow-4'
    style={{borderRadius:'6'}}
    type="submit">Send</button>
</form>
</section>
    )
  }
}
export default Contact

