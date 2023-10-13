// eslint-disable-next-line no-unused-vars
import React from 'react'
import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';

import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createReduxStore } from './store/store';

describe('TEST APP', () => {
    test('Router app test', () => {
        render(<MemoryRouter><Provider store={createReduxStore()}><App /></Provider></MemoryRouter>)
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');
        fireEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        fireEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    })

    test('Error page test', () => {
        render(
            <MemoryRouter initialEntries={['/123123']}>
                <App />
            </MemoryRouter>
        )
        expect(screen.getByTestId('error-page')).toBeInTheDocument()
    })
})
