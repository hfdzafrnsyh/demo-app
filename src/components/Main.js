import React from 'react';
import Lesson from './Lesson';
import PortfolioLesson from './PortfolioLesson';
import AboutLesson from './AboutLesson';


class Main extends React.Component {
    render(){

        return(
         <div className='main'>
           <Lesson />
           <PortfolioLesson/>
           <AboutLesson/>
         </div>

        );

    }
}

export default Main ;