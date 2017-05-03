
(function loadDoc(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      ReactDOM.render(
        <SportNews list={JSON.parse(this.responseText)} />, 
        document.getElementById('SportNews')
      );
    }
  };
  xhttp.open("GET", "https://newsapi.org/v1/articles?source=talksport&sortBy=top&apiKey=3c28b6d633ce4a0d86aa0e238453b4cf", true);
  xhttp.send();
}());

    



class SportNews extends React.Component {
    constructor(props) {super(props);}
    render() {
        let renderer = this.props.list.articles.map((object, key) => {

            if(object.urlToImage) {var imgToCurrentArticle = <img src={object.urlToImage} width="100%" />}
            else {var imgToCurrentArticle = <br/>};

            return(
                <section key={key}>
                    <h2>{object.title}</h2>
                    <p>{object.description}</p>
                    {imgToCurrentArticle}
                    <p>{object.author}</p>
                    <p>{object.publishedAt}</p>
                    <a href={object.url}> Read More </a>
                </section>
            );
        });
        return(<div>{renderer}</div>);
    }
}