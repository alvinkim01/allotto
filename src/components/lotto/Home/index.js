import React, {Component} from 'react';
// import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import { withRouter } from 'react-router-dom';
import LottoRandomHeader from '../LottoRandomHeader';
import LottoRandomSideMenu from '../LottoRandomSideMenu';
import LottoRandomContents from '../LottoRandomContents';

// import "./index.css";
<<<<<<< HEAD

const useStyles = withStyles((theme) => ({
=======
// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
>>>>>>> f30bf75bfa2bd10fbf398402d559fcc1acee5af1
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

class Home extends Component {
    

    state = {
        selected : [],
        lottoNumbers : []
    }

    componentDidMount(){
        const {selected} = this.state;
        for(let i=1; i<47; i++){
            selected.push(false);
        } 
        this.setState({selected});
    }

    handleChange = (checked, number) => {
        console.log(number);
        const { selected } = this.state;
        selected[number-1] = checked;
        this.setState({selected});
    };

    handleButtonOnClick = () => {
        const {selected, lottoNumbers} = this.state;
        const numbers = [];
        let selectedNumberCount = 0;

        selected.forEach((s, i) => {
            if(s) {
                selectedNumberCount++;
                numbers.push(i+1);
            }
        })

        if(selectedNumberCount < 7){
            alert("7개 이상 번호를 선택해야 합니다.")
            return;
        }else{
            const lotto = this.selectLotto([], numbers);
            lottoNumbers.push(lotto);
            this.setState({lottoNumbers});   
        }
    }

    selectLotto = (lottoNumber, numbers) => {
        if(lottoNumber.length === 7) {
            const temp = lottoNumber.slice(0,6);
            temp.sort((a,b)=>a-b);
            temp.push(lottoNumber[6]);
            return temp
        }
        let n = numbers[Math.floor(Math.random() * numbers.length)];
        if(lottoNumber.indexOf(n) < 0 ){
            lottoNumber.push(n);
        }
        return this.selectLotto(lottoNumber, numbers);
    }


    render(){
<<<<<<< HEAD
        const classes = this.props;

        return(
            <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <LottoRandomHeader/>
              </Grid>    
              <Grid item xs={4} sm={3}>
              <LottoRandomSideMenu
=======
        const classes = useStyles();

        return (
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <LottoRandomHeader/>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
              <Grid item xs={6}>
                <LottoRandomSideMenu
>>>>>>> f30bf75bfa2bd10fbf398402d559fcc1acee5af1
                        selected={this.state.selected}
                        handleChange={this.handleChange}
                        handleButtonOnClick={this.handleButtonOnClick}
                    />
<<<<<<< HEAD
              </Grid>
              <Grid item xs={8} sm={3}>
              <LottoRandomContents lottoNumbers={this.state.lottoNumbers} />
              </Grid>
         
            </Grid>
          </div>
            
            // <div className="lotto-random-template">
            //     <LottoRandomHeader/>
            //     <div className="lotto-random-main">
            //         <LottoRandomSideMenu
            //             selected={this.state.selected}
            //             handleChange={this.handleChange}
            //             handleButtonOnClick={this.handleButtonOnClick}
            //         />
            //         <LottoRandomContents
            //             lottoNumbers={this.state.lottoNumbers}
            //         />
            //     </div>
            // </div>
=======
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
                <LottoRandomContents
                        lottoNumbers={this.state.lottoNumbers}
                />
              </Grid>
          
            </Grid>
          </div>
>>>>>>> f30bf75bfa2bd10fbf398402d559fcc1acee5af1
        );
        // return(
        //     <div className="lotto-random-template">
        //         <LottoRandomHeader/>
        //         <div className="lotto-random-main">
        //             <LottoRandomSideMenu
        //                 selected={this.state.selected}
        //                 handleChange={this.handleChange}
        //                 handleButtonOnClick={this.handleButtonOnClick}
        //             />
        //             <LottoRandomContents
        //                 lottoNumbers={this.state.lottoNumbers}
        //             />
        //         </div>
        //     </div>
        // );
    }
}

export default withRouter(Home);