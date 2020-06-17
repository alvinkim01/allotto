import React, {Component} from 'react';
import "./LottoBoxComponent.css";
import LotteryItem from "./LotteryItem";

class LottoBoxComponent extends Component {
    
    render(){
        const numbers = this.props.lottoNumber.slice(0,6);
        const b_number = this.props.lottoNumber[6];
   
        return(
            <React.Fragment>
            <div id="numbers">
                <LotteryItem
                    index="0"
                    color="blue"
                    number={numbers[0]}
                    // decrypting={false}
                    // decrypting={this.state.effect}
                />
                <LotteryItem
                    index="1"
                    color="blue"
                    number={numbers[1]}
                    decrypting={true}
                />
                <LotteryItem
                    index="2"
                    color="blue"
                    number={numbers[2]}
                    decrypting={false}
                />
                <LotteryItem
                    index="3"
                    color="red"
                    number={numbers[3]}
                    decrypting={true}
                />
                <LotteryItem
                    index="4"
                    color="red"
                    number={numbers[4]}
                    decrypting={true}
                />
                <LotteryItem
                    index="5"
                    color="grey"
                    number={numbers[5]}
                    decrypting={false}
                />
                
                <div className="plus">+</div>
                <LotteryItem
                    index="6"
                    color="bonus"
                    number={b_number}
                    decrypting={false}
                />
            </div>  
        </React.Fragment>
            // <div className="lotto-box-contents">
            //     <div className="lotto-box">
            //         {numbers.map((n,i)=>
            //             <div 
            //             className={`ball ${this.props.color} `}
            //                 key={i}
            //             >{n}</div>
            //         )}
            //         <div className="lotto-box-plus">+</div>
            //         <div className="lotto-box-number">{b_number}</div>
            //     </div>
            // </div>
        );
    }
}
export default LottoBoxComponent;