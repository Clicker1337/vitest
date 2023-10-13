import { describe, expect, test } from 'vitest'
import { fireEvent, screen } from '@testing-library/react'
import Navbar from './Navbar'
import { renderTestApp } from '../../tests/helpers/renderTestApp'

describe('NAVBAR TEST', () => {

    test('test main page', async () => {
        renderTestApp(<Navbar />)
        const mainLink = screen.getByTestId('main-link')
        fireEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })
    test('test about page', async () => {
        renderTestApp(<Navbar />)
        const aboutLink = screen.getByTestId('about-link')
        fireEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()

    })
    test('test users page', async () => {
        renderTestApp(<Navbar />)
        const usersLink = screen.getByTestId('users-link')
        fireEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })
})