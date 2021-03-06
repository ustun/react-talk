
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
            React.DOM.div(null, "You clicked me ", this.state.nCounter, " times"),

            React.DOM.button( {onClick:this.increment, className:"pure-input pure-button-primary", disabled:this.state.nCounter == this.props.nMax}, ' ',"+",' '),

            React.DOM.button( {onClick:this.decrement, className:"pure-input", disabled:this.state.nCounter == 0}, "-")

            );

    },

     increment: function () {
        this.setState({nCounter: this.state.nCounter + 1});
     },

     decrement: function () {
        this.setState({nCounter: this.state.nCounter - 1});
     }


});

React.renderComponent(Counter(null), document.getElementById('counter-container'));
