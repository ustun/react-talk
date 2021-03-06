
/**
 * @jsx React.DOM
 */


var Todo = React.createClass({displayName: 'Todo',

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
