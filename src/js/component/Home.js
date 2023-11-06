import React from "react";

//import images
import rigoImage from "../../img/rigo-baby.jpg";

//import js files
import Navbar from './Navbar';
import Card from './Card';
import Cards from './Cards';
import Footer from './Footer';
import Jumbotron from './Jumbotron';

//create your first component
const Home = () => {
	// Variables Here
	let cardTextVariants = [
		{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.' },
		{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis betae culpa natus architecto.' },
		{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.' },
		{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis betae culpa natus architecto.' }
	];

	return (
		<>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<Jumbotron />
					</div>
				</div>
				<div className='row'>
					{cardTextVariants.map((value) => {
						return <Card cardText={value.text} />
					})}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
