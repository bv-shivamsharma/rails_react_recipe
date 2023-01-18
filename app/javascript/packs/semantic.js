// Run this example by adding <%= javascript_pack_tag 'rx-web' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.

import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types'
import App from './../semantic/app'
import 'semantic-ui-css/semantic.min.css'

const container = document.getElementById('rx-app');
const root = createRoot(container);
root.render(<App />);
