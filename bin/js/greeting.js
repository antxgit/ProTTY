"use strict";
var hello_world_1 = require("./hello-world");
var React = require("react");
var ReactDOM = require("react-dom");
var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.hello = function () {
        ReactDOM.render(React.createElement(hello_world_1.default, null), document.getElementById('content'));
    };
    return Greeting;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Greeting;
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcmMvYXBwL2dyZWV0aW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkNBQXVDO0FBQ3ZDLDZCQUErQjtBQUMvQixvQ0FBc0M7QUFFdEM7SUFBQTtJQVNBLENBQUM7SUFQRyx3QkFBSyxHQUFMO1FBRUksUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxxQkFBVSxPQUFHLEVBQ2QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDckMsQ0FBQztJQUNOLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7OztBQUFBLENBQUMiLCJmaWxlIjoiZ3JlZXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVsbG9Xb3JsZCBmcm9tICcuL2hlbGxvLXdvcmxkJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JlZXRpbmcge1xyXG5cclxuICAgIGhlbGxvKCkge1xyXG5cclxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgICAgIDxIZWxsb1dvcmxkIC8+LFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTsiXX0=
