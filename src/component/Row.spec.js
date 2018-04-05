import React from 'react';
import {shallow} from 'enzyme';
import Row from './Row';
import Tile from './Tile';
// import sinon from 'sinon';

describe('<Row />', () => {
    it('Should render a div with class .row and 8 .tile divs', () => {
        const wrapper = shallow((
            <Row row="6" columnCount="8"/>
        ));

       // console.log('Wrapper', wrapper.debug());
       expect(wrapper.find('.row').length).toBe(1);        
       expect(wrapper.find(Tile).length).toBe(8);
    });
});
