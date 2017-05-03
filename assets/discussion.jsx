


class DiscussionApp extends React.Component {
  constructor(props) {
    super(props);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    var firedb
    
    /*
    this.firebaseRef.on("child_added", function(dataSnapshot) {
      this.items.push(dataSnapshot.val());
      this.setState({
        items: this.items
      });
    }.bind(this));
    */
  }
  render() {
    return(
      <div>
        
      </div>
    );
  }
}

ReactDOM.render(<DiscussionApp />, document.getElementById('discussion'));
