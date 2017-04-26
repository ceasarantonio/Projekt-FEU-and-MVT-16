
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
	{url:'https://www.ceasarantonio.github.io/Projekt-FEU-and-MVT-16/index.html', name:'Nyheter'},
	{url:'https://www.ceasarantonio.github.io/Projekt-FEU-and-MVT-16/sport.html', name:'Sport'},
	{url:'https://www.ceasarantonio.github.io/Projekt-FEU-and-MVT-16/noje.html', name:'Nöje'},
	{url:'https://www.ceasarantonio.github.io/Projekt-FEU-and-MVT-16/vader.html', name:'Väder'},
	{url:'https://www.ceasarantonio.github.io/Projekt-FEU-and-MVT-16/diskussion.html', name:'Diskussion'}
]

ReactDOM.render(<Navigation links={linkList} />, document.getElementById('menu'));