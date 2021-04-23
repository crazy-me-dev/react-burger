import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

//enzyme configure makes Adapter a constructor function
configure({ adapter: new Adapter() });

// shallow renders the component with all of its content without it being deeply rendered

// jest methods describe() and it()
// describe() takes two arguments -- description of test bundle and the testing function
describe('<NavigationItems />', () => {
  // it() allows you to write one test and takes two arguments -- a description and a testing function describing the actual test
  it('should render two <NavigationItem /> elements if not authenticated', () => {
    // enzyme allows for isolated unit tests without rendering the whole react application
    const wrapper = shallow(<NavigationItems />);
    // jest method expect() defines what the test checks for
    // find() is a method provided by enzyme
    // toHaveLength is a utility method provided by jest
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
});
