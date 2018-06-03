import {DialogContainer, ListItem, List} from 'react-md';
import React from 'react';


export class CalendarPopUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: props.popup.title,
            credits: props.popup.credits,
            description: props.popup.description,
            visible: props.popup.visible,
            xPosition: props.popup.xPosition,
            yPosition: props.popup.yPosition
        };


        this.close = this.close.bind(this);

    }

    close(){
        this.setState({
            title : '',
            credits : '',
            description : '',
            visible : false,
            xPosition : '',
            yPosition : ''
        });
    }

    render() {
        return(
            <DialogContainer
                id="simple-list-dialog"
                visible={this.state.visible}
                title="Simple List Dialog"
                onHide={this.close}
            >
                <List>
                    <ListItem primaryText="Single line text goes here" />
                    <ListItem primaryText="Two line wrapped text goes here making it wrap to the next line" />
                    <ListItem primaryText="Single line text goes here" />
                    <ListItem primaryText="Three line wrapped text goes here making it wrap to the next line and continues longer to be here" />
                </List>
            </DialogContainer>

        );
    }

}



