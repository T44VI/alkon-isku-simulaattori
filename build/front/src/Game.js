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
var Drinkput_1 = __importDefault(require("./Drinkput"));
var drinkListHeader = (<tr>
    <th>#</th>
    <th>Tuote</th>
    <th>Vahvuus</th>
    <th>Tilavuus</th>
    <th>Alkoholin määrä</th>
    <th>Poista</th>
  </tr>);
var getDrinkList = function (score, index, removeIndex) {
    return (<tr key={index}>
      <td>{index + 1}</td>
      <td>{score.name}</td>
      <td>{score.strength * 100 + "%"}</td>
      <td>{score.amount + " litraa"}</td>
      <td>{"" + Math.round(((score.amount * score.strength * 100) / 1.5) * 2) / 2}</td>
      <td className="poista" onClick={function () { return removeIndex(index); }}>
        X
      </td>
    </tr>);
};
var getTotal = function (score) {
    if (score.length <= 1) {
        return;
    }
    var avg = score.reduce(function (acc, b) { return acc + b.strength; }, 0) / score.length;
    var total = score.reduce(function (acc, b) { return acc + b.amount; }, 0);
    var alc = score.reduce(function (acc, b) { return acc + b.amount * b.strength; }, 0);
    return (<tr>
      <th>Total</th>
      <th></th>
      <th>{"AVG:" + Math.round(avg * 1000) / 10 + "%"}</th>
      <th>{Math.round(total * 10) / 10 + " l"}</th>
      <th>{"" + Math.round(((alc * 100) / 1.5) * 2) / 2}</th>
      <th></th>
    </tr>);
};
var Game = function (props) {
    var _a = react_1.useState([]), currentScore = _a[0], setCurrentScore = _a[1];
    var _b = react_1.useState(''), teamName = _b[0], setTeamName = _b[1];
    var _c = react_1.useState(''), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState(false), apiCallOnProcess = _d[0], setApiCallOnProcess = _d[1];
    react_1.useEffect(function () {
        props.socket.on('confirmScore', function () {
            setApiCallOnProcess(false);
            setCurrentScore([]);
            setTeamName('');
            setEmail('');
        });
        props.socket.on('errorScore', function () {
            setApiCallOnProcess(false);
        });
    });
    var addToScore = function (drink) {
        setCurrentScore(currentScore.concat(drink));
    };
    var removeWithIndex = function (index) {
        setCurrentScore(currentScore.slice(0, index).concat(currentScore.slice(index + 1, currentScore.length)));
    };
    var handleChange = function (event) {
        var newVal = event.target.value;
        setTeamName(newVal);
    };
    var handleChangeEmail = function (event) {
        var newVal = event.target.value;
        setEmail(newVal);
    };
    var getTeamScore = function () { return ({
        name: teamName,
        email: email,
        drinkIds: currentScore.map(function (d) { return d.id; }),
    }); };
    var sendScore = function () {
        setApiCallOnProcess(true);
        props.socket.emit('sendScore', getTeamScore());
    };
    return (<div className="game">
      <table>
        {currentScore.length ? drinkListHeader : ''}
        {currentScore.map(function (drink, index) { return getDrinkList(drink, index, removeWithIndex); })}
        {getTotal(currentScore)}
      </table>
      <Drinkput_1.default drinks={props.drinks} addToScore={addToScore}/>
      <div className="sendScore">
        <input className="teamInput" type="text" value={teamName} onChange={handleChange} placeholder="Syötä joukkueen nimi"/>
        <input className="teamInput" type="text" value={email} onChange={handleChangeEmail} placeholder="Syötä sähköpostiosoite"/>
        <div className={"confirmScore " + (apiCallOnProcess || !teamName || !currentScore.length ? 'disabled' : '')} onClick={sendScore}>
          Lähetä
        </div>
      </div>
    </div>);
};
exports.default = Game;
