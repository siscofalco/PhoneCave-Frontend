import React, { Component } from 'react';
import PhoneService from '../services/phone-service';

class Phones extends Component {
    constructor(props){
        super(props)
    }

    getPhonesData(){
        const phoneService = new PhoneService();
        phoneService.getAllPhones()
        .then((response) => {
            console.log(response);
        })
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Phones;
