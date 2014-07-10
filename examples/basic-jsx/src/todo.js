
/**
 * @jsx React.DOM
 */


var TodoList = React.createClass({


    render: function () {

        var createItem = function (x)  {
            return <li>{x}</li>;
        };

        var items = <ul>
                {this.props.items.map(createItem)}
        </ul>;

        return items;

    }

});


var Todo = React.createClass({


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


        var form = <form onSubmit={this.onSubmit} className="pure-form">
                <input type="text" value={this.state.newTodo} onChange={this.onChange}/>
                <button onClick={this.onSubmit} className="pure-button pure-button-primary">Submit</button>
                </form>;

        return <div className="react-component">
            <TodoList items={this.state.items}/>
        {form}
        </div>;

    }

});

React.renderComponent(<Todo/>, document.getElementById('todo-container'));

var myItems = ["milk", "honey"];

React.renderComponent(<TodoList items={myItems}/>, document.getElementById('my-items-container'));
