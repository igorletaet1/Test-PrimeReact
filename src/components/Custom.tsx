import { Link, useMatch } from 'react-router-dom';

const Custom = ({children, to, ...props}: {children: any, to: any}) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link
            to={to}
            style={{
                color: match ? 'var(--color-active)' : 'white',
            }}
            {...props}
        >
            {children}
        </Link>
    )
}

export {Custom};
