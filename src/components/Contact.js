import React from 'react'


class Contact extends React.Component {
  render() {
    return (
<section id='Contact' className='mw8 db ph3 center mt6'>
<h2 className='fw4'>Get in touch</h2>
<form name="contact" action="Sent" netlify>
<input id="name" className="bg-transparent pv3 mv2 dib w-48" placeholder='Name' type="text" name="name"/>
<input id="email" className="bg-transparent pv3 mv2 dib w-48 fr" placeholder='Email' type="email" name="email"/>
<textarea id="comment" rows="3" className="db w-100 bg-transparent pt3 mv3" placeholder='Message' name="message"></textarea>
<div className='mt5'>
<button className='pointer bg-transparent secondary-text f5 grow no-underline bn' type="submit">Send</button>
</div>
</form>
</section>
    )
  }
}
export default Contact

