import React from 'react';
import Card from "./Card"

class Portfolio extends React.Component{
    constructor(){
        super();
        this.webDesign = {
            title: 'Web Design',
           
          };
          this.mobileDesign = {
            title: 'Mobile Design',
           
          };
          this.logoDesign = {
            title: 'Logo Design',
           
          };
          this.webApp = {
            title: 'Web Application Development',
           
          };
          this.mobileApp = {
            title: 'mobile Application development',
           
          };
          this.pwa = {
            title: 'PWA development',
           
          };


    }
    render(){
        return(
          <div className="container"> 
          <h1 className="py-4">Portfolio</h1>
            <div className="row">
            <Card card={this.webDesign} />
            <Card card={this.mobileDesign} />
            <Card card={this.logoDesign} />
            <Card card={this.webApp} />
            <Card card={this.mobileApp} />
            <Card card={this.pwa} />

            
            </div> 
         </div>       
        );
    }

}
export default Portfolio;