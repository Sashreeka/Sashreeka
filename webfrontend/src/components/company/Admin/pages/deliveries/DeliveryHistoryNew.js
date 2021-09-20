import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3,
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1,
//       },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>

//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                       </TableCell>
//                     </TableRow>
//                   ))}

//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

///adminDelivery/getDeliveryHistoryDetailsGroup
///adminDelivery/getDeliveryHistoryAll

export default function DeliveryHistoryNew() {

  const [dataAll,setDataAll]=useState([]);
  const [dataGroup,setDataGroup]=useState([]);
  const [dataLen,setDataLen]=useState(0);

  const [openArray,setopenArray]=useState([]);
  useEffect(()=>{

    axios.get('http://localhost:4000/adminDelivery/getDeliveryHistoryDetailsGroup').then((response)=>{
      console.log(response.data);
      setDataGroup(response.data)
      //console.log(response.data.length)
      setDataLen(response.data.length)
    })

    axios.get('http://localhost:4000/adminDelivery/getDeliveryHistoryAll').then((response)=>{
    console.log("ishannnnnnnn",response.data);
      setDataAll(response.data)
    //  console.log(label)
    })

   openArrayData(dataLen);


  },[])


  
  

 
 


  const openArrayData= (dataLen)=>{
      //console.log(dataLen)
    for(let i=0;i<dataLen;i++)
    {
        //openArray[i]=false
        setopenArray({...openArray,i:false})
        console.log("anu",openArray)
        
      
    }
    console.log("anu",openArray)
   

   
   



  }



    const [open, setOpen] = React.useState([false]);

    const openColloapse=(id)=>{
        console.log(id)

       if(openArray[id]===true)
       {
        openArray[id]=false;

       console.log(openArray[id])
       }else{
        openArray[id]=true;

        console.log(openArray[id])
       }



    }
    
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Delivery Id</TableCell>
            <TableCell>Vehicle</TableCell>
            <TableCell>Total load (kg)</TableCell>
            <TableCell>Assign Date</TableCell>
            <TableCell>Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>


{
   
    dataGroup.map((item,index)=>(
    <React.Fragment key={item.deliveryId}>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
           // onClick={() => openColloapse(index)}
          >
            {open  ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {item.deliveryId}
        </TableCell>
        <TableCell>{item.vehicleId}</TableCell>
        <TableCell>{item.totalLoad}</TableCell>
        <TableCell>{item.year} - {item.shortMonth} - {item.dateD}</TableCell>
        <TableCell>{item.deliveryFee}</TableCell>
     
     
      </TableRow>
      <TableRow>



        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Order Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>OrderId</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Load</TableCell>
                    <TableCell>Quick</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {
                    dataAll.filter((data)=>(data.deliveryId===item.deliveryId)).map((newData)=>(
                        <TableRow key={newData.orderId}>
                      <TableCell component="th" scope="row">
                        {newData.orderId}
                      </TableCell>
                      <TableCell>{newData.houseNumber} {newData.streetName} {newData.city}</TableCell>
                      <TableCell>  {newData.deliveryLoad}</TableCell>
                      <TableCell>
                      {newData.quickFlag}
                        {/* {Math.round(historyRow.amount * row.price * 100) / 100} */}
                      </TableCell>
                      <TableCell>  {newData.status}</TableCell>
                    </TableRow>

                    ))
                }
                  {/* {row.history.map((historyRow) => ( */}
                   
                  {/* ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>

    ))

        






}


          {/* {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
