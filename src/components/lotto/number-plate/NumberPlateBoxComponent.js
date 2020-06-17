import React, {Component} from 'react';
import "./NumberPlateBoxComponent.css";
import Checkbox from '@material-ui/core/Checkbox';

class NumberPlateBoxComponent extends Component {

    handleChange = (e) => {
        const { checked } = e.target;
        this.props.handleChange(checked, this.props.number);
    };
   
    render(){
        return(
            <div className="number-plate-box-contents">
                <div>
                {/* <div className="number-plate-box"> */}
                    {/* <input
                        type="checkbox"
                        checked={this.props.selected}
                        onChange={this.handleChange}
                    /> */}
                     <Checkbox
                        checked={this.props.selected}
                        onChange={this.handleChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <span>{this.props.number}</span>
                </div>
            </div>
        );
    }
}
export default NumberPlateBoxComponent