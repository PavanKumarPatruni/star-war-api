import React from 'react';
import { shallow } from 'enzyme';

import Planet from './Planet';

import { findByTestAttribute } from '../../../utils';

const setup = (props = {}) => {
    const component = shallow(<Planet {...props}/>);
    return component;
}

const props = {
    value: {"name":"Hoth","rotation_period":"23","orbital_period":"549","diameter":"7200","climate":"frozen","gravity":"1.1 standard","terrain":"tundra, ice caves, mountain ranges","surface_water":"100","population":"unknown","residents":[],"films":["https://swapi.co/api/films/2/"],"created":"2014-12-10T11:39:13.934000Z","edited":"2014-12-20T20:58:18.423000Z","url":"https://swapi.co/api/planets/4/"}
}

describe('Planet Component', () => {
    
    let component;
    beforeEach(() => {
        component = setup(props);
    });

    it('Should render planet title', () => {
        const wrapper = findByTestAttribute(component, 'planet-title');
        expect(wrapper.text()).toBe(props.value.name);
    });

});