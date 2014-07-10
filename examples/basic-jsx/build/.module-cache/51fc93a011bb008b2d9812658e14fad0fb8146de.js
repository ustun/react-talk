
/**
 * @jsx React.DOM
 */


var Counter = React.createClass({displayName: 'Counter',

    getInitialState: function () {
        return {'nCounter': 0};

    },

    render: function () {
        return React.DOM.div( {className:"react-component counter"}, 
            "You clicked me ", this.state.nCounter, " times",

            React.DOM.button( {onClick:this.onClick, className:"pure-input pure-button-primary"}, "Click me")

            );

    },

    onClick: function () {
        this.setState({nCounter: this.state.nCounter + 1});
    }

});

React.renderComponent(Counter(null), document.getElementById('counter-container'));
