import React from 'react';
import Header from './components/header';
import './App.css'
import { Form, InputGroup, Button } from 'react-bootstrap';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselImages: [
        'bus-1.jpg',
        'bus-2.jpg',
        'bus-3.jpg'
      ],
      months: [
        {
          label: "January", value: 1
        }, {
          label: "February", value: 2
        }, {
          label: "March", value: 3
        }, {
          label: "April", value: 4
        }, {
          label: "May", value: 5
        }, {
          label: "June", value: 6
        }, {
          label: "July", value: 7
        }, {
          label: "August", value: 8
        }, {
          label: "September", value: 9
        }, {
          label: "October", value: 10
        }, {
          label: "November", value: 11
        }, {
          label: "December", value: 12
        }
      ],
      Origin: "",
      Destination: "",
      LeaveArrive: "Leave",
      tripMonth: 1,
      tripDay: 1,
      tripYear: 2020,
      tripHour: 1,
      tripMinute: 1,
      tripAMPM: "AM",
      trips: []
    }
  }

  changeInput = (key, val) => {
    this.setState({
      [key]: val
    })
  }

  submitHandle = (event) => {
    event.preventDefault();
    const newTrip = {
      Origin: this.state.Origin,
      Destination: this.state.Destination,
      LeaveArrive: this.state.LeaveArrive,
      tripYear: this.state.tripYear,
      tripMonth: this.state.tripMonth,
      tripDay: this.state.tripDay,
      tripHour: this.state.tripHour,
      tripMinute: this.state.tripMinute,
      tripAMPM: this.state.tripAMPM
    };
    this.setState((prevState) => ({
      trips: [...prevState.trips, newTrip]
    }));
  }

  getRandomRotation = () => {
    const rotations = ['-6deg', '-3deg', '0deg', '3deg', '6deg'];
    return rotations[Math.floor(Math.random() * rotations.length)];
  }

  render() {
    let { carouselImages, months, Origin, Destination, LeaveArrive, tripYear, tripMonth, tripDay, tripHour, tripMinute, tripAMPM, trips } = this.state;
    return (
      <React.Fragment>
        <Header/>
        <div className="home-container bg-animated-gradient animate-gradient-x min-h-screen flex flex-col items-center">
          
          {/* // Menghapus bagian collage layout
          <div className="collage-container grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {carouselImages.map((carouselImage, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden rounded-lg shadow-lg"
                style={{ transform: `rotate(${this.getRandomRotation()})` }}
              >
                <img 
                  src={require(`./assets/images/${carouselImage}`)} 
                  alt={`Bus ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
          */}

          {/* // Formulir dan Kartu Perjalanan */}
          <div className="form-container">
            <Form onSubmit={($event) => this.submitHandle($event)} className="w-full max-w-lg bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
              <div className="form-content">
                <Form.Group>
                  <h1 className="text-2xl font-bold text-center mb-4">Plan Your Trip</h1>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="block text-gray-700">Origin:</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="Origin" 
                    value={Origin} 
                    onChange={($event) => this.changeInput('Origin', $event.target.value)}
                    className="mt-1 block w-full border border-green-500 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="block text-gray-700">Destination:</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="Destination" 
                    value={Destination} 
                    onChange={($event) => this.changeInput('Destination', $event.target.value)}
                    className="mt-1 block w-full border border-green-500 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <div className="custom-inline-checkbox text-center">
                    <Form.Check 
                      custom 
                      inline 
                      type="radio" 
                      name="LeaveArrive" 
                      label="Leave" 
                      value="Leave" 
                      id="custom-checkbox-1" 
                      onChange={($event) => this.changeInput('LeaveArrive', $event.target.value)} 
                      checked={LeaveArrive === "Leave"}
                      className="mr-4"
                    />
                    <Form.Check 
                      custom 
                      inline 
                      type="radio" 
                      name="LeaveArrive" 
                      label="Active" 
                      value="Active" 
                      id="custom-checkbox-2" 
                      onChange={($event) => this.changeInput('LeaveArrive', $event.target.value)} 
                      checked={LeaveArrive === "Active"}
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="block text-gray-700">Date:</Form.Label>
                  <InputGroup className="mt-1 flex space-x-2">
                    <Form.Control 
                      as="select" 
                      name="tripMonth" 
                      value={tripMonth} 
                      onChange={($event) => this.changeInput('tripMonth', $event.target.value)}
                      className="w-1/3 border border-green-500 rounded-md focus:ring-green-500 focus:border-green-500"
                    >
                      {months.map((month, idx) => <option value={month.value} key={idx}>{month.label}</option>)}
                    </Form.Control>
                    <Form.Control 
                      as="select" 
                      name="tripDay" 
                      value={tripDay} 
                      onChange={($event) => this.changeInput('tripDay', $event.target.value)}
                      className="w-1/3 border border-green-500 rounded-md focus:ring-green-500 focus:border-green-500"
                    >
                      {[...Array(31)].map((date, idx) => <option value={idx+1} key={idx}>{idx < 9 ? '0' + (idx + 1) : idx + 1}</option>)}
                    </Form.Control>
                    <Form.Control 
                      as="select" 
                      name="tripYear" 
                      value={tripYear} 
                      onChange={($event) => this.changeInput('tripYear', $event.target.value)}
                      className="w-1/3 border border-green-500 rounded-md focus:ring-green-500 focus:border-green-500"
                    >
                      {[...Array(11)].map((_, idx) => {
                        const year = 2016 + idx;
                        return <option value={year} key={year}>{year}</option>
                      })}
                      <option value="2026">2026</option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="block text-gray-700">Time:</Form.Label>
                  <InputGroup className="mt-1 flex space-x-2">
                    <Form.Control 
                      as="select" 
                      name="tripHour" 
                      value={tripHour} 
                      onChange={($event) => this.changeInput('tripHour', $event.target.value)}
                      className="w-1/3 border border-green-500 rounded-md focus:ring-green-500 focus:border-green-500"
                    >
                      {[...Array(12)].map((hour, idx) => <option value={idx+1} key={idx}>{idx < 9 ? '0' + (idx + 1) : idx + 1}</option>)}
                    </Form.Control>
                    <Form.Control 
                      as="select" 
                      name="tripMinute" 
                      value={tripMinute} 
                      onChange={($event) => this.changeInput('tripMinute', $event.target.value)}
                      className="w-1/3 border border-green-500 rounded-md focus:ring-green-500 focus:border-green-500"
                    >
                      {[...Array(60)].map((minute, idx) => <option value={idx+1} key={idx}>{idx < 9 ? '0' + (idx + 1) : idx + 1}</option>)}
                    </Form.Control>
                    <Form.Control 
                      as="select" 
                      name="tripAMPM" 
                      value={tripAMPM} 
                      onChange={($event) => this.changeInput('tripAMPM', $event.target.value)}
                      className="w-1/3 border border-green-500 rounded-md focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>
              </div>
              <Form.Group className="text-center mt-4">
                <Button 
                  type="submit" 
                  variant="success" 
                  size="lg" 
                  id="trip_plan_btn"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  GO
                </Button>
              </Form.Group>
            </Form>
          </div>
          <div className="trip-cards-container">
            {trips.map((trip, idx) => (
              <div key={idx} className="trip-card bg-white bg-opacity-80 border border-green-700 rounded-lg p-4 m-2 w-72 text-left shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">Trip {idx + 1}</h3>
                <p className="text-gray-700">Origin: {trip.Origin}</p>
                <p className="text-gray-700">Destination: {trip.Destination}</p>
                <p className="text-gray-700">Date: {trip.tripMonth}/{trip.tripDay}/{trip.tripYear}</p>
                <p className="text-gray-700">Time: {trip.tripHour}:{trip.tripMinute} {trip.tripAMPM}</p>
                <p className="text-gray-700">{trip.LeaveArrive}</p>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
