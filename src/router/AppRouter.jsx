import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import ErrorPage from '../pages/ErrorPage'
import Users from '../users/Users'
import UserDetailsPage from '../pages/UserDetailsPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetailsPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRouter