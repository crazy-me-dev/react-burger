import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

//enzyme configure makes Adapter a constructor function
configure({ adapter: new Adapter() });

// shallow renders the component with all of its content without it being deeply rendered
// enzyme allows for isolated unit tests without rendering the whole react application

// jest methods describe() and it()
// describe() takes two arguments -- description of test bundle and the testing function
describe('<NavigationItems />', () => {
  //beforeEach() is a function executed before each test to allow for more elegant testing
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  // it() allows you to write one test and takes two arguments -- a description and a testing function describing the actual test
  it('should render two <NavigationItem /> elements IF NOT authenticated', () => {
    // 1. jest method expect() defines what the test checks for
    // 2. find() is a method provided by enzyme
    // 3. toHaveLength is a utility method provided by jest
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should render three <NavigationItem /> elements IF authenticated', () => {
    // passing authentication to the wrapper to be able to pass isAuthenticated props test
    // wrapper = shallow(<NavigationItems isAuthenticated />);

    // enzyme allows for the setProps() method
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
});
