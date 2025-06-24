function initMap() {
    const center = { lat: 33.7490, lng: -84.3880 }; // Example: Atlanta, GA
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: center,
    });
  
    new google.maps.Circle({
      strokeColor: "#007BFF",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#007BFF",
      fillOpacity: 0.2,
      map,
      center: center,
      radius: 80467.2, // 50 miles
    });
  }
  
  window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      rewind: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
  });
  
  