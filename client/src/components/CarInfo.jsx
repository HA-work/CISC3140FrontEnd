import React, { Component } from "react";

class CarInfo extends Component {
  render() {
    return (
      <div className="Info">
        <tbody>
          <tr>
            <td>{this.props.Car_ID}</td>
            <td>{this.props.Ranking}</td>
            <td>{this.props.Total_Score}</td>
            <td>{this.props.Car_Make}</td>
            <td>{this.props.Car_Model}</td>
            <td>{this.props.Year}</td>
            <td>{this.props.Name}</td>
            <td>{this.props.Email}</td>
          </tr>
        </tbody>
      </div>
    );
  }
}
export default CarInfo;
