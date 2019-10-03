import React from 'react';
import { shallow } from 'enzyme';

import Population from './Population';

import { findByTestAttribute, intToString } from '../../../utils'; 

const setup = (props = {}) => {
    const component = shallow(<Population {...props}/>);
    return component;
}

const population = "unknown";

describe('Planet Component', () => {
    
    let component = shallow(<Population population={population}/>);

    it('Should render planet population', () => {
        const wrapper = findByTestAttribute(component, 'planet-population');
        const shortPopulation = intToString(population);

        expect(wrapper.text()).toBe(shortPopulation);
    });

});