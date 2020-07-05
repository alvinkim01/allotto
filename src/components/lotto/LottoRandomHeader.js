import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
//import * as axios from 'axios';
import Button from '@material-ui/core/Button';
import firebase from './Firebase';
import "./LottoRandomHeader.css";
import LottoBoxComponent from './lotto-box/LottoBoxComponent';
import { withRouter } from 'react-router-dom';

const useStyles = withStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

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
    //     // history.push('/payment')
    //     firebase.firestore().collection('lotto')
	// 	.where("docid".trim(), "==", '9160')
	// 	.get()
	// 	.then(snap => {
	// 		snap.forEach(doc => {
    //             const lottonum = doc.data();
    //             const lottoNumber = [];
    //             lottoNumber.push(lottonum.drwNo0);
    //             lottoNumber.push(lottonum.drwNo1);
    //             lottoNumber.push(lottonum.drwNo2);
    //             lottoNumber.push(lottonum.drwNo3);
    //             lottoNumber.push(lottonum.drwNo4);
    //             lottoNumber.push(lottonum.drwNo5);
    //             lottoNumber.sort();
    //             this.setState({lottoNumber});
    //             });                  
	// 		});	

    // }  

    componentDidMount(){
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
                lottoNumber.sort();
                this.setState({lottoNumber});
                });                  
            });	
        }
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
        const classes = this.props;
        return(
            <div >
                <div className="lotto-title" >
                    AI 로또번호 생성기
                    <span>{this.state.drwNo}</span>
                    
                </div>
                {/* <div>
                 <Button
                    onClick={this.handleOnClick}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    // startIcon={<CloudUploadIcon />}
                >
                   AI 엔진 예측 번호
                </Button> 
                 <Button onClick={this.handleOnClick} variant="contained" color="primary">인공지능 엔진으로 예측한 번호 </Button>
                 <Button onClick={() => this.props.history.push('/payment')} variant="contained" color="secondary">AI Lotto번호 결제</Button>
                </div> */}
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