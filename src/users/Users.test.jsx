// eslint-disable-next-line no-unused-vars
import React from 'react'
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'
import Users from './Users'

import axios from 'axios'
import { renderTestApp } from '../tests/helpers/renderTestApp'

vi.mock('axios')

describe('USERS TESTING', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                },
            ]
        }
    })

    afterEach(() => {
        vi.clearAllMocks();
    })

    test('renders learn react link', async () => {
        axios.get.mockReturnValue(response);
        renderTestApp(<Users />)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug()
    })

    test('redirect to details page', async () => {
        axios.get.mockReturnValue(response);
        renderTestApp(<Users />)
        const users = await screen.findAllByTestId('user-item')
        fireEvent.click(users[0])
        expect(screen.getByTestId('user-page')).toBeInTheDocument();
    })
}) 