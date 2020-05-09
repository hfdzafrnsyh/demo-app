import React from 'react';


class Header extends React.Component {
    render() {
        return(

            <div className="header">
                <div className="header-logo">
                <img src={process.env.PUBLIC_URL + "/assets/image/h.png"}/>

                <h3>DemoApp</h3>

              
                <div className='nav'>
                
                  <div className='nav-link'>
                  <a href='/'>Home</a>
                  </div>
                  
                </div>
                </div>

                <div className='header-caption' >
                    <h1>Hello Friends</h1>
                    <p>Welcome to my page, a lesson about React.js</p>

                <div className='header-profile'>
                    <img src={process.env.PUBLIC_URL + '/assets/image/undraw_profile.png'}/>
                   <div className='btn-wrapper'>
                   <a className='btn profile' href="https://www.instagram.com/hfdzafrnsyh_/?hl=id" target="_blank"><span className='fa fa-instagram'> Profile</span></a>
                   </div>
                </div>

                </div>

            </div>

        );
    }
}

export default Header ;