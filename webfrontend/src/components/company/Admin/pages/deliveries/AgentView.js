import React, { useEffect, useState } from "react";
import Control from "../../../../common/Control";
import { Typography, Paper, Box } from "@material-ui/core";
import { CheckCircle, FiberManualRecord } from "@material-ui/icons";
import axios from "axios";

const Available = () => {
  return (
    <Control.Label label="Available" colour="green" icon={<CheckCircle />} />
  );
};
const Unavailable = () => {
  return (
    <Control.Label
      label="Unavailable"
      colour="red"
      icon={<FiberManualRecord />}
    />
  );
};

export default function AgentView(props) {
  const { userId } = props;
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/getdeliveyagentetailsById/" + userId)
      .then((res) => {
        console.log(res.data[0]);
        setUser(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h4>
        {user.name} &nbsp;&nbsp;&nbsp;
        {user.availability ? <Available /> : <Unavailable />}
      </h4>

      <hr />
      <div style={{ display: "flex" }}>
        <Paper elevation={0} style={{ flex: 1, padding: 10, margin: 10 }}>
          <Typography>
            <table>
              <tr>
                <th>Id</th>
                <th>:</th>
                <td>{user.userId}</td>
              </tr>
              <tr>
                <th>Agent</th>
                <th>:</th>
                <td>{user.name}</td>
              </tr>
              <tr>
                <th>NIC</th>
                <th>:</th>
                <td>{user.nic}</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <th>:</th>
                <td>{user.phoneNumber}</td>
              </tr>
              <tr>
                <th>Address</th>
                <th>:</th>
                <td>{user.address}</td>
              </tr>
              <tr>
                <th>Driving Licence </th>
                <th>:</th>
                <td>{user.drivingLicence}</td>
              </tr>
            </table>
          </Typography>
        </Paper>
        <Paper elevation={0} style={{ flex: 1, padding: 10, margin: 10 }}>
          <Typography>
            <table>
              <tr>
                <th>Vehicle Number </th>
                <th>:</th>
                <td>{user.vehicleId}</td>
              </tr>
              <tr>
                <th>Max Load </th>
                <th>:</th>
                <td>{user.maxLoad}</td>
              </tr>
              <tr>
                <th>Type </th>
                <th>:</th>
                <td>{user.vehicleTypeId}</td>
              </tr>
              <tr>
                <th>Unit price (Per:km)</th>
                <th>:</th>
                <td></td>
              </tr>
              <tr>
                <th>fuel Category</th>
                <th>:</th>
                <td></td>
              </tr>
            </table>
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
