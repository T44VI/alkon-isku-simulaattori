"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Lander = function (props) {
    return (<nav>
      <ul>
        <li>
          <react_router_dom_1.Link to="/host">Scoreboard</react_router_dom_1.Link>
        </li>
        <li>
          <react_router_dom_1.Link to="/game">Client</react_router_dom_1.Link>
        </li>
      </ul>
    </nav>);
};
exports.default = Lander;
