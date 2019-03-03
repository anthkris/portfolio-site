import React from 'react';
// import Search from '../components/Search.js';
import {Link} from 'gatsby-link';

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
    {/*<Search />*/}
  </nav>

export default Header;