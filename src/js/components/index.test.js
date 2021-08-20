import Ban from './ban'
import Button from './button';
import { render, screen } from '@testing-library/react'
// import Layout from './layout'
import Home from '../pages/home'
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from "react-router-dom";
import renderer from 'react-test-renderer'
 
describe('Ban', () => {
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
    it('Should matches snapshot', () => {
        const saveTitleBan = renderer.create(<Router><Ban /></Router>).toJSON()
        expect(saveTitleBan).toMatchSnapshot()
    })
})


// describe('Button', () => {
//     it('Should render button with the right name', async () => {
//         render(
//             <Button />
//         )
//     expect(screen.getByText("M'enregistrer")).toBeTruthy()
//     })
// })

// describe('authRoute', () => {
//     it('Should redirect to /register if isLogged is not true', async () => {
//         const isLogged = false
//         if (isLogged == false) {
//             render(
//                 <Router>
//                     <Redirect to="/register" />
//                 </Router>
//             )
//         }
//     })
// })