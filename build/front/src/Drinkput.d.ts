/// <reference types="react" />
import { Drink, Drinklist } from './types';
interface Props {
    drinks: Drinklist;
    addToScore: (a: Drink) => void;
}
declare const Drinkput: (props: Props) => JSX.Element;
export default Drinkput;
