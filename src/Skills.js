import React from "react";
import "./skills.css";
import Progress from "./Progress"


class Skills extends React.Component {
constructor(){
  super();
  this.html={title:'Html'}
  this.css={title:'CSS'}
  this.react={title:'REACT'}
  this.js={title:'JAVASCRIPT'}
  this.php={title:'PHP'}
}

  render() {
    return (
        <div id="skills" className="">
            <div className="container  text-center ">
        <h1 className="py-4 ">Skills</h1>
        <p className="px-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          repellendus ipsa alias ducimus eligendi, possimus laborum, aliquid
          minus perspiciatis nobis itaque aut, cumque neque quod. Odit
          repudiandae dolore tempore ipsa. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Nulla repellendus ipsa alias ducimus
          eligendi, possimus laborum, aliquid minus perspiciatis nobis itaque
          aut, cumque neque quod. Odit repudiandae dolore tempore ipsa.
        </p>
        <div className="row py-5">
          <div className="col-3">
                <h2 className="py-2">My Focus</h2>
                <hr></hr>
                <p>Backend</p>
                <p>PHP</p>
                <p>Laravel</p>
           </div>
          

           <div className="col-9">
           
                          <Progress pro={this.html}/>
                          <Progress pro={this.css}/>
                          <Progress pro={this.js}/>
                          <Progress pro={this.react}/>
                          <Progress pro={this.php}/>

           
           </div>

        </div>
      </div>
        </div>
      
    );
  }
}

export default Skills;


