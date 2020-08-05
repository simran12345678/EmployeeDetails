import React from "react";
import "./App.css";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    this.getEmployeeDetails();
  }
  getEmployeeDetails() {
    Axios.get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        this.setState({ employees: response.data.data });
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Employee Details</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(function (item, key) {
              return (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.employee_name}</td>
                  <td>{item.employee_salary}</td>
                  <td>{item.employee_age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
