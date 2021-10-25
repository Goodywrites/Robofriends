import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css';

  
class App extends Component {
    constructor() {
        super()
        this.state = {  
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        console.log(this.state.robots)
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc'> 
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                {/* {
                    !filteredRobots.length && <p className='f1'> Robot not found</p>
                } */}
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;