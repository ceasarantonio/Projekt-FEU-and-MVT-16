window.addEventListener("load", function () {
    let titleTwo = document.getElementById('titleTwo');
    let author = document.getElementById('author');
    let description = document.getElementById('description');
    let url = document.getElementById('url');
    
    
  var api = 'https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=651da2453929401d95477408ddb2aab7';
    var ajax = new XMLHttpRequest();
      ajax.open('get', api);
      ajax.onreadystatechange = function(){
        if (ajax.status == 200 && ajax.readyState == 4) {
          let response = JSON.parse(ajax.responseText);
            console.log(response);
            console.log("ajax.list: " + window.list);
  
            console.log('Author ?', response.articles[4].author);
            console.log('description ?', response.articles[4].description);
            console.log('title ?', response.articles[4].title);
            console.log('url ?', response.articles[4].url);
            
          
          titleTwo.innerHTML = `Title :  ${response.articles[4].title}`;
  author.innerHTML = `Author :  ${response.articles[4].author}`;
  description.innerHTML = `Description :  ${response.articles[4].description}`;
  url.innerHTML = `Url :  ${response.articles[4].url}`;
        }
      };
    ajax.send(); 
  
  
    
});

//class 