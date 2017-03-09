import React from 'react';
import  {Messages} from '../src/components/Messages/Messages';
import renderer from 'react-test-renderer';

describe('components', function() {
  describe('<Messages />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<Messages />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });
});
