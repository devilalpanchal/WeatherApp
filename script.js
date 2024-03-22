btn.addEventListener("click", (e) => {
  e.preventDefault();
  let value = city.value;
  console.log(value);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=ea48e8e8d002da56774c1298f773db7e`;
  fetchData(url);
});

async function fetchData(url) {
  try {
    //   resovle logic
    let response = await fetch(url);
    document.querySelector(".card-container").innerHTML = `<h1 class="loading"></h1>`;
    console.log(response);
    if (!response.ok) {
      document.querySelector(
        ".card-container"
      ).innerHTML = `<h1>Data not found</h1>`;
    }
    let data = await response.json();
    console.log(data);
    // document.querySelector(".card-container").innerHTML += `// += karane par api data ke sath sath loading bhi aa Jayega or 
    document.querySelector(".card-container").innerHTML = `
      <div class='NameOftemAndWind'>
      <div>  
      <h1 class='cityName'>City Name:-${data.name}</h1>
      <p class='spped'>Humidity:- &nbsp; ${data.main.humidity}</p>    
      <p class='spped'>Tempreture:-  &nbsp; ${data.main.temp}</p>    
      <p class='spped'>Wind-Speed:-  &nbsp; ${data.wind.speed}</p>
      </div>  
      <div class="currentPagelocation">  
     
      <p class='spped2'>HostName:-  &nbsp; ${navigator.platform}</p>
      </div>  

       
      </div>  
      <div class="cloudsAndLevel">
      <div class='clouds'>
      <p class='spped1'>Clouds :-  &nbsp; ${data.weather[0].description}</p>  
      <i class="fa-solid fa-cloud fa-flip-horizontal fa-2xl oneClode" style="color: #f4fafa;"></i>
      <i class="fa-solid fa-cloud fa-flip-horizontal fa-xl oneClode" style="color: #f4fafa;"></i>
      <i class="fa-solid fa-cloud fa-flip-horizontal fa-lg oneClode" style="color: #f4fafa;"></i>
      <i class="fa-solid fa-cloud fa-flip-horizontal fa-sm oneClode" style="color: #f4fafa;"></i>
      <i class="fa-solid fa-cloud fa-flip-horizontal fa-xs oneClode" style="color: #f4fafa;"></i>
      <i class="fa-solid fa-cloud fa-flip-horizontal fa-2xs oneClode" style="color: #f4fafa;"></i>
      </div>

      <div class="level">
      <h1>Ground-level:-&nbsp; ${data.main.feels_like}</h1>
      <h1>Fells-Like:-&nbsp;${data.main.grnd_level}</h1>
      <h1>Sea-level:-&nbsp;${data.main.sea_level}</h1>
      </div> 

    </div>
      <div class="Sunriseandset"> 
      <div class="sunrise">
      <h1>Sunrise:-&nbsp; ${data.sys.sunrise}</h1>
      </div> 
      <div class="sunSet">
      <h1>Sunset:- &nbsp; ${data.sys.sunset}</h1>
      </div> 
      </div> 
    `;
    // ).innerHTML = `<h1>${JSON.stringify(data)}</h1>`
  } catch {
    // reject logic
    (err) => {
      console.log(err);
    };
  }
}

// to current location

async function fetchDetails() {
  try {
    let url1 = "https://jsonip.com";
    let response = await fetch(url1);
    let data1 = await response.json();
    let url2 = `https://ipapi.co/${data1.ip}/json/`;
    let response1 = await fetch(url2);

    let data = await response1.json();
    console.log(data);
    // let lat = data.latitude;
    // let lon = data.longitude;
    let city = data.city;
    let region = data.region;
    // let organization = data.org;
    document.querySelector(".currentPagelocation").innerHTML = 
    `
    <h1 class='cityName'>City Name:-${city}</h1>
      
    <p class='spped2'>Region:-  &nbsp; ${region  }</p>   
    `
   
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDetails();
 