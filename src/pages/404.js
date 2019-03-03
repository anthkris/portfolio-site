import React from 'react';
import Layout from '../components/layout';

const NotFoundPage = () =>
	<Layout>
	  <div className='mw8 center db tc'>
	    <h1>NOT FOUND</h1>
	    <iframe title="404 not found gif" src="https://giphy.com/embed/11VrJR0acdEe9a" width="580" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
	    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	  </div>
	</Layout>

export default NotFoundPage;
