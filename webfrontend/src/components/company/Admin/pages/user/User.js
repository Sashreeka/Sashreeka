import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import "./user.css";
import Sidebar from '../../components/sidebar/Sidebar';

export default function User() {
    return (
        <div className='userCon'>
        <Sidebar/>

        <div className="user">
            <div className="userTitleContainer">

                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
                



            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                            src="https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png"

                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowtopTitle">
                            <span className="userShowUsername">Ishan Reshmika</span>
                            <span className="userShowUserTitle">Software Engineer</span>

                        </div>


                    </div>

                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                             <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">ishan97</span>
                        </div>


                        <div className="userShowInfo">
                             <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">1997.03.30</span>
                        </div>


                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                             <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">0768610084</span>
                        </div>


                        <div className="userShowInfo">
                             <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">ishan@gmail.com</span>
                        </div>

                        <div className="userShowInfo">
                             <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Matara | Sri Lanka</span>
                        </div>


                  

                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input  type="text" placeholder="ishan97" className="userUpdateInput"/>

                            </div>

                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input  type="text" placeholder="ishan Ediriweera" className="userUpdateInput"/>

                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input  type="text" placeholder="ishan@gmail.com" className="userUpdateInput"/>

                            </div>


                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input  type="text" placeholder="0768610084" className="userUpdateInput"/>

                            </div>


                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input  type="text" placeholder="Matara | Sri Lanka" className="userUpdateInput"/>

                            </div>

                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img  className="userUpdateImg" src="https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png"
                                    alt=""
                                />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{display:"none"}}/>

                            </div>
                            <button className="userUpdateButton">Update</button>


                        </div>

                    </form>
                </div>

            </div>

            
        </div>
        </div>
    )
}
