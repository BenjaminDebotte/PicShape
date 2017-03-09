import React from 'react';

import {Forgot} from '../src/components/Account/Forgot';
import {Login} from '../src/components/Account/Login';
import {Profile} from '../src/components/Account/Profile';
import {Reset} from '../src/components/Account/Reset';
import {Signup} from '../src/components/Account/Signup';


import renderer from 'react-test-renderer';

describe('components', function() {
  describe('<Forgot />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<Forgot />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });

  describe('<Login />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<Login />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });

  describe('<Profile />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<Profile />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });

  describe('<Reset />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<Reset />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });

  describe('<Signup />', function() {
    it('renders correctly', function() {
      var tree = renderer.create(<Signup />).toJSON();
      expect(tree).toMatchSnapshot();
        });
  });
});
