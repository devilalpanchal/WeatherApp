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

   
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDetails();