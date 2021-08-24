import React, {useEffect, useState} from 'react'

export const Error404 = () => {
    const [noCat, showCat] = useState<string>('——————')
    const setCat = () => showCat('—ฅ/ᐠ.̫ .ᐟ\\ฅ—')
    const hideCat = () => showCat('——————')
    useEffect(() => {
        setTimeout(setCat, 1500)
    }, [noCat])
    useEffect(() => {
        setTimeout(hideCat, 4000)
    }, [])
    return (
        <div style={{   padding: '5% 5%',
                        fontWeight: 'bold',
                        minHeight: '65vmin',
                        fontSize: '40px'}}>
            <div>404</div>
            <div>Page not found!</div>
            <div style={{fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`}}>
                {noCat}
            </div>
        </div>
    )
}

