import React from 'react';
import ReactDOM from 'react-dom';
import StateList from './StateList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StateList />, div);
  ReactDOM.unmountComponentAtNode(div);
});