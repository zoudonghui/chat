import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store'

export function rootContainer(container) {
    return React.createElement(Provider, { store }, container);
}