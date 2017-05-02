window.onload = function(){
    
    var httpRequest;
    var newsList;
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status == 200){
                newsList = JSON.parse(this.responseText);
                document.getElementById("headLine").innerHTML = newsList.articles[1].title;
                document.getElementById("brodText").innerHTML = newsList.articles[1].description;
                document.getElementById("author").innerHTML = `Author: ${newsList.articles[1].author} || Published at:${newsList.articles[1].publishedAt}`;
                console.log(httpRequest.response);
            }
            else if (httpRequest.status == 400) {
                console.log('There was an error 400');
            }
            else {
                console.log(`Returned error was ${httpRequest.status}`);
            }
        }
    };
    
    httpRequest.open('GET', 'https://newsapi.org/v1/articles?source=talksport&sortBy=top&apiKey=3c28b6d633ce4a0d86aa0e238453b4cf', true);
    //httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send();
    
    
}