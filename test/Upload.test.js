import React from 'react';
import  {Upload} from '../src/components/Upload/Upload';
import renderer from 'react-test-renderer';

describe('components', function() {
  describe('<Upload />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<Upload />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });
});
