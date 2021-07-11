import React from 'react';
import "./widgetLg.css";

export default function WidgetLg() {

    const Button= ({type}) =>{
        return <button className={"WidgetLgButton " +type}>{type}</button>
    }
    return (
        <div className="WidgetLg">
           <h3 className="widgetLgTitle">Latest transactions</h3>
           <table className="WidgetLgTable">
                <tr className="WidgetLgTr">
                    <th className="WidgetLgTh">Customer</th>
                    <th className="WidgetLgTh">Date</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Status</th>

                </tr>

                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img src="https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Ishan Reshmika</span>
                    </td>
                    <td className="WidgetLgDate">30 Jun 2021</td>
                    <td className="WidgetLgAmount">Rs 122.00</td>
                    <td className="WidgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                   

                </tr>

                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img src="https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Anuki De Alwis</span>
                    </td>
                    <td className="WidgetLgDate">30 Jun 2021</td>
                    <td className="WidgetLgAmount">Rs 122.00</td>
                    <td className="WidgetLgStatus">
                        <Button type="Declined"/>
                    </td>
                   

                </tr>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img src="https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Sanduni Fernando</span>
                    </td>
                    <td className="WidgetLgDate">30 Jun 2021</td>
                    <td className="WidgetLgAmount">Rs 122.00</td>
                    <td className="WidgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                   

                </tr>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img src="https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png" alt="" className="widgetLgImg"/>
                        <span className="widgetLgName">Chamodhi Satharasinghe</span>
                    </td>
                    <td className="WidgetLgDate">30 Jun 2021</td>
                    <td className="WidgetLgAmount">Rs 122.00</td>
                    <td className="WidgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                   

                </tr>


           </table>
            
        </div>
    )
}
