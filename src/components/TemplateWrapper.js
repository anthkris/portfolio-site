import React from 'react';
import Helmet from 'react-helmet';
import SkipNav from 'react-skip-nav';
import Header from './Header';
import "react-skip-nav/lib/style.css";

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="K. Anthony - Learning Experience Designer"
      link={[
      { rel: 'apple-touch-icon', sizes: '57x57', href: 'favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: 'favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: 'favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: 'favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: 'favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: 'favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: 'favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: 'favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-icon-180x180.png' },
      { rel: 'icon', type:'image/png', sizes: '192x192' , href: 'favicon/android-icon-192x192.png' },
      { rel: 'icon', type:'image/png', sizes: '32x32', href: 'favicon/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', sizes: '96x96', href: 'favicon/favicon-96x96.png' },
      { rel: 'icon', type:'image/png', sizes: '16x16', href: 'favicon/favicon-16x16.png' },
      { rel: 'manifest', href: 'favicon/manifest.json'}
        ]}
      meta={[
        { name: 'description', content: 'Learning Experience Designer. Helping people do their work better through tech, transparency, and thoughtfulness.' },
        { name: 'keywords', content: 'Learning Experience Design, Kristin Anthony, UI/UX, LX, eLearning, training, courses, HTML, CSS, React, iOS, Android, Mobile, Web, Prototyping, Web development, Responsive Design, User Testing, Mobile Apps, Front-end Development, Open Source, K. Anthony, Tech' },
        { name: 'og:type', content: 'profile' },
        { name: 'og:title', content: 'K. Anthony - LX Designer' },
        { name: 'og:description', content: 'Learning Experience Designer. Helping people do their work better through tech, transparency, and thoughtfulness.' },
        { name: 'og:url', content: 'https://knanthony.com.com/' },
        { name: 'og:image', content: 'https://jciclitira.com/images/preview.png' },
        { name: 'profile:first_name', content: 'Kristin' },
        { name: 'profile:last_name', content: 'Anthony' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@anthkris' },
        { name: 'twitter:site', content: '@anthkris' },
        { name: 'twitter:title', content: 'K. Anthony - Consulting Learning Experience Designer' },
        { name: 'twitter:description', content: 'Learning Experience Designer. Helping people do their work better through tech, transparency, and thoughtfulness.' },
        { name: 'twitter:image', content: 'https://jciclitira.com/images/preview.png' },
      ]}
      htmlAttributes={{ lang : 'en' }}
    />
    <SkipNav
     id='skip-nav'
     text='skip to main content'
     targetDomId='main-content'/>
    <Header />
    <div id="main-content" className="center db">
      {children}
    </div>
  </div>

export default TemplateWrapper;