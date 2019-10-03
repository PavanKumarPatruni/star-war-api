import React from 'react';
import { shallow } from 'enzyme';

import PlanetDetails from './PlanetDetails';

import { findByTestAttribute } from '../../../utils'; 

const setup = (props = {}) => {
    const component = shallow(<PlanetDetails {...props}/>);
    return component;
}

describe('PlanetDetails Component', () => {
    
    let component;
    const props = {
        value: {"name":"Hoth","rotation_period":"23","orbital_period":"549","diameter":"7200","climate":"frozen","gravity":"1.1 standard","terrain":"tundra, ice caves, mountain ranges","surface_water":"100","population":"unknown","residents":[],"films":["https://swapi.co/api/films/2/"],"created":"2014-12-10T11:39:13.934000Z","edited":"2014-12-20T20:58:18.423000Z","url":"https://swapi.co/api/planets/4/"}
    }
    beforeEach(() => {
        component = setup(props);
    });

    it('Should render planet climate', () => {
        const wrapper = findByTestAttribute(component, 'planet-climate');
        expect(wrapper.text()).toBe(props.value.climate);
    });

    it('Should render planet diameter', () => {
        const wrapper = findByTestAttribute(component, 'planet-diameter');
        expect(wrapper.text()).toBe(props.value.diameter);
    });

    it('Should render planet orbital period', () => {
        const wrapper = findByTestAttribute(component, 'planet-orbital-period');
        expect(wrapper.text()).toBe(props.value.orbital_period);
    });

    it('Should render planet rotation period', () => {
        const wrapper = findByTestAttribute(component, 'planet-rotation-period');
        expect(wrapper.text()).toBe(props.value.rotation_period);
    });

    it('Should render planet terrain', () => {
        const wrapper = findByTestAttribute(component, 'planet-terrain');
        expect(wrapper.text()).toBe(props.value.terrain);
    });

    it('Should render planet surface water', () => {
        const wrapper = findByTestAttribute(component, 'planet-surface-water');
        expect(wrapper.text()).toBe(props.value.surface_water);
    });

    it('Should render planet gravity', () => {
        const wrapper = findByTestAttribute(component, 'planet-gravity');
        expect(wrapper.text()).toBe(props.value.gravity);
    });

});