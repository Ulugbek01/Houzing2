import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css';
import Root from './root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	</React.StrictMode>
);
