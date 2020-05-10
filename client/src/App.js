import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
		};
	}

	onChange = (e) => {
		switch (e.target.name) {
			default:
				this.setState({ [e.target.name]: e.target.value });
		}
	}

	onSubmit = (e) => {
		e.preventDefault();

		axios.post('/', this.state )
			.then((result) => {
				// access results...
			});
	}

	render() {
		const { name } = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<input
					type="text"
					name="name"
					value={name}
					onChange={this.onChange}
				/>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default App;
