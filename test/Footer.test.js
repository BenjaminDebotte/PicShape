import React from 'react';
import  {Footer} from '../src/components/Footer/Footer';
import renderer from 'react-test-renderer';

describe('components', function() {
  describe('<Footer />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<Footer />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });
});
