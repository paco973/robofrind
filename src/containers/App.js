import React, {Component} from 'react';
import CardList from'../components/CardList';
import ShearBox from '../components/ShearBox';
import Scroll from '../components/Scroll';

import './App.css'



class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			seachfield:''
		}
		
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots:users}))
		
		
	}

	onSheachChange =(event) =>{
		this.setState({seachfield:event.target.value})

	}

	render(){
		const filteredRobots= this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.seachfield.toLowerCase());
		})
		if(this.state.robots.lenght===0){
			return <h1>Loading</h1>
		}else{
			return(
			
					<div className='tc'>
						<h1 className='f1'> RoboFriend </h1>
						<ShearBox sheachChange={this.onSheachChange}/>
						<Scroll>
							<CardList robots={filteredRobots}/>
						</Scroll>
					</div>
				)
		}
		

	}
	
}

export default App;