
/**
 * @jsx React.DOM
 */


var Counter = React.createClass({displayName: 'Counter',

    getInitialState: function () {
        return {'nCounter': 0};

    },


    getDefaultProps: function () {
        return {'nMax': 5};

    },


    render: function () {
        return React.DOM.div( {className:"react-component counter"}, 
            HelloWorld( {name:this.props.name}),
            React.DOM.div(null, "You clicked me ", this.state.nCounter, " times"),

            React.DOM.button( {onClick:this.increment, className:"button-plus pure-button pure-button-primary", disabled:this.state.nCounter == this.props.nMax}, "+"),

            React.DOM.button( {onClick:this.decrement, className:"pure-button button-minus", disabled:this.state.nCounter == 0}, "-"),

            React.DOM.div(null, "You need to click me ", this.props.nMax - this.state.nCounter, " more times.")

            );

    },

     increment: function () {
        this.setState({nCounter: this.state.nCounter + 1});
     },

     decrement: function () {
        this.setState({nCounter: this.state.nCounter - 1});
     }


});

React.renderComponent(Counter( {name:"Istanbul Coders", nMax:3}), document.getElementById('counter-container'));

React.renderComponent(Counter( {name:"JavaScript Coders", nMax:5}), document.getElementById('counter-container-2'));
