import React, {Component} from 'react';
import * as axios from 'axios';
import "./LottoRandomHeader.css";
import LottoBoxComponent from './lotto-box/LottoBoxComponent';

class LottoRandomHeader extends Component {

    state = {
        lottoNumber : [],
        drwNo : 0
    }

    aiLottoNumber(){
        // const url = '/api/customers/' + id;
        // fetch(url, {
        //    method: 'DELETE' 
        // });
        // this.props.stateRefresh();
    }

    componentDidMount(){
        
          axios.get('http://localhost:5000/posts/lottos/900').then((res)=>{
            const data = res.data;
            // console.log(data);
            if(data){
                const lottoNumber = [];
                lottoNumber.push(data.drwtNo1);
                lottoNumber.push(data.drwtNo2);
                lottoNumber.push(data.drwtNo3);
                lottoNumber.push(data.drwtNo4);
                lottoNumber.push(data.drwtNo5);
                lottoNumber.push(data.drwtNo6);
                lottoNumber.push(data.bnusNo);
                this.setState({lottoNumber, drwNo: data.drwNo});
            }
        })
    }

    render(){
        return(
            <div className="lotto-random-header">
                <div className="lotto-title">
                    AI Lotto
                    {/* <span>{this.state.drwNo}회차</span> */}
                    <button onClick={(e) => {this.aiLottoNumber()}}>AI Lotto번호 예측</button>
                </div>
                <div>
                    <LottoBoxComponent
                        lottoNumber={this.state.lottoNumber}
                    />
                </div>
            </div>
        );
    }
}
export default LottoRandomHeader;