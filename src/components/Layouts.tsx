import { Outlet } from 'react-router-dom';
import { Custom } from './Custom'

const Layouts = () => {
    return (
        <>
            <header>
                <Custom to="/">Главная</Custom>
                <Custom to="/table">Тест-Таблица</Custom>
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer className="container">Футер</footer>
        </>
    )
}

export {Layouts}
