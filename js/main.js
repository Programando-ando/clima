const consultarAPI = async () => {

    var ciudad = document.getElementById("ciudad").value;
    var pais = document.getElementById("pais").value;

    if (ciudad.trim() == "") {
      document.getElementById("divResultado").innerHTML = `
      <div class="text-center">
      <h1 class="m-auto mt-4">Resultado</h1>
    </div>
  `;
  return;
    }

    const apikey = "cbd324ecc7d382a21549bd095a12f310";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric&lang=es`);


        const json = await response.json();
        console.log(json);

        const { name, main, timezone, weather} = json;

        document.getElementById("divResultado").innerHTML = `
            <div class="text-center">
            <h1><b>Ciudad: ${name}</b></h1>
            <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" width="100px" height="100px">
            <h1><b>${main.temp} C°</b></h1>
            <h4>DESC: ${weather[0].description}</h4>
            <h6>MIN: ${main.temp_min} C°</h6>
            <h6>MAX: ${main.temp_max} C°</h6>
            <h6>PRESS: ${main.pressure} hPa</h6>
            <h6>HUM: ${main.humidity}%</h6>
            <h6>UTC: ${parseInt(timezone) / 3600}</h6>
          </div>
        `;
    }
    
    consultarAPI();