import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });
    const { x, y } = coords;

    const mouseMove = (e) => {
        const coords = { x: e.x, y: e.y };
        setCoords(coords);
        // console.log(':D')
    };

    useEffect(() => {

        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <>
            <h1>Mensaje</h1>
            <p>
                x:{ x } y:{ y }
            </p>
        </>
    )
}
