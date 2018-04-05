import React from 'react';
import {shallow} from 'enzyme';
import Board from './Board';
import Row from './Row';

describe('<Board />', () => {
    it('Should render a div with class .board and 8 .Row divs', () => {
        const wrapper = shallow((
            <Board rowCount="8" columnCount="8"/>
        ));

       // console.log('Wrapper', wrapper.debug());
       expect(wrapper.find('.board').length).toBe(1);        
       expect(wrapper.find(Row).length).toBe(8);
    });
});
