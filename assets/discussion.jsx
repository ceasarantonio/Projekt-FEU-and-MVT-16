
// FIREBASE
const auth = firebase.auth();


let Gunnar = {name:'Gunnar', age:'20'}



let getID = id => document.getElementById(id);

class DiscussionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages:'', messageAmount:null, user:null,
    }
    this.sendNewMessage = this.sendNewMessage.bind(this);
    this.completeAuthentication = this.completeAuthenticatíon.bind(this);
  }
  componentDidMount() {
    const root = firebase.database().ref();
    firebase.database().ref('messages').on('value', snap => {
      let list = snap.val();
      console.log(list)
      if(list != null) {
        let msgs = list.map((object, key) => {
          return(
            <li key={key}>{object.message}</li>
          );
        })
      
        this.setState({
          messages:msgs
        })

        this.setState({
          messageAmount:list.length
        })

      }
    });
  }
  completeAuthentication(name) {
    this.setState({name:name});
    this.setState({loggedIn:true})
  }
  sendNewMessage(object) {
    console.log(object)
    firebase.database().ref('messages/' + this.state.messageAmount).set({name:this.state.name, message:object.message, time:object.time});
  }
  render() {
    return(
      <div>
        {this.state.messages}
        {(this.state.loggedIn)
          ? <InputForm newMessage={this.sendNewMessage}  />
          : <AuthForm completeAuthenticate={this.authenticate} />}
      </div>);}}

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.constructMessage = this.constructMessage.bind(this);}
  constructMessage(event) {
    event.preventDefault();
    // Get value
    let inputMessage = event.target.querySelector('#inputMessage'); 
    // Get Time
    let date = new Date(); let timeString = date.toLocaleTimeString();
    // Create message object
    let newObject = {name:user, message:(inputMessage.value), time:timeString};
    // Call list updater
    this.props.newMessage(newObject);
    // Clear input
    inputMessage.value = '';}
  render() {
    return(
      <form onSubmit={this.constructMessage} >
        <h2>Add new</h2>
        <input type="text" id="inputMessage" placeholder="Message" />
        <input type="submit" />
      </form>);}}

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginEvent = this.handleLoginEvent.bind(this);
  }
  handleLoginEvent(event) {
    event.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
    .then(function(result) {
      let name = result.user.displayName;
      console.log(name)

      props.completeAuthentication(name);
    })
    .catch(function(error) {
      console.error(error)
    });
  }
  render() {
    return(
      <div>
        <h3>Log in to post:</h3>
        <form onSubmit={this.handleLoginEvent}>
          <button type="submit">Log in with Google</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<DiscussionApp />, getID('discussion'));


/*

auth.onAuthStateChanged(user => {
  if(user) {
    firebase.database().ref('messages/').on('value', snapshot => {
      updateMessages(snapshot.val());
      document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;})
    firebase.database().ref('users/').on('value', snapshot => {
      checkOnlineUsers(snapshot.val());});
    return(
      <div>
        <DiscussionMessages />
        <Logout />
      </div>
    );
  }
  else {
    return(
      <div>
        <DiscussionMessages />
        <Login />
      </div> 
    )
    
  }
});





// SIGN UP
btnSignup.addEventListener('click', e => {
  let promise = auth.createUserWithEmailAndPassword(signupEmail.value, signupPassword.value);
    promise.then(user => {
      createNewUser(user.uid, signupName.value, signupEmail.value);})
    promise.catch(e => 
      console.log(e.message));});

// CREATE USER
function createNewUser(uid, name, email) {
    firebase.database().ref('users/' + uid).set({name: name, email: email, online: true});
    setCurrentUser(name, email, uid);}

// LOG IN
btnLogin.addEventListener('click', event => {
  let promise = auth.signInWithEmailAndPassword(loginEmail.value, loginPassword.value);
    promise.then(user => {
      firebase.database().ref('users/').once('value', snapshot => {
        let database = snapshot.val();
        for(let object in database) {
          if(database[object].email === loginEmail.value) {
            setCurrentUser(database[object].name, database[object].email, user.uid);}}});})
    promise.catch(error => 
      console.log(error.message));});

// POST
btnPost.addEventListener('click', event => {post();});

function post() {
  let msgText = document.getElementById('messageText').value;
  if(msgText) {
    let id = 'msg' + posts;
      firebase.database().ref('messages/' + id).set({name:currentUserName, message:msgText, time:new Date().toLocaleString(), likes:null, dislikes:null, id:id});
      msgText = '';
    document.getElementById('messageText').value = '';}}


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

*/
