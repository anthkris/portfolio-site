import React from 'react'


class Contact extends React.Component {
  render() {
    return (
<section id='Contact' className='mw8 db ph3 center mt6'>
<h2 className='fw4'>Get in touch</h2>
<form action="https://formspree.io/jciclitira@gmail.com" method="POST">
<input id="name" className="bg-transparent pv3 mv2 dib w-48" placeholder='Name' type="text" name="name"/>
<input id="email" className="bg-transparent pv3 mv2 dib w-48 fr" placeholder='Email' type="email" name="_replyto"/>
<input id="Phone" className="bg-transparent pv3 mv2 dib w-48" placeholder='Phone' type="number" name="number"/>
<input id="Subject" className="bg-transparent pv3 mv2 dib w-48 fr   " placeholder='Subject' type="text" name='_subject'/>
<textarea id="comment" rows="3" className="db w-100 bg-transparent pt3 mv3" placeholder='Message' name='message'></textarea>
<div className='mt5'>
<input type="submit" value="Send" className='pointer bg-transparent secondary-text f5 grow no-underline bn'/>
</div>
</form>
</section>
    )
  }
}
export default Contact

