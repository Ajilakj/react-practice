import React from 'react';
import Avtar from './Avtar';
import Detail from './Detail';

function Card(props){
    return(
        <div className="card">
            <div className="top">
                <h2 className="heading">{props.name}</h2>
                <Avtar img={props.img}/>
            </div>
            <Detail tel={props.tel} email={props.email}/>
        </div>
    )

}

const Props = () => {
  return (
    <div>
      <Card name = "test prop1"
      img = "https://careernetwork.2u.com/wp-content/uploads/2023/02/Crafting-an-Industry-Backed-LinkedIn-Profile.jpg?resize=1536,1024"
      tel = "1234567890"
      email = "test@gmail.com"
      />
      <Card name = "test prop2"
      img = "https://careernetwork.2u.com/wp-content/uploads/2023/01/Data-Analytics-Interview-Prep.jpg?resize=1536,1024"
      tel = "111111122222"
      email = "test2@gmail.com"
      />
    </div>
  )
}

export default Props
