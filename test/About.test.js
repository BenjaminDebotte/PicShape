import React from 'react';
import  {About} from '../src/components/About/About';
import renderer from 'react-test-renderer';

describe('components', function() {
  describe('<About />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<About />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });
});
