import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';


configure({ adapter: new Adapter() });

global.React = React;
global.Component = React.Component;
global.PropTypes = PropTypes;
