
/**
 * @jsx React.DOM
 */


var HelloWorld = React.createClass({displayName: 'HelloWorld',

    render: function () {
        return React.DOM.div( {className:""}, 
            "Hello ", this.props.name
            );

    }

});

// React.renderComponent(<HelloWorld/>, document.getElementById('hello-world-container'));
