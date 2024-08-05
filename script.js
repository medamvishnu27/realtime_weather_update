

//accesing all the required elements

let locEle=document.querySelector("#s-value")
let btnEle=document.querySelector(".btn")
let city=document.querySelector(".cityname")
let tempele=document.querySelector(".Temp")
let iconele=document.querySelector(".img")
let descele=document.querySelector(".desc")
let windEle=document.querySelector(".wind")
let countryEle=document.querySelector(".country")
let humidityele=document.querySelector(".hymidity")
let feels_likeele=document.querySelector(".feels")
let dateEle=document.querySelector(".datetime")
// console.log(locEle,btnEle,city,temp,icon,desc,windEle,countryEle)
let Apikey="4a93a6d80cb3fa58deffa8f5c8b69e0f"
//funcnollity to display the weather minformation dynamically based on user input
btnEle.addEventListener("click",()=>{
    let location=locEle.value
    if (location===" ") {
        alert("enter the location")
        
    } else {
      url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${Apikey}`;
      fetch(url)
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data)
        let {name}=data
        let {description,icon}=data.weather[0]
        let {temp,humidity,feels_like}=data.main
        let {speed}=data.wind
        let {country}=data.sys
       

        //  changing the details of weather dynamically
       city.innerHTML=name
       descele.innerHTML=`<li class="list-group-item desc">${description}</li>`;
       iconele.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
       tempele.innerHTML=`<span class="Temp display-1 "><b class="my-auto">${Math.round(temp-273)}<span class="deg">&deg;</span>c</b></span>`
       windEle.innerHTML=`<li class="list-group-item windspeed">Wind :${speed}km/h</li>`;
       countryEle.innerHTML=`<li class="list-group-item country">Country :${country}</li>`
       humidityele.innerHTML=`<li class="list-group-item humidity">Humidity :${humidity}%</li>`;
       feels_likeele.innerHTML=`<li class="list-group-item  feels ">Feels-Like:${Math.round(feels_like-273)}<span class="deg">&deg;</span>c</b></span></li>`
    
     })
}
});
let d=new Date();
dateEle.innerHTML=d;
