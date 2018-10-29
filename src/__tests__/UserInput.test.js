import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserInput from '../UserInput'
Enzyme.configure({ adapter: new Adapter() });
describe('Component=>UserInput', ()=>{

    it('Should render correctly', ()=>{
        const wrapper = shallow(<UserInput/>)
        expect(wrapper).toMatchSnapshot()
    })
    
})