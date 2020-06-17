import React, {Component} from 'react';
import * as axios from 'axios';
import firebase from './Firebase';
import "./LottoRandomHeader.css";
import LottoBoxComponent from './lotto-box/LottoBoxComponent';

class LottoRandomHeader extends Component {

    state = {
        lottoNumber : [],
        drwNo : 0,
        drwNo0 :'',
        drwNo1 :'',
        drwNo2 :'',
        drwNo3 :'',
        drwNo4 :'',
        drwNo5 :''
    }

    handleOnClick=()=>{
        firebase.firestore().collection('lotto')
		.where("docid".trim(), "==", '9160')
		.get()
		.then(snap => {
			snap.forEach(doc => {
                const lottonum = doc.data();
                const lottoNumber = [];
                lottoNumber.push(lottonum.drwNo0);
                lottoNumber.push(lottonum.drwNo1);
                lottoNumber.push(lottonum.drwNo2);
                lottoNumber.push(lottonum.drwNo3);
                lottoNumber.push(lottonum.drwNo4);
                lottoNumber.push(lottonum.drwNo5);
                this.setState({lottoNumber});
                });                  
			});	

    }  
    // componentDidMount(){
    //     axios.get('http://localhost:5000/lottos/897').then((res)=>{
    //         const data = res.data;
    //         // console.log(data);
    //         if(data){
    //             const lottoNumber = [];
    //             lottoNumber.push(data.drwtNo1);
    //             lottoNumber.push(data.drwtNo2);
    //             lottoNumber.push(data.drwtNo3);
    //             lottoNumber.push(data.drwtNo4);
    //             lottoNumber.push(data.drwtNo5);
    //             lottoNumber.push(data.drwtNo6);
    //             lottoNumber.push(data.bnusNo);
    //             this.setState({lottoNumber, drwNo: data.drwNo});
    //         }
            
    //     })
    // }

    render(){
        return(
            <div className="lotto-random-header">
                <div className="lotto-title">
                    AI 로또번호 생성기
                    {/* <span>{this.state.drwNo}</span> */}
                    <button onClick={this.handleOnClick} className="number-button">인공지능 로또번호생성</button>
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