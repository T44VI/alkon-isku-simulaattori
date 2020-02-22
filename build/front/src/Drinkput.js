"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Drinkput = function (props) {
    var _a = react_1.useState(''), value = _a[0], setValue = _a[1];
    var drinks = props.drinks, addToScore = props.addToScore;
    var handleChange = function (event) {
        var newVal = event.target.value;
        if (drinks[newVal]) {
            addToScore(drinks[newVal]);
            setValue('');
        }
        else {
            setValue(newVal);
        }
    };
    return (<div className="drinkputWpr">
      <input className="drinkput" type="text" value={value} onChange={handleChange} placeholder="Syötä koodi"/>
    </div>);
};
exports.default = Drinkput;
