import React from "react";
import Control from "../../../../common/Control";
import { Typography, Paper, Box } from "@material-ui/core";
import { CheckCircle, FiberManualRecord } from "@material-ui/icons";

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

export default function AgentView() {
  return (
    <div>
      <h4>
        Coy Streich &nbsp;&nbsp;&nbsp;
        <Available />
      </h4>

      <hr />
      <div style={{ display: "flex" }}>
        <Paper elevation={0} style={{ flex: 1, padding: 10, margin: 10 }}>
          <Typography>
            <table>
              <tr>
                <th>Id</th>
                <th>:</th>
                <td>6</td>
              </tr>
              <tr>
                <th>Agent</th>
                <th>:</th>
                <td>coy Streich</td>
              </tr>
              <tr>
                <th>NIC</th>
                <th>:</th>
                <td>988581682v</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <th>:</th>
                <td>0777926565</td>
              </tr>
              <tr>
                <th>Address</th>
                <th>:</th>
                <td>8/482,kulathunga mawatha, Makumbura, kottawa.</td>
              </tr>
              <tr>
                <th>Driving Licence </th>
                <th>:</th>
                <td>B1232343</td>
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
                <td>AAC-3422</td>
              </tr>
              <tr>
                <th>Max Load </th>
                <th>:</th>
                <td>5T</td>
              </tr>
              <tr>
                <th>Type </th>
                <th>:</th>
                <td>5</td>
              </tr>
              <tr>
                <th>Unit price (Per:km):</th>
                <th>:</th>
                <td>89</td>
              </tr>
              <tr>
                <th>fuel Category</th>
                <th>:</th>
                <td>Petrol</td>
              </tr>
            </table>
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
