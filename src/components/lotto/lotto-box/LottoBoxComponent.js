import React, {Component} from 'react';
import LotteryItem from './LotteryItem';
import "./LottoBoxComponent.css";

class LottoBoxComponent extends Component {
    
    render(){
        const numbers = this.props.lottoNumber.slice(0,6);
        const b_number = this.props.lottoNumber[6];
        
        return (
            <React.Fragment>               
                <div id="numbers">
                    <LotteryItem
                        index="0"
                        color="blue"
                        number={numbers[0]}
                        // decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="1"
                        color="blue"
                        number={numbers[1]}
                        // decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="2"
                        color="blue"
                        number={numbers[2]}
                        // decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="3"
                        color="red"
                        number={numbers[3]}
                        // decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="4"
                        color="red"
                        number={numbers[4]}
                        // decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="5"
                        color="grey"
                        number={numbers[5]}
                        // decrypting={this.state.effect}
                    />
                    <div className="plus">+</div>
                    <LotteryItem
                        index="6"
                        color="bonus"
                        number={b_number}
                        // decrypting={this.state.effect}
                    />
                </div>
                {/* <div>
                    <LotteryButton
                        decrypting={this.state.effect}
                        run={this.randomize}
                    />
                </div> */}
            </React.Fragment>
        );
        // return(
        //     <div className="lotto-box-contents">
        //         <div className="lotto-box">
        //             {numbers.map((n,i)=>
        //                 <div 
        //                     className="lotto-box-number"
        //                     key={i}
        //                 >{n}</div>
        //             )}
        //             <div className="lotto-box-plus">+</div>
        //             <div className="lotto-box-number">{b_number}</div>
        //         </div>
        //     </div>
        // );
    }
}
export default LottoBoxComponent;
