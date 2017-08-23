import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './index.css'

const Header = () =>

   <nav className='w-100' >
    <div className='mw8 db center'>
        <div className="dt-l w-100 border-box pa3 ph0-l pt3">
          <Link className="db dtc-l v-mid link dim tc tl-l mb2 mb0-l f4" to="/" title="Home">
          James Ciclitira</Link>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <a className="link dim dib mr3 " target='blank' href="https://jciclitira-resume.netlify.com/">Digital Résumé</a>
          </div>
        </div>
        </div>
      </nav>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="James Ciclitira - Freelancer Product Designer"
      link={[
        { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-touch-icon.png'},
        { rel: 'icon', sizes: '32x32', href: 'favicon/favicon-32x32.png'},
        { rel: 'icon', sizes: '16x16', href: 'favicon/favicon-16x16.png'},
        ]}

      meta={[
        { name: 'description', content: 'Freelance Product Designer based in London. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web design' },
        { name: 'keywords', content: 'Freelance Product Design, James Ciclitira, UI/UX, User Interface Design, User Experiences Design, London, Europe, HTML, CSS, React, iOS, Andriod, Mobile, Web, Sketch, Prototyping, Web development, Responsive Design, User Testing, Mobile Apps, Interaction Design, Front-end Development, Digital Product Design, Jimmy, Jimi, Tech' },
        { name: 'og:type', content: 'profile' },
        { name: 'og:title', content: 'James Ciclitira - Freelancer Product Designer' },
        { name: 'og:description', content: 'Freelance Product Designer based in London. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web design' },
        { name: 'og:url', content: 'https://jciclitira.com/' },
        { name: 'og:image', content: 'https://jciclitira.com/images/preview.png' },
        { name: 'profile:first_name', content: 'James' },
        { name: 'profile:last_name', content: 'Ciclitira' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@jjiiimmmy' },
        { name: 'twitter:site', content: '@jjiiimmmy' },
        { name: 'twitter:title', content: 'James Ciclitira - Freelancer Product Designer' },
        { name: 'twitter:description', content: 'Freelance Product Designer based in London. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web design' },
        { name: 'twitter:image', content: 'https://jciclitira.com/images/preview.png' },
      ]}
    />

    <Header />
    <div
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
