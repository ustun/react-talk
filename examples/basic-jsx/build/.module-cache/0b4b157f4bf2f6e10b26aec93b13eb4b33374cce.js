
/**
 * @jsx React.DOM
 */


var Todo = React.createClass({displayName: 'Todo',


    getInitialState: function () {
        return {'items': [], newTodo: ''};

    },

    onChange: function (e) {
        this.setState({newTodo: e.target.value});
    },

    onSubmit: function (e) {
        e.preventDefault();
        var newItems = this.state.items.concat([this.state.newTodo]);
        this.setState({"items": newItems, "newTodo": ""});
    },

    render: function () {
        return React.DOM.div( {className:"react-component"}, 
            React.DOM.form( {onSubmit:this.onSubmit}, 
            React.DOM.input(  {type:"text", value:this.state.newTodo, onChange:this.onChange}),
            React.DOM.button( {onClick:this.onSubmit, className:"pure-input pure-button-primary"}, "Submit")
            ),

            React.DOM.li(null

            )
            );

    }

});

React.renderComponent(Todo(null), document.getElementById('todo-container'));
