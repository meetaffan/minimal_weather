 // const apiKey = "810fd98fc6b59dcbfde1687bbe5b5c5b";
        // const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Pune";

        // async function checkWeather(){
        //     const response = await fetch(apiUrl + `&appid=${apiKey}`);
        //     var data = await response.json();   //await was missing here

        //     console.log(data);

        
        //     document.querySelector(".city").textContent = data.name;
        //     // document.querySelectorAll(".temp").innerHTML = data.main.temp;
        //     // document.querySelector(".humidity").innerHTML = data.main.humidity;
        //     // document.querySelector(".wind").innerHTML = data.wind.speed;


        // // }

        const apiKey = "810fd98fc6b59dcbfde1687bbe5b5c5b";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
    
        
        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
            // Respone code 404 means api is not able to fetch as the city name entered is incorrect
    
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else{
              
                const data = await response.json();
    
                // console.log(data);
    
                document.querySelector(".city").textContent = data.name;
                document.querySelector(".temp").textContent = data.main.temp + "°C";
                document.querySelector(".humidity").textContent = data.main.humidity + "%";
                document.querySelector(".wind").textContent = data.wind.speed + "km/h";
    
                if(data.weather[0].main =="Clouds"){
                    weatherIcon.src = "images/clouds.png";
                }
                else if (data.weather[0].main =="Clear"){
                    weatherIcon.src = "images/clear.png";
                }
                else if (data.weather[0].main =="Drizzle"){
                    weatherIcon.src = "images/drizzle.png";
                }
                else if (data.weather[0].main =="Mist"){
                    weatherIcon.src = "images/mist.png";
                }
                else if (data.weather[0].main =="Snow"){
                    weatherIcon.src = "images/snow.png";
                }
                else if (data.weather[0].main =="Rain"){
                    weatherIcon.src = "images/rain.png";
                }
    
                // display block means the data will be displayed, if kept none nothing will be displayed other than input box
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }        
    
        }
    
    
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value)
        })