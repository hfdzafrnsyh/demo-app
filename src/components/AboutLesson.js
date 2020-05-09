import React from 'react' ;

class AboutLesson extends React.Component{

    render(){
        return(

            <div className='about-lesson'>
                <div className='about'>
                  <div className='about-icon'>
                  <img src={process.env.PUBLIC_URL + '/assets/image/back-about.png'}/>
                  <h4>About</h4>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, soluta harum minima nobis quibusdam, dolore cupiditate animi fugiat sit praesentium perferendis ullam repudiandae magnam voluptatem ab atque modi, quo fugit,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, soluta harum minima nobis quibusdam, dolore cupiditate animi fugiat sit praesentium perferendis ullam repudiandae magnam voluptatem ab atque modi, quo fugit!</p>
              </div>
            </div>


        );
    }


}

export default AboutLesson;