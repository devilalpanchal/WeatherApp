btn.addEventListener("click", (e) => {
  e.preventDefault();
  let value = city.value;
  console.log(value);
  let urls = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=ea48e8e8d002da56774c1298f773db7e`;
  fetchData(urls);
});

async function fetchData(url) {
  try {
    //   resovle logic
    document.querySelector(
      ".card-container"
    ).innerHTML = `<h1 class="loading"></h1>`;
    let response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      document.querySelector(
        ".card-container"
      ).innerHTML = `<h1>Data not found</h1>`;
    }
    let data = await response.json();
    console.log(data);
    document.querySelector(".card-container").innerHTML = `
      <div class='NameOftemAndWind'>
      <h1 class='cityName'>City Name:-${data.name}</h1>
      <p class='spped'>Humidity:- &nbsp; ${data.main.humidity}</p>    
      <p class='spped'>Tempreture:-  &nbsp; ${data.main.temp}</p>    
      <p class='spped'>Wind-Speed:-  &nbsp; ${data.wind.speed}</p>  
      </div>  

      <div class='clouds'>
      <p class='spped1'>Clouds :-  &nbsp; ${data.weather[0].description}</p>  
      <i class="fa-solid fa-cloud fa-flip-horizontal fa-2xl oneClode" style="color: #f4fafa;"></i>
      <i class="fa-solid fa-cloud fa-flip-horizontal fa-xl oneClode" style="color: #f4fafa;"></i>
      <i class="fa-solid fa-cloud fa-flip-horizontal fa-lg oneClode" style="color: #f4fafa;"></i>
      <i class="fa-solid fa-cloud fa-flip-horizontal fa-sm oneClode" style="color: #f4fafa;"></i>
      <i class="fa-solid fa-cloud fa-flip-horizontal fa-xs oneClode" style="color: #f4fafa;"></i>
      <i class="fa-solid fa-cloud fa-flip-horizontal fa-2xs oneClode" style="color: #f4fafa;"></i>
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
