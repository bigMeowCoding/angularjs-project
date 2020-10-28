// app.js
var routerApp = angular
  .module("routerApp", ["ui.router"])
  .service("PeopleService", function ($http) {
    var service = {
      getAllPeople: function () {
        return [
          {
            id: "293",
            isActive: false,
            eyeColor: "brown",
            name: "Ingrid Townsend",
            company: "JASPER",
            email: "ingridtownsend@jasper.com",
            address:
              "690 Charles Place, Santel, Northern Mariana Islands, 3791",
          },
          {
            id: "581",
            isActive: true,
            eyeColor: "blue",
            name: "Estrada Nolan",
            company: "FIBRODYNE",
            email: "estradanolan@fibrodyne.com",
            address: "317 Seeley Street, Cade, Maryland, 3976",
          },
          {
            id: "29",
            isActive: true,
            eyeColor: "brown",
            name: "Laverne Andrews",
            company: "INTRAWEAR",
            email: "laverneandrews@intrawear.com",
            address: "760 Provost Street, Valle, Alaska, 4628",
          },
          {
            id: "856",
            isActive: false,
            eyeColor: "green",
            name: "Hull Woodward",
            company: "SENMAO",
            email: "hullwoodward@senmao.com",
            address: "452 Union Avenue, Hachita, Palau, 9166",
          },
          {
            id: "2321",
            isActive: false,
            eyeColor: "green",
            name: "Maria Stanley",
            company: "EYERIS",
            email: "mariastanley@eyeris.com",
            address: "350 Remsen Avenue, Abrams, Ohio, 6355",
          },
        ];
      },
    };
    return service;
  });

routerApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    // nested views
    .state("home", {
      url: "/home",
      templateUrl: "./home.html",
      resolve: {
        people: function (PeopleService) {
          return PeopleService.getAllPeople();
        },
      },
      controller: function ($scope, people) {
        $scope.funnycitynames = [
          "Boring Oregon City",
          "Emba rrass Minnesota",
          "No Name South Dakota",
          "Penistone South Yorkshire England",
          "Intercourse Lancaster County, PA",
        ];
        $scope.people = people;
      },
    })

    // nested list with custom controller
    .state("home.list", {
      url: "/list",
      templateUrl: "./list.html",
      controller: function ($scope) {
        $scope.funnycitynames = [
          "Boring Oregon City",
          "Emba rrass Minnesota",
          "No Name South Dakota",
          "Penistone South Yorkshire England",
          "Intercourse Lancaster County, PA",
        ];
      },
    })

    // nested list with just some random string data
    .state("home.anything", {
      url: "/anything",
      template: "What do you want from ui-route",
    })

    // multiviews
    .state("about", {
      url: "/about",
      views: {
        // the main template will be placed here (relatively named)
        "": { templateUrl: "about.html" },

        //  the child views (absolutely named)

        // for column #1, defines a separate controller
        "column1@about": {
          templateUrl: "./column1.html",
          controller: "column1Controller",
        },

        // the child views (absolutely named)
        "column2@about": { template: "column #2!" },

        // for bottom row, defines a separate controller shares with column #1
        "bottom-row@about": {
          templateUrl: "./bottom.html",
          controller: "column1Controller",
        },
      },
    });
});

// column1 controller that we call up in the about state
routerApp.controller("column1Controller", function ($scope) {
  $scope.message = "column1";

  $scope.galaxies = [
    {
      name: "Milkyway Galaxy",
      distance: "27,000",
    },
    {
      name: "Andromeda Galaxy",
      distance: "2,560,000",
    },
    {
      name: "Sagittarius Dwarf",
      distance: "3.400,000",
    },
  ];
});

// let's define the column1 controller that we call up in the about state
routerApp.controller("bottom-rowController", function ($scope) {
  $scope.message = "bottom row";

  $scope.variables = [];
});
