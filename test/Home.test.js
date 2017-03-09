import React from 'react';
import  {Home} from '../src/components/Home/Home';
import renderer from 'react-test-renderer';

describe('components', function() {
  describe('<Home />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<Home />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });
});
