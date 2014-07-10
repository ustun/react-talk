
/**
 * @jsx React.DOM
 */


var TodoList = React.createClass({displayName: 'TodoList',


    render: function () {

        var createItem = function (x)  {
            return React.DOM.li(null, x);
        };

        var items = React.DOM.ul(null, 
                this.props.items.map(createItem)
        );

        return items;

    }

});


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


        var form = React.DOM.form( {onSubmit:this.onSubmit}, 
                React.DOM.input( {type:"text", value:this.state.newTodo, onChange:this.onChange}),
                React.DOM.button( {onClick:this.onSubmit, className:"pure-button pure-button-primary"}, "Submit")
                );

        return React.DOM.div( {className:"react-component"}, 
            TodoList( {items:this.state.items}),
        form
        );

    }

});

React.renderComponent(Todo(null), document.getElementById('todo-container'));

var myItems = ["milk", "honey"];

React.renderComponent(TodoList( {items:myItems}), document.getElementById('my-items-container'));
