import React from 'react'
import Title from './Title'
import ToolTile from './ToolTile'

class Tools extends React.Component {
  render() {
    return (
<div className='mw8 center'>
<h2 className='tracked pl3 ml2'>Tools that I love and use</h2>
<div className='mt0 flex flex-wrap justify-center items-center '>
    <ToolTile img='images/sketch.svg' link='https://www.sketchapp.com/'/>
    <ToolTile img='images/Illustrator.svg' link='http://www.adobe.com/uk/products/illustrator.html'/>
    <ToolTile img='images/photoshop.svg' link='http://www.adobe.com/uk/products/photoshop.html'/>
    <ToolTile img='images/invision.svg' link='https://www.invisionapp.com/' />
    <ToolTile img='images/pixate.jpg' link='http://www.pixate.com/'/>
    <ToolTile img='images/craft.svg' link='https://www.invisionapp.com/craft'/>
    <ToolTile img='images/zeplin.jpg' link='https://zeplin.io/'/>
    <ToolTile img='images/html.svg' link='http://codepen.io/jimi23123/'/>
    <ToolTile img='images/css.svg' link='http://codepen.io/jimi23123/'/>
    <ToolTile img='images/react.svg' link='https://facebook.github.io/react/'/>
</div>
</div>
    )
  }
}
export default Tools
