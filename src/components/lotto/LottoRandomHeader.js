import React, {Component} from 'react';
//import * as axios from 'axios';
import Button from '@material-ui/core/Button';
import firebase from './Firebase';
import "./LottoRandomHeader.css";
import LottoBoxComponent from './lotto-box/LottoBoxComponent';
import { withRouter } from 'react-router-dom';

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

    // handleOnClick=()=>{
    //     history.push('/payment')
        // firebase.firestore().collection('lotto')
		// .where("docid".trim(), "==", '9160')
		// .get()
		// .then(snap => {
		// 	snap.forEach(doc => {
        //         const lottonum = doc.data();
        //         const lottoNumber = [];
        //         lottoNumber.push(lottonum.drwNo0);
        //         lottoNumber.push(lottonum.drwNo1);
        //         lottoNumber.push(lottonum.drwNo2);
        //         lottoNumber.push(lottonum.drwNo3);
        //         lottoNumber.push(lottonum.drwNo4);
        //         lottoNumber.push(lottonum.drwNo5);
        //         lottoNumber.sort();
        //         this.setState({lottoNumber});
        //         });                  
		// 	});	

    // }  
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
            <div >
                <div >
                    AI 로또번호 생성기
                    {/* <span>{this.state.drwNo}</span> */}
                    <Button onClick={() => this.props.history.push('/payment')} variant="contained" color="secondary">AI Lotto번호 결제</Button>
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
export default withRouter(LottoRandomHeader);