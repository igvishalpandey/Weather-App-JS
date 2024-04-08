const API_KEY = `5f0cc6e37dba418fa3c111915241903`

const form= document.querySelector("form");
const weather= document.querySelector("#weather");
const search= document.querySelector("#search");

const getWeather= async (city)=>{
    const url= `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
    const response = await fetch(url);
    const data= await response.json();
    console.log(data);
    return showWeather(data);
};

const showWeather =(data)=>{
    if(data.error.code == "1006" || data.error.message=== "No matching location found."){
        weather.innerHTML = `<h2> City Not Found!! </h2>`
        weather.h2.style.color= "#fff";
    }else{ 
    weather.innerHTML = `
    <div>
            <img src="${data.current.condition.icon}" alt="">
        </div>
        <div>
            <h2>${data.current.temp_c} ℃</h2>
            <h4>${data.current.condition.text} </h4>
        </div>
    `;
    }
};

form.addEventListener('submit', (e)=>{

    getWeather(search.value);
    e.preventDefault();
})