import React from 'react';
import './Cal.css';

class CalSum extends React.Component{
    constructor(props) {
        super(props);
        this.state = { Val_1:0, Val_2:0, Res:0};
    }

    render() {
        return(
            <form>
                <input id="Number_1"
                    onChange={this.handleChange_1.bind(this)}
                    value={this.state.Val_1}
                />
                <div>+</div>
                <input id="Number_2"
                    onChange={this.handleChange_2.bind(this)}
                    value={this.state.Val_2}
                />
                <div>=</div>
                <Result result={this.state.Res}/>
            </form>

        );
    }

    handleChange_1(e) {
        e.persist();
        try {
            if (isNaN(parseInt(e.target.value))) {
                this.setState({ Val_1: 0});
                this.setState((state) => ({Res:state.Val_1+state.Val_2}));
                return;
            }
            this.setState((state) => ({ Val_1: parseInt(e.target.value)}));
            this.setState((state) => ({Res:state.Val_1+state.Val_2}));
        } catch (error) {
            this.setState({ Val_1: 0});
            this.setState((state) => ({Res:state.Val_1+state.Val_2}));
        }
    }

    handleChange_2(e) {
        e.persist();
        try {
            if (isNaN(parseInt(e.target.value))) {
                this.setState({ Val_2: 0});
                this.setState((state) => ({Res:state.Val_1+state.Val_2}));
                return;
            }
            this.setState((state) => ({ Val_2: parseInt(e.target.value)}));
            this.setState((state) => ({Res:state.Val_1+state.Val_2}));
        } catch (error) {
            this.setState({ Val_2: 0});
            this.setState((state) => ({Res:state.Val_1+state.Val_2}));
        }
    }
}

class Result extends React.Component {
    render() {
      return (
        <div>{this.props.result}</div>
      );
    }
}

export default CalSum;