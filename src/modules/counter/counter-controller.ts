import { CounterComponent } from './counter-component';
import { AppStateType } from './../../utils/types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { countIncrement, countDecrement } from './counter-actions';
import { getCount } from './counter-selectors';

type MapStatePropsType = {
  count: number
}; 

type MapDispatchPropsType = {
  countIncrement: () => void
  countDecrement: () => void
};

type OwnPropTypes = {};

export type PropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = createStructuredSelector<AppStateType, MapStatePropsType>({
  count: getCount
});

export const CounterController = connect<MapStatePropsType, MapDispatchPropsType, OwnPropTypes, AppStateType>(mapStateToProps, {
  countIncrement,
  countDecrement
})(CounterComponent);