import React from 'react';
import { Link } from 'react-router-dom';


const ResetLink = () => {
  return (
    <div style={{ marginTop: "0px" }}>

      <div style={{ margin: "15px 0px 0px 15px", display: "flex" }}>
        <button className="btn1">
          <Link to="/">Go Back</Link>
        </button>
      </div>

      <div style={{ background:"aliceblue", padding:"30px", margin:"250px auto", width:"fit-content", borderRadius:"25px"}}>
      <h2 style={{padding:"10px"}}>Open the Reset Link</h2>
      <h4>Go to your mailbox and open the reset-link!</h4>
      </div>

    </div>
  );
};

export default ResetLink;
