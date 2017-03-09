import React from 'react';
import  {NotFound} from '../src/components/NotFound/NotFound';
import renderer from 'react-test-renderer';

describe('components', function() {
  describe('<NotFound />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<NotFound />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });
});
