import React, { Component } from "react";
import { ReactBingmaps } from "../lib/ReactBingmap";
import FilterHead from "../components/FilterHead";
// import Checkbox from '@material-ui/core/Checkbox';

class BingMapsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // originLocation: "",
      // destinationLocation: "",
      dimensionUnit: "ft",
      weightUnit: "lb",
      distanceUnit:'miles',
      optimize:"timeWithTraffic",
      routeMode: false,
      routeModeType: "truck",
      vehicleHeight: 0,
      vehicleWidth: 0,
      vehicleLength: 0,
      vehicleWeight: 0,
      vehicleAxles: 0,
      vehicleTrailers: 0,
      vehicleSemi: false,
      vehicleMaxGradient: 0,
      vehicleMinTurnRadius: 0,
      vehicleAvoidCrossWind: false,
      vehicleAvoidGroundingRisk: false,
      vehicleHazardousMaterials: "",
      vehicleHazardousPermits: "",
      vehicleHazardousMaterialsArray: [],
      vehicleHazardousPermitsArray: [],
      avoid:'',
      avoidArray:[],
      showPreviousRoute: false,
      originLocation: "Neenah ,Wisconsin",
      destinationLocation: "Los Angeles ,California",
      isVisible: true,
      bingmapKey:
        "AmvY9cIICzbe1ZYwXPwKOa2icKKRwxfPPstKRMvsnUmsx4X5tEQV3WJPGwSA3F95", //Don't use this key in your environment.
      infoboxes: [
        {
          location: [44.17434, -88.46862],
          option: { title: "Chennai", description: "..." },
          addHandler: { type: "click", callback: this.callBackMethod }
        }
      ],
      pushPins: [
        {
          location: [44.17434, -88.46862],
          option: { color: "red" },
          addHandler: { type: "click", callback: this.callBackMethod }
        }
      ],
      regularPolygons: [
        {
          center: [44.17434, -88.46862],
          radius: 5,
          points: 36,
          option: { fillColor: "rgba(0,0,0,0.5)", strokeThickness: 2 }
        }
      ],
      infoboxesWithPushPins: [
        {
          location: [44.17434, -88.46862],
          addHandler: "mouseover", //on mouseover the pushpin, infobox shown
          infoboxOption: { title: "Infobox Title", description: "Infobox" },
          pushPinOption: { title: "Pushpin Title", description: "Pushpin" },
          infoboxAddHandler: { type: "click", callback: this.callBackMethod },
          pushPinAddHandler: { type: "click", callback: this.callBackMethod }
        }
      ],
      boundary: {
        location: ["chennai"],
        option: {
          entityType: "PopulatedPlace"
        },
        polygonStyle: {
          fillColor: "rgba(161,224,255,0.4)",
          strokeColor: "#a495b2",
          strokeThickness: 2
        }
      },
      searchInput: "",
      getLocationHandledData: "",
      polyline: {
        location: [
          [44.17434, -88.46862],
          [44.17434, -88.16862]
        ],
        option: {
          strokeColor: "blue",
          strokeThickness: 10,
          strokeDashArray: [1, 2, 5, 10]
        }
      },
      directions: {
        renderOptions: { itineraryContainer: "itineraryContainer" },

        requestOptions: {
          routeMode: "truck",
          maxRoutes: 3,
          // distanceUnit:'miles',
          vehicleSpec: {
            dimensionUnit: "",
            weightUnit: "",
            vehicleHeight: 0,
            vehicleWidth: 0,
            vehicleLength: 0,
            vehicleWeight: 0,
            vehicleAxles: 0,
            vehicleTrailers: 0,
            vehicleSemi: false,
            vehicleMaxGradient: 0,
            vehicleMinTurnRadius: 0,
            vehicleAvoidCrossWind: false,
            vehicleAvoidGroundingRisk: false,
            vehicleHazardousMaterials: "",
            vehicleHazardousPermits: ""
          },
          datetime: new Date(),
          // datetime = new Date();
        },
        wayPoints: [
          {
            address: ""
          },
          {
            address: ""
          }
        ]
      }
    };
  }

  handleFilterSubmit = () => {
    var directions = { ...this.state.directions };
    directions.renderOptions = { itineraryContainer: "itineraryContainer" };
    directions.requestOptions = {
      distanceUnit:this.state.distanceUnit,
      optimize:this.state.optimize,
      routeMode: this.state.routeModeType,
      avoid:this.state.avoid,
      maxRoutes: 3,
      
      
    };

    // directions = {}

    directions.requestOptions.vehicleSpec = {
      dimensionUnit: this.state.dimensionUnit,
      weightUnit: this.state.weightUnit,
      vehicleHeight:
        this.state.vehicleHeight !== null &&
        this.state.vehicleHeight !== undefined
          ? this.state.vehicleHeight
          : 0,

      vehicleWidth:
        this.state.vehicleWidth !== null &&
        this.state.vehicleWidth !== undefined
          ? this.state.vehicleWidth
          : 0,

      vehicleLength:
        this.state.vehicleLength !== null &&
        this.state.vehicleLength !== undefined
          ? this.state.vehicleLength
          : 0,

      vehicleWeight:
        this.state.vehicleWeight !== null &&
        this.state.vehicleWeight !== undefined
          ? this.state.vehicleWeight
          : 0,

      vehicleAxles:
        this.state.vehicleAxles !== null &&
        this.state.vehicleAxles !== undefined
          ? this.state.vehicleAxles
          : 0,

      vehicleTrailers:
        this.state.vehicleTrailers !== null &&
        this.state.vehicleTrailers !== undefined
          ? this.state.vehicleTrailers
          : 0,

      vehicleSemi:
        this.state.vehicleSemi !== null && this.state.vehicleSemi !== undefined
          ? this.state.vehicleSemi
          : false,

      vehicleMaxGradient:
        this.state.vehicleMaxGradient !== null &&
        this.state.vehicleMaxGradient !== undefined
          ? this.state.vehicleMaxGradient
          : 0,

      vehicleMinTurnRadius:
        this.state.vehicleMinTurnRadius !== null &&
        this.state.vehicleMinTurnRadius !== undefined
          ? this.state.vehicleMinTurnRadius
          : 0,

      vehicleAvoidCrossWind:
        this.state.vehicleAvoidCrossWind !== null &&
        this.state.vehicleAvoidCrossWind !== undefined
          ? this.state.vehicleAvoidCrossWind
          : false,

      vehicleAvoidGroundingRisk:
        this.state.vehicleAvoidGroundingRisk !== null &&
        this.state.vehicleAvoidGroundingRisk !== undefined
          ? this.state.vehicleAvoidGroundingRisk
          : false,

      vehicleHazardousMaterials:
        this.state.vehicleHazardousMaterials !== null &&
        this.state.vehicleHazardousMaterials !== undefined
          ? this.state.vehicleHazardousMaterials
          : "",

      vehicleHazardousPermits:
        this.state.vehicleHazardousPermits !== null &&
        this.state.vehicleHazardousPermits !== undefined
          ? this.state.vehicleHazardousPermits
          : ""
    };

    directions.wayPoints = [
      { address: this.state.originLocation },
      { address: this.state.destinationLocation }
    ];

    if (
      directions.requestOptions.vehicleSpec.vehicleHeight === "" ||
      directions.requestOptions.vehicleSpec.vehicleHeight === 0
    ) {
      delete directions.requestOptions.vehicleSpec.vehicleHeight;
    }
    if (
      directions.requestOptions.vehicleSpec.vehicleWidth === "" ||
      directions.requestOptions.vehicleSpec.vehicleWidth === 0
    ) {
      delete directions.requestOptions.vehicleSpec.vehicleWidth;
    }
    if (
      directions.requestOptions.vehicleSpec.vehicleLength === "" ||
      directions.requestOptions.vehicleSpec.vehicleLength === 0
    ) {
      delete directions.requestOptions.vehicleSpec.vehicleLength;
    }
    if (
      directions.requestOptions.vehicleSpec.vehicleWeight === "" ||
      directions.requestOptions.vehicleSpec.vehicleWeight === 0
    ) {
      delete directions.requestOptions.vehicleSpec.vehicleWeight;
    }
    if (
      directions.requestOptions.vehicleSpec.vehicleAxles === "" ||
      directions.requestOptions.vehicleSpec.vehicleAxles === 0
    ) {
      delete directions.requestOptions.vehicleSpec.vehicleAxles;
    }
    if (
      directions.requestOptions.vehicleSpec.vehicleTrailers === "" ||
      directions.requestOptions.vehicleSpec.vehicleTrailers === 0
    ) {
      delete directions.requestOptions.vehicleSpec.vehicleTrailers;
    }
    if (directions.requestOptions.vehicleSpec.vehicleSemi === false) {
      delete directions.requestOptions.vehicleSpec.vehicleSemi;
    }
    if (
      directions.requestOptions.vehicleSpec.vehicleMaxGradient === "" ||
      directions.requestOptions.vehicleSpec.vehicleMaxGradient === 0
    ) {
      delete directions.requestOptions.vehicleSpec.vehicleMaxGradient;
    }
    if (
      directions.requestOptions.vehicleSpec.vehicleMinTurnRadius === "" ||
      directions.requestOptions.vehicleSpec.vehicleMinTurnRadius === 0
    ) {
      delete directions.requestOptions.vehicleSpec.vehicleMinTurnRadius;
    }
    if (directions.requestOptions.vehicleSpec.vehicleAvoidCrossWind === false) {
      delete directions.requestOptions.vehicleSpec.vehicleAvoidCrossWind;
    }
    if (
      directions.requestOptions.vehicleSpec.vehicleAvoidGroundingRisk === false
    ) {
      delete directions.requestOptions.vehicleSpec.vehicleAvoidGroundingRisk;
    }
    if (
      directions.requestOptions.vehicleSpec.vehicleHazardousMaterials === ""
    ) {
      delete directions.requestOptions.vehicleSpec.vehicleHazardousMaterials;
    }
    if (directions.requestOptions.vehicleSpec.vehicleHazardousPermits === "") {
      delete directions.requestOptions.vehicleSpec.vehicleHazardousPermits;
    }
    directions.requestOptions.datetime = new Date();
    
    this.setState({
      directions
    });
  };

  changeState() {
    this.setState({
      infoboxes: [
        {
          location: [44.17434, -88.46862],
          option: { title: "Chennai", description: "Tamilnadu" },
          addHandler: { type: "click", callback: this.callBackMethod }
        }
      ],
      pushPins: [
        {
          location: [44.17434, -88.46862],
          option: { color: "yellow" },
          addHandler: { type: "click", callback: this.callBackMethod }
        },
        {
          location: [13.0727, 80.2707],
          option: { color: "green" },
          addHandler: { type: "click", callback: this.callBackMethod }
        }
      ],
      regularPolygons: [
        {
          center: [44.17434, -88.46862],
          radius: 5,
          points: 6,
          option: { fillColor: "rgba(0,0,0,0.5)", strokeThickness: 2 }
        }
      ],
      infoboxesWithPushPins: [
        {
          location: [44.17434, -88.46862],
          addHandler: "mouseover", //on mouseover the pushpin, infobox shown
          infoboxOption: { title: "Chennai", description: "Infobox" },
          pushPinOption: { title: "Chennai", description: "Pushpin" },
          infoboxAddHandler: { type: "click", callback: this.callBackMethod },
          pushPinAddHandler: { type: "click", callback: this.callBackMethod }
        }
      ],
      boundary: {
        search: "636303",
        polygonStyle: {
          fillColor: "rgba(161,224,255,0.4)",
          strokeColor: "#a495b2",
          strokeThickness: 2
        },
        option: {
          entityType: "PopulatedPlace"
        }
      },
      polyline: {
        location: [
          [44.17434, -88.46862],
          [13.0527, 80.2707]
        ],
        option: {
          strokeColor: "red",
          strokeThickness: 10,
          strokeDashArray: [1, 2, 5, 10]
        }
      },
      directions: {
        inputPanel: "inputPanel",
        renderOptions: { itineraryContainer: "itineraryContainer" },
        requestOptions: { routeMode: this.state.routeModeType, maxRoutes: 3 },
        wayPoints: [
          {
            address: ""
          },
          {
            address: ""
          }
        ]
      }
    });
  }
  handleSubmit(event) {
    if (this.state.searchInput !== null && this.state.searchInput !== "") {
      this.setState({
        boundary: {
          search: this.state.searchInput,
          polygonStyle: {
            fillColor: "rgba(161,224,255,0.4)",
            strokeColor: "#a495b2",
            strokeThickness: 2
          },
          option: {
            entityType: "PopulatedPlace"
          }
        }
      });
    }
    event.preventDefault();
  }
  GetLocationHandled(location) {
    this.setState({
      getLocationHandledData: JSON.stringify(location)
    });
  }
  GetEventHandled(callbackData) {
    console.log(callbackData);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    // alert(event.target.name);
  };

  handleCheckboxChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  };

  handleRouteChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
    if (event.target.checked) {
      this.setState({
        routeModeType: "driving"
      });
    } else {
      this.setState({
        routeModeType: "truck"
       });
    }
  };

  handleMaterialChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      vehicleHazardousMaterials: event.target.value.toString()
    });
  };

  handlePermitChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      vehicleHazardousPermits: event.target.value.toString(), 
    });    
  };

  handleAvoidChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      avoid: event.target.value.toString()
    });
  };


  render() {

    console.log("Avoid", this.state.directions);
    
    return (
      <div>
        <FilterHead
          handleChange={this.handleChange}
          handleCheckboxChange={this.handleCheckboxChange}
          handleRouteChange={this.handleRouteChange}
          handleFilterSubmit={this.handleFilterSubmit}
          stateValues={this.state}
          handleMaterialChange={this.handleMaterialChange}
          handlePermitChange={this.handlePermitChange}
          handleAvoidChange={this.handleAvoidChange}
        />

        {this.state.isVisible && (
          <div>
            <div className="map-three container">
              <ReactBingmaps
                className="customClass"
                id="eleven"
                center={[44.17434, -88.46862]}
                bingmapKey={this.state.bingmapKey}
                directions={this.state.directions}
                showPreviousRoute={this.state.showPreviousRoute}
              ></ReactBingmaps>
              <div className="direction-container">
                <div className="input-panel" id="inputPanel"></div>
                <div
                  className="itinerary-container"
                  id="itineraryContainer"
                ></div>
              </div>
            </div>
          </div>
        )}
        <br />
      </div>
    );
  }
}

export default BingMapsView;
