import React from 'react';
import './index.css';


const Index = () => {

  return (
    <div className='index'>
      <nav>
        <div className='menu'>
            <div className='logo'>
                <a>BookMyShow</a>
            </div>
            <ul>
                <li><a href='login'>Admin</a></li>
                <li><a href='register'>Register</a></li>
            </ul>
        </div>
      </nav>
      <div class="img"></div>
      <div class="center">
     <div class="title"><h6>A single platform for easy avail entertainment</h6></div>
     <div class="sub_title">BookMyShow</div>
     <div class="btns">
      <a href="login"><button>Log In</button></a> 
     </div>
    </div>
    </div>
  );
};

export default Index;
