import React from 'react';
import Role from './Role';
import UT from "./images/companies/UTsm.png";
import LBG from "./images/companies/littlebirdgames.png";
import Planview from "./images/companies/planview.png";
import TEEX from "./images/companies/TEEXsm.png";
import ESC13 from "./images/companies/esc13.png";

class Experience extends React.Component {
  render() {
    return (
      <section>
        <div className="db-ns dn center mt4">
          <h1 className='fw3'>Past experience</h1>
          <div className='pt3 '>
            <div className='dib w-25-ns w-100 v-top'>
              <Role jobTitle='LX Designer and Front End Developer' employer='University of Texas' img={UT} link='https://utakeit.stemcenter.utexas.edu/'/>
              <Role jobTitle='LX Designer and Front End Developer' employer='Little Bird Games' img={LBG} link='http://littlebirdgames.com/'/>
            </div>
            <div className='dib w-25-ns w-100'>
              <Role jobTitle='Instructional Designer' employer='Planview' img={Planview} link='https://www.planview.com/'/>
              <Role jobTitle='Instructional Designer' employer='University of Texas' img={UT} link='https://facultyinnovate.utexas.edu/'/>
            </div>
            <div className='dib w-25-ns w-100'>
              <Role jobTitle='Instructional Designer' employer='TEEX' img={TEEX} link='https://teex.org/Pages/law-enforcement-and-security.aspx'/>
              <Role jobTitle='Technical Assistant, Inst Tech' employer='ESC Region 13' img={ESC13} link='http://www4.esc13.net/'/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Experience
