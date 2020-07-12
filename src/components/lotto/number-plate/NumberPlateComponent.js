import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import "./NumberPlateComponent.css";
import NumberPlateBoxComponent from './NumberPlateBoxComponent';

class NumberPlateComponent extends Component {

    render(){
        return(
            <div>
                <p>7개 이상의 번호를 선택하시고 로또번호 생성 버튼을 연속해서 원하는 회수만큼 누르십시요.</p>
                <Button onClick={this.props.handleButtonOnClick} variant="contained" color="primary">로또번호 생성</Button>
                
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
            </div>
        );
    }
}
export default NumberPlateComponent;