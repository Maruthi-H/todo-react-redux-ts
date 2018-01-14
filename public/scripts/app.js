"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: []
        };
        _this.onOptionsClearClick = _this.onOptionsClearClick.bind(_this);
        _this.onActionClick = _this.onActionClick.bind(_this);
        _this.onAddOption = _this.onAddOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "onOptionsClearClick",
        value: function onOptionsClearClick() {
            this.setState({ options: [] });
        }
    }, {
        key: "onActionClick",
        value: function onActionClick() {
            var rand = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[rand]);
        }
    }, {
        key: "onAddOption",
        value: function onAddOption(option) {
            if (!option) {
                return "Enter a valid option";
            } else if (this.state.options.indexOf(option) > 0) {
                return "Entered option already exists";
            } else {
                this.setState(function (prevState) {
                    return {
                        options: prevState.options.concat(option)
                    };
                });
            }
        }
    }, {
        key: "onRemoveOption",
        value: function onRemoveOption() {}
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: "Indecision-New", info: "Put your life in the hands of your computer" }),
                React.createElement(Action, { text: "What should i do?", onActionClick: this.onActionClick }),
                React.createElement(Options, { options: this.state.options, onOptionsClear: this.onOptionsClearClick }),
                React.createElement(AddOption, { onAddOption: this.onAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Title"
        ),
        React.createElement(
            "h3",
            null,
            props.title
        ),
        React.createElement(
            "h5",
            null,
            props.info
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.onActionClick },
            props.text
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.onOptionsClear },
            "Clear All Options"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, text: option });
        })
    );
};

var Option = function Option(props) {

    return React.createElement(
        "div",
        null,
        props.text,
        React.createElement(
            "button",
            { onClick: undefined.onRemoveOption },
            "-"
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.state = {
            error: undefined
        };
        _this2.onOptionSubmit = _this2.onOptionSubmit.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: "onOptionSubmit",
        value: function onOptionSubmit(e) {
            e.preventDefault();
            //console.log("alert");
            var option = e.target.elements.option.value.trim();
            var error = this.props.onAddOption(option);
            this.setState(error);
            e.target.elements.option.setAttribute("value", " ");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h4",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.onOptionSubmit },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("idContent"));
