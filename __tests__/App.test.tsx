/**
 * @format
 */

import React from 'react';
import 'react-native';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import App from '@/app';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
