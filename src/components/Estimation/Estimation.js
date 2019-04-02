import React, { Component } from 'react';

class Estimation extends Component {
	render() {
		return (
			<div>
				<h1>Estimation</h1>
				{this.props.children}
			</div>
		);
	}
}

export default Estimation;