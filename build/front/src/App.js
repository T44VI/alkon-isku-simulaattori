"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var Lander_1 = __importDefault(require("./Lander"));
var Host_1 = __importDefault(require("./Host"));
var Game_1 = __importDefault(require("./Game"));
var socket_io_client_1 = __importDefault(require("socket.io-client"));
var Pora_logo_white_png_1 = __importDefault(require("./kuvat/Pora_logo_white.png"));
var socket = socket_io_client_1.default('http://localhost:4000');
var App = function () {
    var _a = react_1.useState(false), failedConnect = _a[0], setFailedConnect = _a[1];
    var _b = react_1.useState({}), drinks = _b[0], setDrinks = _b[1];
    react_1.useEffect(function () {
        socket.on('connected', function () {
            socket.emit('getDrinks');
            socket.emit('getScoreboard');
        });
    });
    react_1.useEffect(function () {
        socket.on('drinks', function (data) {
            setDrinks(data);
        });
    });
    var sendMes = function () {
        socket.emit('clicked');
    };
    var emitMes = function (msg, data) {
        if (data) {
            socket.emit(msg, data);
        }
        else {
            socket.emit(msg);
        }
    };
    return (<div>
      <div className="bganim bganim1"></div>
      <div className="bganim bganim2"></div>
      <div className="bganim bganim3"></div>
      <div className="content">
        <div className="header">
          <img src={Pora_logo_white_png_1.default} className="headerLogo"/>
          <h1 className="headerText">Alkon isku -simulaattori</h1>
          <img src={Pora_logo_white_png_1.default} className="headerLogo"/>
        </div>
        <div className="innerContent">
          <react_router_dom_1.BrowserRouter>
            <react_router_dom_1.Switch>
              <react_router_dom_1.Route path="/host">
                <Host_1.default socket={socket} drinks={drinks} emitMes={emitMes}/>
              </react_router_dom_1.Route>
              <react_router_dom_1.Route path="/game">
                <Game_1.default socket={socket} drinks={drinks}/>
              </react_router_dom_1.Route>
              <react_router_dom_1.Route path="/">
                <Lander_1.default />
              </react_router_dom_1.Route>
            </react_router_dom_1.Switch>
          </react_router_dom_1.BrowserRouter>
        </div>
      </div>
    </div>);
};
exports.default = App;
/*

const App: React.FC = () => {
  useEffect(() => {
    socket.on('message', (data: any) => {
      console.log(data);
      socket.emit('message', data);
    });
  });

  const sendMes = () => {
    socket.emit('clicked');
  };

  return (
    <div>
      <button onClick={sendMes}>Send Message</button>
    </div>
  );
};

export default App;*/
