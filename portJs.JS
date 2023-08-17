var FirstLift = document.getElementById("left-one");
var SecondLift = document.getElementById("left-tow");
var ThirdLift = document.getElementById("left-three");
var input;
var input2;
const governate_validate = document.getElementById("governate");
var LocDis = document.getElementById("LocDis");


function GO_TO_Select_ur_Country() {
   

    if(governate_validate.value === "none"){
        // alert("Please, select your governate at first");
        governate_validate.style.outlineWidth="3px";
        governate_validate.style.outlineStyle="solid";
        governate_validate.style.outlineColor="#591014";
        
    }
    else {      
        FirstLift.style.display="none";
        SecondLift.style.display="var(--bg-clr)";
        governate_validate.style.outlineWidth="none";
        governate_validate.style.outlineStyle="none";
        governate_validate.style.outlineColor="none";
    }
   
  }
  function back_to_select_government() {
    SecondLift.style.display="none";
    FirstLift.style.display="var(--bg-clr)";
   
  }

  function Go2() {
    ThirdLift.style.display="var(--bg-clr)";
    SecondLift.style.display="none";
   
  }

  function Back_To_Select_Country() {
    ThirdLift.style.display="none";
    SecondLift.style.display="var(--bg-clr)";
   
  }

  /********************************************************************************* */
  function getLoc() {
    LocDis.style.display="none";
  } 

  /********************************************************************************** */

  function changeDisplay(){
    var govern=document.getElementById("governate").value;
    
      if (govern == 'القاهرة') {
          input = document.getElementById("governate");
           input2 = document.getElementById("place_cairo");
      document.getElementById("place_cairo").style.display="block";
      document.getElementById("place_alex").style.display="none";
      document.getElementById("place_qena").style.display="none";
      document.getElementById("place_assuit").style.display="none";
    }

      else if (govern == 'الاسكندرية') {
          input = document.getElementById("governate");
          input2 = document.getElementById("place_alex");
      document.getElementById("place_alex").style.display="block";
      document.getElementById("place_cairo").style.display="none";
      document.getElementById("place_qena").style.display="none";
      document.getElementById("place_assuit").style.display="none";
      
    }
      else if (govern == 'قنا') {
          input = document.getElementById("governate");
          input2 = document.getElementById("place_qena");
      document.getElementById("place_qena").style.display="block";
      document.getElementById("place_alex").style.display="none";
      document.getElementById("place_cairo").style.display="none";
      document.getElementById("place_assuit").style.display="none";
      
    }

      else if (govern == 'أسيوط') {
          input = document.getElementById("governate");
          input2 = document.getElementById("place_assuit");
      document.getElementById("place_assuit").style.display="block";
      document.getElementById("place_alex").style.display="none";
      document.getElementById("place_qena").style.display="none";
      document.getElementById("place_cairo").style.display="none";
    }
      else {
          input = document.getElementById("governate");
          input2 = document.getElementById("place_qena");
      document.getElementById("place_qena").style.display="block";
      document.getElementById("place_cairo").style.display="none";
      document.getElementById("place_alex").style.display="none";
      document.getElementById("place_assuit").style.display="none";
    }
    
}

/**************************** ************************************************************************/

function initMap() {

    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
        center: new Microsoft.Maps.Location(30.0444, 31.2357),
        zoom: 12,
        dir: 'rtl'
    });

    function zoomIn(map, level) {
        var currentLevel = map.getZoom();
        if (level > currentLevel) {
            var interval = setInterval(function () {
                currentLevel = map.getZoom();
                if (currentLevel >= level) {
                    clearInterval(interval);
                } else {
                    map.setView({ zoom: currentLevel + 1, animate: true });
                }
            }, 100);
        }
    }

    input = document.getElementById("governate");
    input2 = document.getElementById("place_alex");
    input3 = document.getElementById("place_assuit");
    input4 = document.getElementById("place_qena");
    input5 = document.getElementById("place_cairo");
    var combined = input.value + " " + input2.value;

    input.addEventListener("change", function () {
        combined = input.value + " " + input2.value;
        console.log(combined);
    });

    input2.addEventListener("change", function () {
        combined = input.value + " " + input2.value;
        console.log(combined);
    });

    input3.addEventListener("change", function () {
        combined = input.value + " " + input3.value;
        console.log(combined);
    });

    input4.addEventListener("change", function () {
        combined = input.value + " " + input4.value;
        console.log(combined);
    });

    input5.addEventListener("change", function () {
        combined = input.value + " " + input5.value;
        console.log(combined);
    });


    console.log(input,input2)
    console.log(combined);

    var searchBtn = document.getElementById("the-last");

    searchBtn.addEventListener("click", function () {
        var url = "https://dev.virtualearth.net/REST/v1/Locations?q=" + combined + "&key=AukL8CrVu7aFufLLWi8M933nBD-zqGW01swPGtI_ypiwFmUbafxGIo_RIeH3FoN6";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.resourceSets.length > 0 && data.resourceSets[0].resources.length > 0) {
                    var location = data.resourceSets[0].resources[0].point.coordinates;
                    map.setView({
                        center: new Microsoft.Maps.Location(location[0], location[1]), zoom: 11, animate: true, duration: 2000
                    });
                    zoomIn(map, 13);
                }
            });
    });


    var pushpins = [
        {
            location: new Microsoft.Maps.Location(26.15838864682573, 32.712665972295326),
            title: 'MOODS',
            description: 'العنوان :- ش 23 يوليو , سور نادي الشرطة  <br> الهاتف :- 01050108006',
            icon: 'location (1).png'
        },
        {
            location: new Microsoft.Maps.Location(26.1799137, 32.7388477),
            title: 'الدكة',
            description: 'العنوان :- المساكن , دردشة<br> الهاتف :- 1093030401',
            icon: 'location (1).png'
        },

        {
            location: new Microsoft.Maps.Location(26.1536972, 32.704976),
            title: 'كشري ريزو',
            description: 'العنوان :- برج نقابة الصيادلة , مدخل كورنيش النيل  <br> الهاتف :- 01050653440',
            icon: 'location (1).png'
        },
        {
            location: new Microsoft.Maps.Location(26.1584329, 32.7181166),
            title: 'كويك فوود',
            description: 'العنوان :- ش 23 يوليو , سور نادي الشرطة  <br> الهاتف :- 01010359214',
            icon: 'location (1).png'
        },
        {
            location: new Microsoft.Maps.Location(26.1622211, 32.7073505),
            title: 'بابا برجر',
            description: 'العنوان :- أمام النساجون الشرقيون ,شارع كوبري دندرة <br> الهاتف :- 1050625035',
            icon: 'location (1).png'
        },
        {
            location: new Microsoft.Maps.Location(26.1585828, 32.7149933),
            title: 'بيتزا هوم',
            description: 'العنوان :- ش 23 يوليو , سور نادي الشرطة <br> الهاتف :- 01050108006',
            icon: 'location (1).png'
        },
        {
            location: new Microsoft.Maps.Location(26.1517386, 32.7392417),
            title: 'Puccini',
            description: 'العنوان :- مدينة العمال , الرياح <br> الهاتف :- 1033111391',
            icon: 'location (1).png'
        },
        {
            location: new Microsoft.Maps.Location(26.1841649, 32.7275245),
            title: 'كاستيلو',
            description: 'العنوان :- الشؤون , شارع المعتقل <br> الهاتف :- 1060016780',
            icon: 'location (1).png'
        },

    ];



    for (var i = 0; i < pushpins.length; i++) {
        var pushpin = new Microsoft.Maps.Pushpin(pushpins[i].location, {
            title: pushpins[i].title,
            icon: pushpins[i].icon
        });
        var infobox = new Microsoft.Maps.Infobox(pushpins[i].location, {
            title: pushpins[i].title,
            description: pushpins[i].description,
            visible: false
        });
        infobox.setMap(map);



        Microsoft.Maps.Events.addHandler(pushpin, 'click', (function (infobox) {
            return function () {
                infobox.setOptions({ visible: true });
            };
        })(infobox));

        map.entities.push(pushpin);
    }





}


function home(){
    document.getElementById("active1").style.color="#ff7b00";
    document.getElementById("active2").style.color="#fff";
    document.getElementById("active3").style.color="#fff";
    document.getElementById("active4").style.color="#fff";
  }
  
  function services(){
    document.getElementById("active1").style.color="#fff";
    document.getElementById("active2").style.color="#ff7b00";
    document.getElementById("active3").style.color="#fff";
    document.getElementById("active4").style.color="#fff";
  }
  
  function projects(){
    document.getElementById("active1").style.color="#fff";
    document.getElementById("active2").style.color="#fff";
    document.getElementById("active3").style.color="#ff7b00";
    document.getElementById("active4").style.color="#fff";
  }
  
  function contact(){
    document.getElementById("active1").style.color="#fff";
    document.getElementById("active2").style.color="#fff";
    document.getElementById("active3").style.color="#fff";
    document.getElementById("active4").style.color="#ff7b00";
  }


  var restaurants = [{ name: "Quick Food", city: "Qesm Qena", location: "ش 23 يوليو , سور نادي الشرطة", description: "Serving delicious food since 1990", logo: "new_images/new-logo4.png", link: "#" },
  { name: "REZO", city: "Qesm Qena", location: "برج نقابة الصيادلة , مدخل كورنيش النيل", description: "Specializing in seafood", logo: "new_images/new-logo2.png", link: "#" },
  { name: "MOODS", city: "Qesm Qena", location: "ش 23 يوليو , سور نادي الشرطة", description: "Voted best pizza in town", logo: "new_images/new-logo3.png", link: "#" },
  { name: "Cook Door", city: "Qesm Qena", location: "ش 23 يوليو , بجوار نقابة المعلمين", description: "Authentic Egyptian cuisine", logo: "new_images/new-logo5.png", link: "#" }];


document.getElementById("getLocationBtn").addEventListener("click", function () {
  this.classList.add("hidden");
  getLocation();
});


function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      
  }
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  var url =
      "https://dev.virtualearth.net/REST/v1/Locations/" +
      latitude +
      "," +
      longitude +
      "?o=json&key=AukL8CrVu7aFufLLWi8M933nBD-zqGW01swPGtI_ypiwFmUbafxGIo_RIeH3FoN6";

  fetch(url)
      .then((response) => response.json())
      .then((data) => {
          var address = data.resourceSets[0].resources[0].address;
          var city = address.locality;
          console.log(city);

          var filteredRestaurants = restaurants.filter(function (restaurant) {
              return restaurant.city === city;
          });

          var restaurantList = document.getElementById("restaurantList");
          restaurantList.innerHTML = "";

          if (filteredRestaurants.length > 0) {
              var ul = document.createElement("ul");
              ul.classList.add("restaurant-list");

              filteredRestaurants.forEach(function (restaurant) {
                  var li = document.createElement("li");
                  li.classList.add("restaurant-item");

                  var a = document.createElement("a");
                  a.setAttribute("href", restaurant.link);

                  var img = document.createElement("img");
                  img.setAttribute("src", restaurant.logo);
                  img.classList.add("restaurant-logo");

                  var h3 = document.createElement("p");
                  h3.textContent = restaurant.name;
                  h3.classList.add("restaurant-name");


                  var p1 = document.createElement("p");
                  p1.textContent = restaurant.location;
                  p1.classList.add("restaurant-location");


                  var p2 = document.createElement("p");
                  p2.textContent = restaurant.description;
                  p2.textContent = restaurant.description;
                  p2.classList.add("restaurant-description");

                  a.appendChild(img);
                  li.appendChild(a);
                  li.appendChild(h3);
                  li.appendChild(p1);
                  li.appendChild(p2);

                  ul.appendChild(li);
              });

              restaurantList.appendChild(ul);
          } else {
              restaurantList.innerHTML = "No restaurants found in your city.";
          }
      });
}


