const ProductList = React.createClass({
	render: function() {
		return (
			<div className='ui items'>
				Hello, friend! I am a box.
			</div>
		);
	},
})

ReactDOM.render(
	<ProductList />,
	document.getElementById('content')
);
