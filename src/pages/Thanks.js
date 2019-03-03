import React from 'react'
import {Link} from "gatsby";
import Layout from '../components/layout';

const Thanks = () =>
	<Layout>
		<div className='mw8 center db tc'>
			<h1>Message sent</h1>
			<iframe title="Thanks for submitting" src="https://giphy.com/embed/bU6GKBpWaJ4tO" height="280" frameBorder="0"></iframe>
			<Link className='tc db' to='/'>Return home</Link>
		</div>
	</Layout>

export default Thanks
