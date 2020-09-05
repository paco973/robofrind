import React, {Component} from 'react';
import { connect} from 'react-redux';
import CardList from'../components/CardList';
import ShearBox from '../components/ShearBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import {setSearchField, requestRobots} from '../actions';


const mapStateToProps = state =>{
	return{
		searchField: state.searchRobots.searchField,
		robots : state.requestRobots.robots,
		isPendind: state.requestRobots.isPendind,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		onSheachChange: (event)=> dispatch(setSearchField(event.target.value)),
		onRequestRobots:() => dispatch(requestRobots())

		
	}
}

class App extends Component{
	

	componentDidMount(){
		this.props.onRequestRobots();
	}

	render(){

		const {searchField, onSheachChange, robots, isPendind} = this.props;
		console.log(searchField);
		const filteredRobots= robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPendind ?
			<h1>Loading</h1> :
			(			
				<div className='tc'>
					<h1 className='f1'> RoboFriend </h1>
					<ShearBox sheachChange={onSheachChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots}/>
						</ErrorBoundry>
						
					</Scroll>
				</div>
			)
		}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);