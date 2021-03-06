import deckReducer from './deck-reducer';
import dealerReducer from './dealer-reducer';
import drawTwoCardsReducer from './card-draw-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	deck: deckReducer,
	dealer: dealerReducer,
	card: drawTwoCardsReducer
});

export default rootReducer;