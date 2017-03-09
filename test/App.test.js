import React from 'react';
import  {App} from '../src/components/App/App';
import renderer from 'react-test-renderer';

describe('components', function() {
  describe('<App />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });
});
