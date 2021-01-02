import React, { useState, useEffect } from 'react';
import axios from 'axios';
function GetUser(){
    const [data, setData] = useState({ users: [] });
 
  useEffect(async () => {
    const result = await axios.get(
      'http://localhost/stiint/backend/users/usersRead.php',
    );
 
    setData(result);
  });

    return (
        <div className="getUser">
            <div className="row">
                <div className="col-md-6">
                <p>{data.users}</p>
                </div>
            </div>
        </div>
    );
}
export default GetUser;