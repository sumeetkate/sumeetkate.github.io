import React from 'react';
import { render } from 'react-dom';
import { Panel } from 'react-bootstrap';
import Slick from './slick.js';
import Owl from './owl.js';

import './styles.css';


const Root = () => {
	return (
    <div className="full">
      <div className="left-nav"></div>
      <div className="full right-content">
        <h3>Carousel Test</h3>
        <Panel header="Slick carousel">
          <Slick />
        </Panel>
        <Panel header="Owl carousel">
          <Owl />
        </Panel>
        <Panel header="Slick carousel">
          <Slick />
        </Panel>
        <Panel header="Owl carousel">
          <Owl />
        </Panel>
        <Panel header="Slick carousel">
          <Slick />
        </Panel>
        <Panel header="Owl carousel">
          <Owl />
        </Panel>
      </div>
    </div>
	);
}

render(<Root />, document.querySelector('#main'));