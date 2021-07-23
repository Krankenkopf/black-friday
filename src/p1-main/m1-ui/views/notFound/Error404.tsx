import React, {useState} from 'react'

export const Error404 = () => {
    const cat = '—ฅ/ᐠ.̫ .ᐟ\\ฅ—'
    const [noCat, doCat] = useState<string>('——————')
    const setCat = () => doCat(cat)
    setTimeout(setCat, 1000)
    return (
        <div style={{   margin: '5% 5%',
                        fontWeight: 'bold',
                        minHeight: '65vmin',
                        fontSize: '40px'}}>
            <div>404</div>
            <div>Page not found!</div>
            <div>{noCat}</div>
        </div>
    )
}

