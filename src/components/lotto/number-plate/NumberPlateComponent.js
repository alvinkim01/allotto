import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import "./NumberPlateComponent.css";
import NumberPlateBoxComponent from './NumberPlateBoxComponent';

class NumberPlateComponent extends Component {

    render(){
        return(
            <div>
                <div className="number-plate-contents">
                { this.props.selected.map((select, index) =>
                    <NumberPlateBoxComponent
                    key={index}
                    number={index+1}
                    selected={select}
                    handleChange={this.props.handleChange}
                    
                    />
                )}
                </div>
                <Button onClick={this.props.handleButtonOnClick} variant="contained" color="primary">랜덤 로또번호 생성</Button>
            </div>
        );
    }
}
export default NumberPlateComponent;