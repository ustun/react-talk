
/**
 * @jsx React.DOM
 */


var UstunOzgur = React.createClass({displayName: 'UstunOzgur',



    getDefaultProps: function () {
        return {'ustun': 'ozgur'};

    },



    render: function () {
        return React.DOM.div( {className:"react-component " }, 
            "testing"
            );

    }

});

React.renderComponent(UstunOzgur(null), document.getElementById('ustun-ozgur-container'));
