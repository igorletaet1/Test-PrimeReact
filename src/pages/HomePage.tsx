import React, {useEffect, useState} from "react";
import { CSSTransition } from 'react-transition-group';

const HomePage = () => {



        const [isRotated, setIsRotated] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsRotated(!isRotated);
            }, 1000); // поворот произойдет через 1 секунду

            return () => {
                clearTimeout(timer);
            };
        }, []);
    return (

        <div>
            <h1>Главная</h1>
        </div>
    )
}

export {HomePage}
