// Include React
import React from '../../setup/node_modules/react';
import { render } from '../../setup/node_modules/react-dom';

// Include Search component
import Search from './containers/Search.jsx';

render(
	<Search/>,
	document.getElementsByTagName('main')[0]
);
