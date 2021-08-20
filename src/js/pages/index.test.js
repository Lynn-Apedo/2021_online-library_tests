import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen } from '@testing-library/react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {result} from './register'
 
import Register from './register'
import InpputGroup from '../components/inputgroup'
const api = [
    {
        baseURL: 'http://localhost:3505',
        withCredentials: true,
    }
]

const server = setupServer(
    rest.get('http://localhost:3505/admin/register', (req, res, ctx) => {
        return res(ctx.json({get_localhost: api}))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('Should display localhost', async () => {
    render(
        <Router>
            <Register/> 
        </Router>
    )

    // expect(result).toBe('http://localhost:3505')
})
it('Should display the right labels', async () => {
    render(
        <Router>
            <Register > 
                <InpputGroup />
            </Register > 

        </Router>
       
    )

    expect(screen.getByText("firstname")).toBeTruthy()
    expect(screen.getByText("lastname")).toBeTruthy()
    expect(screen.getByText("email")).toBeTruthy()
    expect(screen.getByText("password")).toBeTruthy()
})

