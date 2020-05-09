import React from 'react';


class Lesson extends React.Component {

    render(){

        let listDaftar = [
            {  name : "AnonymK" ,
              image : process.env.PUBLIC_URL + '/assets/image/undraw_female.png' ,
              text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, soluta harum minima nobis quibusdam, dolore cupiditate animi fugiat sit praesentium perferendis ullam repudiandae magnam voluptatem ab atque modi, quo fugit!"
            },
            {  name : "AnonymS" ,
              image : process.env.PUBLIC_URL + '/assets/image/undraw_male.png',
              text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, soluta harum minima nobis quibusdam, dolore cupiditate animi fugiat sit praesentium perferendis ullam repudiandae magnam voluptatem ab atque modi, quo fugit!"
            },
            {  name : "AnonymA" ,
              image : process.env.PUBLIC_URL + '/assets/image/undraw_female.png',
              text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, soluta harum minima nobis quibusdam, dolore cupiditate animi fugiat sit praesentium perferendis ullam repudiandae magnam voluptatem ab atque modi, quo fugit!"
            },
            {  name : "Anonymh" ,
              image : process.env.PUBLIC_URL + '/assets/image/undraw_male.png',
              text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, soluta harum minima nobis quibusdam, dolore cupiditate animi fugiat sit praesentium perferendis ullam repudiandae magnam voluptatem ab atque modi, quo fugit!"
            }
  
  
          ]
  

        return(

            <div className='lesson-wrapper'>
                 <div className='heading-lesson'>
                  <h1>Users</h1>
                  </div>
                <div className='lessons'>
                    {listDaftar.map((list) => {
                        return(
                            
                            <div className='lesson'>
                            <div className='lesson-icon'>
                                <img src={list.image}/>
                                <h4>{list.name}</h4>
                            </div>
                        <p className='txt-content'>{list.text}</p>
                        </div>


                        );
                    })}                    
                </div>
            </div>


        );
    }


}

export default Lesson ;