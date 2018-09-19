import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './index.css';
import SkipNav from 'react-skip-nav';
import "react-skip-nav/lib/style.css";


const Header = () =>
   <nav className='mw8 db center'>
    <div className="dt-l w-100 border-box pa3 pt4 ttu f6">
      <Link className="db dtc-l v-mid link hover-neon tc tl-l mb0-l mb2 " to="/" title="Home">K. Anthony</Link>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <a className="link dib mr3 hover-black" href="/HowIWork">Hire Me</a>
        <a className="link dib mr3 hover-black" href="/ContactMe">Contact</a>
        <a className="link dib mr3 hover-black" href="/blog">Blog</a>
      </div>
    </div>
  </nav>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="K. Anthony - Learning Experience Designer"
      link={[
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'icons/apple-touch-icon.png' },
      { rel: 'icon', type:'image/png', sizes: '192x192' , href: 'icons/icon-192x192.png' },
      { rel: 'icon', type:'image/png', sizes: '32x32', href: 'icons/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', sizes: '96x96', href: 'icons/icon-96x96.png' },
      { rel: 'icon', type:'image/png', sizes: '16x16', href: 'icons/favicon-16x16.png' },
      { rel: 'manifest', href: 'favicon/manifest.json'}
        ]}
      meta={[
        { name: 'description', content: 'Learning Experience Designer. Helping people do their work better through tech, transparency, and thoughtfulness.' },
        { name: 'keywords', content: 'Learning Experience Design, Kristin Anthony, UI/UX, LX, eLearning, training, courses, HTML, CSS, React, iOS, Android, Mobile, Web, Prototyping, Web development, Responsive Design, User Testing, Mobile Apps, Front-end Development, Open Source, K. Anthony, Tech' },
        { name: 'og:type', content: 'profile' },
        { name: 'og:title', content: 'K. Anthony - LX Designer' },
        { name: 'og:description', content: 'Learning Experience Designer. Helping people do their work better through tech, transparency, and thoughtfulness.' },
        { name: 'og:url', content: 'https://knanthony.com.com/' },
        { name: 'og:image', content: 'https://www.knanthony.com/images/logoColorWhite.png' },
        { name: 'profile:first_name', content: 'Kristin' },
        { name: 'profile:last_name', content: 'Anthony' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@anthkris' },
        { name: 'twitter:site', content: '@anthkris' },
        { name: 'twitter:title', content: 'K. Anthony - Consulting Learning Experience Designer' },
        { name: 'twitter:description', content: 'Learning Experience Designer. Helping people do their work better through tech, transparency, and thoughtfulness.' },
        { name: 'twitter:image', content: 'https://www.knanthony.com/images/logoColorWhite.png' },
      ]}
      htmlAttributes={{ lang : 'en' }}
    />
    <SkipNav
     id='skip-nav'
     text='skip to main content'
     targetDomId='main-content'/>
    <Header />
    <div id="main-content" className="center db">
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper