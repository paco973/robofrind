import React, {Component} from 'react';
import CardList from'../components/CardList';
import ShearBox from '../components/ShearBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
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
		const {robots, seachfield}= this.state;
		const filteredRobots= robots.filter(robot =>{
			return robot.name.toLowerCase().includes(seachfield.toLowerCase());
		})
		return robots.lenght ===0 ?
			<h1>Loading</h1> :
			(			
				<div className='tc'>
					<h1 className='f1'> RoboFriend </h1>
					<ShearBox sheachChange={this.onSheachChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots}/>
						</ErrorBoundry>
						
					</Scroll>
				</div>
			)
		}
	
}

export default App;