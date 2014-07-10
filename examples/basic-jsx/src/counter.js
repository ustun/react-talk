
/**
 * @jsx React.DOM
 */


var Counter = React.createClass({

    getInitialState: function () {
        return {'nCounter': 0};

    },


    getDefaultProps: function () {
        return {'nMax': 5};

    },


    render: function () {
        return <div className="react-component counter">
            <HelloWorld name={this.props.name}/>
            <div>You clicked me {this.state.nCounter} times</div>

            <button onClick={this.increment} className="button-plus pure-button pure-button-primary" disabled={this.state.nCounter == this.props.nMax}>+</button>

            <button onClick={this.decrement} className="pure-button button-minus" disabled={this.state.nCounter == 0}>-</button>

            <div>You need to click me {this.props.nMax - this.state.nCounter} more times.</div>

            </div>;

    },

     increment: function () {
        this.setState({nCounter: this.state.nCounter + 1});
     },

     decrement: function () {
        this.setState({nCounter: this.state.nCounter - 1});
     }


});

React.renderComponent(<Counter name="Istanbul Coders" nMax={3}/>, document.getElementById('counter-container'));

React.renderComponent(<Counter name="JavaScript Coders" nMax={5}/>, document.getElementById('counter-container-2'));
