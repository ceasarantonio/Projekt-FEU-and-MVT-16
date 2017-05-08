
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBUdV0YHP1-dCiVgdejASvwWiwkwfA4wFg",
    authDomain: "discussion-news.firebaseapp.com",
    databaseURL: "https://discussion-news.firebaseio.com",
    projectId: "discussion-news",
    storageBucket: "discussion-news.appspot.com",
    messagingSenderId: "471874495966"
  };
  firebase.initializeApp(config);


let getID = id => document.getElementById(id);



// Initialize Firebase
const auth = firebase.auth();
// Initialize GoogleAuthProvider
var googleProvider = new firebase.auth.GoogleAuthProvider();


// DISPLAY IF AUTH
auth.onAuthStateChanged(user => {
  if (user) {console.log(user)}
});


class DiscussionApp extends React.Component {
  constructor(props) {
    super(props);
    this.componentWillMount = this.componentWillMount.bind(this);
  
  }
  componentWillMount() {
    firebase.auth().signInWithPopup(googleProvider)
    .then(function(result) {
      console.log(result)
    })
    .catch(function(error) {
      console.log(error.message);
    });
  }
  render() {
    return(
      <div>
        <button onClick={this.componentWillMount}>Will it mount?</button>
        
      </div>
    );
  }
}

ReactDOM.render(<DiscussionApp />, document.getElementById('discussion'));
