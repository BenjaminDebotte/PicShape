import React from 'react';
import  {Header} from '../src/components/Header/Header';
import renderer from 'react-test-renderer';

describe('components', function() {
  describe('<Header />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<Header />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });
});
