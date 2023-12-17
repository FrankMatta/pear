import './App.css';
import React from 'react';
import Details from './components/Details';
import Header from './components/Header';
import Hero from './components/Hero';
import HowPearDifferent from './components/HowPearDifferent';
import WhatIsPear from './components/WhatIsPear';
import StartPearing from './components/StartPearing';
import Footer from './components/Footer';

function App() {
	return (
		<div className='mainContainer'>
			<Header />
			<Hero />
			<WhatIsPear />
			<HowPearDifferent />
			<Details />
			<StartPearing />
			<Footer />
		</div>
	);
}

export default App;
