
class Navigation extends React.Component {
	constructor(props) {super(props);}
	render() {
		let meny = this.props.links.map((object, index) => {
			return (<a href={object.url} className='menuItem' key={index}>{object.name}</a>);
		});
		return(<nav>{meny}</nav>);
	}
}

var linkList=[
	{url:'https://www.google.se/', name:'Nyheter'},
	{url:'https://www.google.se/', name:'Sport'},
	{url:'https://www.google.se/', name:'Nöje'},
	{url:'https://www.google.se/', name:'Väder'},
	{url:'https://www.google.se/', name:'Diskussion'}
]

ReactDOM.render(<Navigation links={linkList} />, document.getElementById('menu'));