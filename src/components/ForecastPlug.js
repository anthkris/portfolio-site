import React from 'react'
import Forecast from 'react-forecast'


class ForecastPlug extends React.Component {
      render() {
    return (

    <div>
      <Forecast units="ca" latitude={51.5074} longitude={0.1278}  name='London' />
    </div>

    )
  }
}
export default ForecastPlug

