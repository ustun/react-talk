
/**
 * @jsx React.DOM
 */


var Counter = React.createClass({displayName: 'Counter',

    render: function () {
        return React.DOM.div( {className:"react-component counter"}, 
            "You clicked me 10 times",

            React.DOM.button( {onClick:this.onClick, className:"pure-input pure-button-primary"}, "Click me")

            );

    },

    onClick: function () {
        alert("you clicked me")
    }

});

React.renderComponent(Counter(null), document.getElementById('counter-container'));
