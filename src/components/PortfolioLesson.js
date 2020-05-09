import React from 'react';


class PortfolioLesson extends React.Component {


    render() {
        return(
         <div id="portfolio" className="portfolio">
           
                <h1 className="portfolio-title">Portfolio Examples</h1>
                <div className="portfolio-link">
                    <a href="#all">All</a>
                    <a href="#web-design">Web Design</a>
                    <a href="#logo-design">Logo Design</a>
                    <a href="#branding">Branding</a>
                </div>
                <div className="portfolio-image">
                    <img id="all" src={process.env.PUBLIC_URL + '/assets/image/imagep3.jpg'} alt=""/>
                    <img id="web-design" src={process.env.PUBLIC_URL + '/assets/image/imagep4.jpeg'} alt=""/>
                    <img id="logo-design" src={process.env.PUBLIC_URL + '/assets/image/imagep2.jpg'} alt=""/>
                    <img id="branding" src={process.env.PUBLIC_URL + '/assets/image/imagep1.jpg'} alt=""/>
                </div>
          
        </div>
        );
    }





}

export default PortfolioLesson;