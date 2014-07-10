
/**
 * @jsx React.DOM
 */


var HelloWorld = React.createClass({

    render: function () {
        return <div className="">
            Hello {this.props.name}
            </div>;

    }

});

// React.renderComponent(<HelloWorld/>, document.getElementById('hello-world-container'));
