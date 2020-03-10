jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Mandarin Chart
  var doughnutData = [{
      value: 100,
      color: "#1abc9c"
    },
    {
      value: 0,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("mandarin").getContext("2d")).Doughnut(doughnutData);

  // English Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("english").getContext("2d")).Doughnut(doughnutData);

  // Cantonese Chart
  var doughnutData = [{
    value: 60,
    color: "#1abc9c"
  },
  {
    value: 40,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("cantonese").getContext("2d")).Doughnut(doughnutData);

  // Korean Chart
  var doughnutData = [{
    value: 35,
    color: "#1abc9c"
  },
  {
    value: 65,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("korean").getContext("2d")).Doughnut(doughnutData);

  // Piano Chart
  var doughnutData = [{
    value: 60,
    color: "#1abc9c"
  },
  {
    value: 40,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("piano").getContext("2d")).Doughnut(doughnutData);

  // Basketball Chart
  var doughnutData = [{
    value: 40,
    color: "#1abc9c"
  },
  {
    value: 60,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("basketball").getContext("2d")).Doughnut(doughnutData);

  // Badminton Chart
  var doughnutData = [{
    value: 60,
    color: "#1abc9c"
  },
  {
    value: 40,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("badminton").getContext("2d")).Doughnut(doughnutData);


});
