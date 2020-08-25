
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import Header from './Header';
import SearchBar from './SearchBar/SearchBar';
import Menu from './Menu/Menu';
import Molecule from '../../components/graphieros/Molecule';

configure({ adapter: new Adapter() });


describe('<Header />', () => {
    it('should contain a div called sideTitle', () => {
  
    });

    it('should render a molecule with sequence and colors', () => {
        const wrapper = shallow(<Molecule sequence='' colors={[]} />);
        expect(wrapper.find(Molecule));
    });

    it('should render a search bar', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(SearchBar)).toHaveLength(1);
    });

    it('should render a menu', () => {
        const wrapper = shallow(<Menu />);
        expect(wrapper.find(Menu));
    });

});