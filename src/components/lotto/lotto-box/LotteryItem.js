import React, {Component} from 'react';
import "./LotteryItem.css";

class LotteryItem extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: "?",
    //         decryptingDone: "",
    //     };
    // }

    // decryptEffect() {
    //     this.setState({ decryptingDone: "" });
    //     this.timer = setInterval(() => {
    //         this.randomNumber();
    //     }, 10);
    //     setTimeout(() => {
    //         this.setState({
    //             decryptingDone: "done",
    //             number: this.props.number,
    //         });
    //         clearTimeout(this.timer);
    //     }, 1000 * +this.props.index + 1000);
    // }

    // randomNumber() {
    //     this.setState({ number: Math.round(Math.random() * 44) + 1 });
    // }

    // componentDidUpdate(nextProps) {
    //     const { decrypting } = this.props;
    //     if (nextProps.decrypting !== decrypting) {
    //         if (decrypting) {
    //             this.decryptEffect();
    //         }
    //     }
    // }

    render() {
        return (
            <div
                className={`ball ${this.props.color}`}
            >
                {this.props.number}
            </div>
        );
    }
}
export default LotteryItem;
