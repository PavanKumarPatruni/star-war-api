import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

import { findByTestAttribute } from '../../utils'; 

const setup = (props = {}) => {
    const component = shallow(<Header {...props}/>);
    return component;
}

describe('Header Component', () => {
    
    describe('Header Component Before Login', () => {
    
        let component;
        beforeEach(() => {
            component = setup();
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttribute(component, 'header-component');
            expect(wrapper.length).toBe(1);
        });

        it('Should render the title', () => {
            const logo = findByTestAttribute(component, 'header-title');
            expect(logo.length).toBe(1);
        });

        it('Should not render the username before login', () => {
            const logo = findByTestAttribute(component, 'username');
            expect(logo.length).toBe(0);
        });

        it('Should not render the logout button before login', () => {
            const logo = findByTestAttribute(component, 'logout-button');
            expect(logo.length).toBe(0);
        });

    });

    describe('Header Component After Login', () => {
    
        let component;
        const props = {
            user: {"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"https://swapi.co/api/planets/1/","films":["https://swapi.co/api/films/2/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/","https://swapi.co/api/films/7/"],"species":["https://swapi.co/api/species/1/"],"vehicles":["https://swapi.co/api/vehicles/14/","https://swapi.co/api/vehicles/30/"],"starships":["https://swapi.co/api/starships/12/","https://swapi.co/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"https://swapi.co/api/people/1/"},
            isLogin: true
        }
        beforeEach(() => {
            component = setup(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttribute(component, 'header-component');
            expect(wrapper.length).toBe(1);
        });

        it('Should render the title', () => {
            const title = findByTestAttribute(component, 'header-title');
            expect(title.length).toBe(1);
            expect(title.text()).toEqual('Star Wars');
        });

        it('Should render the username after login', () => {
            const username = findByTestAttribute(component, 'username');
            expect(username.length).toBe(1);
            expect(username.text()).toEqual(props.user.name);
        });

        it('Should render the logout button after login', () => {
            const logoutButton = findByTestAttribute(component, 'logout-button');
            expect(logoutButton.length).toBe(1);
        });

    });

});