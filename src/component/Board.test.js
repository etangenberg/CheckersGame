import React from 'react';
import {shallow} from 'enzyme';
import Board from './Board';
import Row from './Row';
import GameState from '../GameState';

describe('<Board />', () => {
    it('Should render a div with class .board and 8 .Row divs', () => {
        const state = new GameState(0,8,8)
        const wrapper = shallow(<Board state={state}/>);

       // console.log('Wrapper', wrapper.debug());
       expect(wrapper.find('.board').length).toBe(1);        
       expect(wrapper.find(Row).length).toBe(8);
    });

    it('Should render pieces', () => {
        const state = new GameState(0,2,2)
        const wrapper = shallow(<Board state={state}/>);
        wrapper.first('.piece').simulate('click');
    });
});
