import Popup from 'react-popup';
import React from 'react';
import {DialogContainer} from 'react-md';



export class CalendarPopUp extends React.Component{
    constructor(props){
        super(props);
        this.close = this.close.bind(this);

    }

    close(){
        this.props.onClosingPopUp();
    }


    render() {
        return(



            <DialogContainer
                id="simple-list-dialog"
                visible={false}
                title={this.props.popup.title}
                onHide={this.close}
                width = {'150'}
                pageX = {10}
                pageY={this.props.popup.yPosition}
                focusOnMount={false}
                fullPage={false}
               //style = {this.customStyles}


            >
                <div>Some Stuff</div>
            </DialogContainer>


        );
    }

}



