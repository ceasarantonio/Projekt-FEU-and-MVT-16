window.addEventListener("load", function () {
//let APIkey = 'c43b65c449aaafbb9f96169692dfd5cb';

    
    let temp1 = document.getElementById("temperature1");
    let temp2 = document.getElementById("temperature2");
    let temp3 = document.getElementById("temperature3");
    let temp4 = document.getElementById("temperature4");
    let temp5 = document.getElementById("temperature5");
    
    let cityName = document.getElementById("cityName");
    let day1 = document.getElementById("day1");
    let day2 = document.getElementById("day2");
    let day3 = document.getElementById("day3");
    let day4 = document.getElementById("day4");
    let day5 = document.getElementById("day5");
    
    let box1 = document.getElementById("1");
    let box2 = document.getElementById("2");
    let box3 = document.getElementById("3");
    let box4 = document.getElementById("4");
    let box5 = document.getElementById("5");

    let date1 = document.getElementById("date1");
    let date2 = document.getElementById("date2");
    let date3 = document.getElementById("date3");
    let date4 = document.getElementById("date4");
    let date5 = document.getElementById("date5");
    
    

    var url = 'http://api.openweathermap.org/data/2.5/forecast?id=2711533&mode=json&units=metric&appid=c43b65c449aaafbb9f96169692dfd5cb';
        
    
    
    
  /*  function getDataFromAjax(updateCityData){
             fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonResponse){
       console.log(jsonResponse) 
       
       cityName.innerHTML = jsonResponse.city.name;
            
            date1.innerHTML = jsonResponse.list[0].dt_txt;
            day1.innerHTML = jsonResponse.list[0].weather[0].description + "<br> Cloudiness: " + jsonResponse.list[0].clouds.all + "% ";
            temp1.innerHTML = Math.round(jsonResponse.list[0].main.temp) + "&deg;C";
            
        
            date2.innerHTML = jsonResponse.list[1].dt_txt;
            day2.innerHTML =  jsonResponse.list[1].weather[0].description + "<br> Cloudiness: " + jsonResponse.list[1].clouds.all + "% ";
            temp2.innerHTML = Math.round(jsonResponse.list[1].main.temp) + "&deg;C";
            
            
            date3.innerHTML = jsonResponse.list[2].dt_txt;
            day3.innerHTML = jsonResponse.list[2].weather[0].description + "<br> Cloudiness: " + jsonResponse.list[2].clouds.all + "% ";
            temp3.innerHTML = Math.round(jsonResponse.list[2].main.temp) + "&deg;C";
            
           
            date4.innerHTML = jsonResponse.list[3].dt_txt;
            day4.innerHTML =  jsonResponse.list[3].weather[0].description + "<br> Cloudiness: " + jsonResponse.list[3].clouds.all + "% ";
            temp4.innerHTML = Math.round(jsonResponse.list[3].main.temp) + "&deg;C";
            
             
            date5.innerHTML = jsonResponse.list[4].dt_txt;
            day5.innerHTML = jsonResponse.list[4].weather[0].description + "<br> Cloudiness: " + jsonResponse.list[4].clouds.all + "% ";
            temp5.innerHTML = Math.round(jsonResponse.list[4].main.temp) + "&deg;C";
            
            
            /// RUTA 1 ////
            if (jsonResponse.list[0].weather[0].description == "few clouds" || jsonResponse.list[0].weather[0].description == "broken clouds"){
                    box1.style.backgroundImage = "url('weatherGraphic/fewclouds.jpg')";

            }
            else if (jsonResponse.list[0].weather[0].description == "clear sky"){
                 box1.style.backgroundImage = 'url("weatherGraphic/clearsky.jpg")';

            }
             else if (jsonResponse.list[0].weather[0].description == "light rain") {
                 box1.style.backgroundImage = 'url("weatherGraphic/lightrain.jpg")';
       
            }
             else if (jsonResponse.list[0].weather[0].description == "rain"){
                 box1.style.backgroundImage = 'url("weatherGraphic/rain.jpg")';

            };

            
            
            //// RUTA 2 ////
            if (jsonResponse.list[1].weather[0].description == "few clouds" || jsonResponse.list[1].weather[0].description == "broken clouds"){
                 box2.style.backgroundImage = 'url("weatherGraphic/fewclouds.jpg")';
            }
            else if (jsonResponse.list[1].weather[0].description == "clear sky"){
                 box2.style.backgroundImage = 'url("weatherGraphic/clearsky.jpg")';
             
            }
             else if (jsonResponse.list[1].weather[0].description == "light rain") {
                 box2.style.backgroundImage = 'url("weatherGraphic/lightrain.jpg")';
    
            }
             else if (jsonResponse.list[1].weather[0].description == "rain"){
                 box2.style.backgroundImage = 'url("weatherGraphic/rain.jpg")';
            };
            
            
            /// RUTA 3 ///
            
            if (jsonResponse.list[2].weather[0].description == "few clouds" || jsonResponse.list[2].weather[0].description == "broken clouds"){
                 box3.style.backgroundImage = 'url("weatherGraphic/fewclouds.jpg")';
            
            }
            else if (jsonResponse.list[2].weather[0].description == "clear sky"){
                 box3.style.backgroundImage = 'url("weatherGraphic/clearsky.jpg")';
            }
             else if (jsonResponse.list[2].weather[0].description == "light rain") {
                 box3.style.backgroundImage = 'url("weatherGraphic/lightrain.jpg")';
            }
             else if (jsonResponse.list[2].weather[0].description == "rain"){
                 box3.style.backgroundImage = 'url("weatherGraphic/rain.jpg")';
            };
            
            
            //7 RUTA 4 ///
            if (jsonResponse.list[3].weather[0].description == "few clouds" || jsonResponse.list[3].weather[0].description == "broken clouds"){
                box4.style.backgroundImage = 'url("weatherGraphic/fewclouds.jpg")';

            }
            else if (jsonResponse.list[3].weather[0].description == "clear sky"){
                 box4.style.backgroundImage = 'url("weatherGraphic/clearsky.jpg")';
        
            }
             else if (jsonResponse.list[3].weather[0].description == "light rain") {
                 box4.style.backgroundImage = 'url("weatherGraphic/lightrain.jpg")';
            }
             else if (jsonResponse.list[3].weather[0].description == "rain"){
                 box4.style.backgroundImage = 'url("weatherGraphic/rain.jpg")';
            };

            /// RUTA 5 ///
             if (jsonResponse.list[4].weather[0].description == "few clouds" || jsonResponse.list[4].weather[0].description == "broken clouds"){
                 box5.style.backgroundImage = 'url("weatherGraphic/fewclouds.jpg")';
            }
            else if (jsonResponse.list[4].weather[0].description == "clear sky"){
                 box5.style.backgroundImage = 'url("weatherGraphic/clearsky.jpg")';
             
            }
             else if (jsonResponse.list[4].weather[0].description == "light rain") {
                 box5.style.backgroundImage = 'url("weatherGraphic/lightrain.jpg")';
    
            }
             else if (jsonResponse.list[4].weather[0].description == "rain"){
                 box5.style.backgroundImage = 'url("weatherGraphic/rain.jpg")';
            };
       
       updateCityData(cityName);
           
             });
    }; // Här slutar function getDataFromAjax
    
    
    
    
    class App extends React.Component{
       constructor(props){
           super(props);
           this.state = {
               cityName: 'Göteborg',
                   weatherBox1: {
                       temperature: 5,
                       time: 2,
                       description: 'clear sky'
                   },
                   weatherBox2: {
                       temperature: 5,
                       time: 2,
                       description: 'clear sky'
                   },
                   weatherBox3: {
                       temperature: 5,
                       time: 2,
                       description: 'clear sky'
                   },
                   weatherBox4: {
                       temperature: 5,
                       time: 2,
                       description: 'clear sky'
                   },
                   weatherBox5: {
                       temperature: 5,
                       time: 2,
                       description: 'clear sky'
                   }
               }
           };
       }
       componentDiMount(){
           getDataFromAjax(this.updateWeatherData);
           getDataFromAjax(this.updateCityData);
       }
       
       updateWeatherData(jsonResponse){
           this.setState({
               wheatherBox1: jsonResponse
           });
       }
       
       updateCityData(data){
           this.setState({
               cityName: data
           });
       }
       
       render(){
      
           /*let properties = 
                Object.keys(this.state.countries);
           let dataList = properties.map( p => this.state.countries[p])
        
           const newList = dataList.map(country => <ListItem name={country.name} population={country.population}/>)*/
                                        
                                        
           
        /*   return <ol>
                        <ListItem name={this.props.countries} population="9.56"/>
                        <ListItem name="norway" population="7.5"/>
                    </ol>;
       }
   }
   
   ReactDOM.render(
    <App/>,  // {{}} = tomt objekt
    document.getElementById("app-root")
);*/
    
    
     
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonResponse){
       console.log(jsonResponse) 
       
       cityName.innerHTML = jsonResponse.city.name;
            
            date1.innerHTML = jsonResponse.list[0].dt_txt;
            day1.innerHTML = jsonResponse.list[0].weather[0].description + "<br> Cloudiness: " + jsonResponse.list[0].clouds.all + "% ";
            temp1.innerHTML = Math.round(jsonResponse.list[0].main.temp) + "&deg;C";
            
        
            date2.innerHTML = jsonResponse.list[1].dt_txt;
            day2.innerHTML =  jsonResponse.list[1].weather[0].description + "<br> Cloudiness: " + jsonResponse.list[1].clouds.all + "% ";
            temp2.innerHTML = Math.round(jsonResponse.list[1].main.temp) + "&deg;C";
            
            
            date3.innerHTML = jsonResponse.list[2].dt_txt;
            day3.innerHTML = jsonResponse.list[2].weather[0].description + "<br> Cloudiness: " + jsonResponse.list[2].clouds.all + "% ";
            temp3.innerHTML = Math.round(jsonResponse.list[2].main.temp) + "&deg;C";
            
           
            date4.innerHTML = jsonResponse.list[3].dt_txt;
            day4.innerHTML =  jsonResponse.list[3].weather[0].description + "<br> Cloudiness: " + jsonResponse.list[3].clouds.all + "% ";
            temp4.innerHTML = Math.round(jsonResponse.list[3].main.temp) + "&deg;C";
            
             
            date5.innerHTML = jsonResponse.list[4].dt_txt;
            day5.innerHTML = jsonResponse.list[4].weather[0].description + "<br> Cloudiness: " + jsonResponse.list[4].clouds.all + "% ";
            temp5.innerHTML = Math.round(jsonResponse.list[4].main.temp) + "&deg;C";
            
            
            /// RUTA 1 ////
            if (jsonResponse.list[0].weather[0].description == "few clouds" || jsonResponse.list[0].weather[0].description == "scattered clouds"){
                 box1.style.backgroundImage = 'url("weatherGraphic/fewclouds.jpg")';
                 
            }
            else if (jsonResponse.list[0].weather[0].description == "broken clouds"){
                box1.style.backgroundImage = 'url("weatherGraphic/brokenclouds.jpg")';
            }
             else if (jsonResponse.list[0].weather[0].description == "light rain") {
                 box1.style.backgroundImage = 'url("weatherGraphic/lightrain.jpg")';
       
            }
             else if (jsonResponse.list[0].weather[0].description == "rain"){
                 box1.style.backgroundImage = 'url("weatherGraphic/rain.jpg")';

            };

            
            
            //// RUTA 2 ////
             if (jsonResponse.list[1].weather[0].description == "few clouds" || jsonResponse.list[1].weather[0].description == "scattered clouds"){
                 box2.style.backgroundImage = 'url("weatherGraphic/fewclouds.jpg")';
                 
            }
            else if (jsonResponse.list[1].weather[0].description == "broken clouds"){
                box2.style.backgroundImage = 'url("weatherGraphic/brokenclouds.jpg")';
            }
             else if (jsonResponse.list[1].weather[0].description == "light rain") {
                 box2.style.backgroundImage = 'url("weatherGraphic/lightrain.jpg")';
    
            }
             else if (jsonResponse.list[1].weather[0].description == "rain"){
                 box2.style.backgroundImage = 'url("weatherGraphic/rain.jpg")';
            };
            
            
            /// RUTA 3 ///
            
             if (jsonResponse.list[2].weather[0].description == "few clouds" || jsonResponse.list[2].weather[0].description == "scattered clouds"){
                 box3.style.backgroundImage = 'url("weatherGraphic/fewclouds.jpg")';
                 
            }
            else if (jsonResponse.list[2].weather[0].description == "broken clouds"){
                box3.style.backgroundImage = 'url("weatherGraphic/brokenclouds.jpg")';
            }
             else if (jsonResponse.list[2].weather[0].description == "light rain") {
                 box3.style.backgroundImage = 'url("weatherGraphic/lightrain.jpg")';
            }
             else if (jsonResponse.list[2].weather[0].description == "rain"){
                 box3.style.backgroundImage = 'url("weatherGraphic/rain.jpg")';
            };
            
            
            //7 RUTA 4 ///
             if (jsonResponse.list[3].weather[0].description == "few clouds" || jsonResponse.list[3].weather[0].description == "scattered clouds"){
                 box4.style.backgroundImage = 'url("weatherGraphic/fewclouds.jpg")';
                 
            }
            else if (jsonResponse.list[3].weather[0].description == "broken clouds"){
                box4.style.backgroundImage = 'url("weatherGraphic/brokenclouds.jpg")';
            }
            else if (jsonResponse.list[3].weather[0].description == "clear sky"){
                 box4.style.backgroundImage = 'url("weatherGraphic/clearsky.jpg")';
        
            }
             else if (jsonResponse.list[3].weather[0].description == "light rain") {
                 box4.style.backgroundImage = 'url("weatherGraphic/lightrain.jpg")';
            }
             else if (jsonResponse.list[3].weather[0].description == "rain"){
                 box4.style.backgroundImage = 'url("weatherGraphic/rain.jpg")';
            };

            /// RUTA 5 ///
             if (jsonResponse.list[4].weather[0].description == "few clouds" || jsonResponse.list[4].weather[0].description == "scattered clouds"){
                 box5.style.backgroundImage = 'url("weatherGraphic/fewclouds.jpg")';
                 
            }
            else if (jsonResponse.list[4].weather[0].description == "broken clouds"){
                box5.style.backgroundImage = 'url("weatherGraphic/brokenclouds.jpg")';
                
            }
            else if (jsonResponse.list[4].weather[0].description == "clear sky"){
                 box5.style.backgroundImage = 'url("weatherGraphic/clearsky.jpg")';
             
            }
             else if (jsonResponse.list[4].weather[0].description == "light rain") {
                 box5.style.backgroundImage = 'url("weatherGraphic/lightrain.jpg")';
    
            }
             else if (jsonResponse.list[4].weather[0].description == "rain"){
                 box5.style.backgroundImage = 'url("weatherGraphic/rain.jpg")';
            };
           
        
         /// REACT ////
            
       /* class Weather extends React.Component(){
            constructor(props){
                super(props);
            }
        render(){
            return  <p id="cityName">{jsonResponse.city.name}</p>;
                }
        }
            
            
        ReactDOM.render(
         <Weather></Weather>,
        document.getElementById("app-root")
    ); */
            
    });
    
    
    
    
    });