import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

jest.mock('./components/nav/address.tsx', () => {
	return {
		__esModule: true,
		default: () => {
			return <p>address</p>;
		},
	};
});

test('Renders main page correctly', () => {
	render(<App />);

	expect(screen.getByText('address')).toBeInTheDocument();
	expect(true).toBeTruthy();
});
