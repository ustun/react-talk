
/**
 * @jsx React.DOM
 */


var Counter = React.createClass({displayName: 'Counter',

    render: function () {
        return React.DOM.div( {className:"react-component counter"}, 
            "You clicked me 10 times"
            );

    }

});

React.renderComponent(Counter(null), document.getElementById('counter-container'));
