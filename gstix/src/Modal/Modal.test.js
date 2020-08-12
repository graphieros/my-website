import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './Modal';

configure({adapter: new Adapter()});

describe('<Modal />', () => {
    it('should render a <section>', () => {
        const wrapper = shallow(<Modal />);
        expect(wrapper.find(<section></section>));
    });
});