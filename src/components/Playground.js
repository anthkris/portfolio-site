import React from 'react'
import PlayTile from './PlayTile'
import PlayTileIn from './PlayTileIn'
import Title from './Title'


class Playground extends React.Component {
  render() {
    return (
<section className="center mw8 mt4 db ph0-ns ph2">
<Title text='Freebies'/>
<p className=' ma0 pa0 fw5 secondary-text'>Collection of open source projects, UI kits and assets available for download</p>
<div className='pt3 db'>
<PlayTile  title='Résumé template' type='images/tools/js.svg' img='images/preview/cv.svg' link='https://github.com/james-ciclitira/resume'/>
<PlayTileIn  title='CSS gradient' type='images/tools/css.svg' img='images/preview/gradient.svg' source='Gradient'/>
<PlayTileIn  title='Weather icon set' type='images/tools/sketch.svg' img='images/preview/weather.svg' source='Weather'/>
<PlayTile  title='Light-Weight SVG Flags' type='images/tools/sketch.svg' img='images/preview/flag.svg' link='https://james-ciclitira.github.io/sketch-files/Material-flags.sketch'/>
<PlayTile  title='Food Delivery App' type='images/tools/sketch.svg'img='images/preview/delivery.jpg' link='https://james-ciclitira.github.io/sketch-files/delivery-on-demand.sketch'/>
<PlayTile  title='Shifts On-demand' type='images/tools/sketch.svg' img='images/preview/shifts.svg' link='https://james-ciclitira.github.io/sketch-files/shifts-on-demand.sketch'/>
<PlayTile  title='Running Route Planner' type='images/tools/sketch.svg' img='images/preview/running.jpg' link='https://james-ciclitira.github.io/sketch-files/running-app.sketch'/>
<PlayTile  title='Postcard Creator' type='images/tools/sketch.svg' img='images/preview/postcard.svg' link='https://james-ciclitira.github.io/sketch-files/postcard-app.sketch'/>
<PlayTile  title='Popular Movies' type='images/tools/sketch.svg' img='images/preview/films.jpg' link='https://james-ciclitira.github.io/sketch-files/films-app.sketch'/>

</div>
</section>
    )
  }
}
export default Playground

