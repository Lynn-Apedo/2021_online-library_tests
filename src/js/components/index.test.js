import Ban from './ban'
import { render, screen } from '@testing-library/react'
// import Layout from './layout'
import Home from '../pages/home'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

 
describe('Footer', () => {
    it('Should render without crash', async () => {
        render(
            <Router>
                <Ban />
            </Router>
        )
    })
    it('Should render h1 link', async () => {
        render(
            <Router>
                <Ban />
            </Router>
        )
        expect(screen.getByText('EZE')).toBeTruthy()
    })
})