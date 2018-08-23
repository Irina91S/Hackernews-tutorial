import React, { Component } from 'react';
import '../style/App.css';
import LinkList from './LinkList'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
				</header>
				<LinkList/>
			</div>
		);
	}
}

export default App;
