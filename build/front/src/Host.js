"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var templateScoreBoard = {
    litrat: 0,
    annokset: 0,
    tuotteet: 0,
    top: [],
    topJuomat: [],
    last: { name: 'Ei vielä raittiusritareita :D', drinkIds: [] },
};
var MyCounter = function (props) {
    return (<div className="counter">
      <span className="counterOtsikko">{props.name}</span>
      <span className="counterCounter">{props.end}</span>
    </div>);
};
var MyTable = function (props) {
    var numbers = props.numbers, data = props.data, labels = props.labels;
    if (data.length === 0)
        return <div>no data</div>;
    var keys = Object.keys(data[0]);
    var headers = (<tr className="hostRow">
      {(numbers ? [<th className="hostHeader">#</th>] : []).concat(keys.map(function (key) { return (labels && labels[key] ? <th className="hostHeader">{labels[key]}</th> : <th>{key}</th>); }))}
    </tr>);
    var rows = data.map(function (row, i) { return (<tr className="hostRow">
      {(numbers ? [<td className="hostCell">{i + 1}</td>] : []).concat(keys.map(function (key) { return <td className="hostCell">{row[key]}</td>; }))}
    </tr>); });
    return (<table className={props.className + ' hostTable' || 'hostTable'}>
      {headers}
      {rows}
    </table>);
};
var Host = function (props) {
    var _a = react_1.useState(templateScoreBoard), oldScoreboard = _a[0], setOldScoreboard = _a[1];
    var _b = react_1.useState(templateScoreBoard), scoreboard = _b[0], setScoreboard = _b[1];
    var updateScoreboad = function (sb) {
        setOldScoreboard(scoreboard);
        setScoreboard(sb);
    };
    var updateWithSelf = function () {
        updateScoreboad(scoreboard);
    };
    react_1.useEffect(function () {
        props.socket.on('setScoreboard', function (data) {
            console.log(data);
            updateScoreboad(data);
        });
    });
    var lastMapped = scoreboard.last.drinkIds.map(function (row) { return props.drinks[row]; });
    var lastScores = {
        litrat: Math.round(lastMapped.reduce(function (acc, j) { return acc + j.amount; }, 0) * 10) / 10,
        annokset: Math.round((lastMapped.reduce(function (acc, j) { return acc + j.strength * j.amount; }, 0) * 100) / 1.5),
        tuotteet: lastMapped.length,
    };
    return (<div>
      <div className="hostMain">
        <div className="hostMainCell">
          <MyTable data={scoreboard.top} numbers={true} labels={{ name: 'Nimi', annokset: 'Annokset', litrat: 'Litrat', tuotteet: 'Tuotteiden lkm' }}/>
        </div>
        <div className="hostMainCell">
          <MyTable data={scoreboard.topJuomat
        .map(function (row) { return (__assign({ kerrat: row.amount }, props.drinks[row.id])); })
        .map(function (row) { return ({ nimi: row.name, amount: row.amount, strength: row.strength, kerrat: row.kerrat }); })} numbers={true} labels={{ nimi: 'Tuotteen nimi', amount: 'Määrä', strength: 'Vahvuus', kerrat: 'Ostojen lkm' }}/>
        </div>
        <div className="hostMainCell">
          <h2 className="lastResult">
            <u>Viimeisin tulos</u>
          </h2>
          <h3 className="lastName">{scoreboard.last.name}</h3>
          <table className="lastTable">
            <tr>
              <td className="lastLabel">Annokset</td>
              <td className="lastVal">{lastScores.annokset}</td>
            </tr>
            <tr>
              <td className="lastLabel">Litrat</td>
              <td className="lastVal">{lastScores.litrat}</td>
            </tr>
            <tr>
              <td className="lastLabel">Tuotteiden lkm</td>
              <td className="lastVal">{lastScores.tuotteet}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="TopCounter">
        <MyCounter end={scoreboard.litrat} name="litrat"/>
        <MyCounter end={scoreboard.annokset} name="alkoholi-annokset"/>
        <MyCounter end={scoreboard.tuotteet} name="juomat"/>
      </div>
    </div>);
};
exports.default = Host;
