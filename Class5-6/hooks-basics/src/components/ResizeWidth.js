import { useEffect, useLayoutEffect, useState } from "react"

const ResizeWidth = () => {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return <div>Width:{width}px</div>
}

export default ResizeWidth;