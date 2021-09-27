import React, {FC, useState} from 'react'
import cloth1 from "../../../../../p4-assets/clothes/card1.png"
import cloth2 from "../../../../../p4-assets/clothes/card2.png"
import cloth3 from "../../../../../p4-assets/clothes/card3.png"
import cloth4 from "../../../../../p4-assets/clothes/card4.png"
import cloth5 from "../../../../../p4-assets/clothes/card5.png"
import cloth6 from "../../../../../p4-assets/clothes/card6.png"
import Button from "../../../u0-common/c2-Button/Button";

type TLearningProps = {

}
export const Learning: FC<TLearningProps> = () => {
    const [answerVisibility, toggleVisibility] = useState(false)
    const [variant, setVariant] = useState(() => Math.ceil(Math.random()*6))
    const [changing, setChanging] = useState(false)

    const chooseCloth = () => {
        switch (variant) {
            case 1: return cloth1
            case 2: return cloth2
            case 3: return cloth3
            case 4: return cloth4
            case 5: return cloth5
            case 6: return cloth6
        }
    }
    const cloth = chooseCloth()
    const revealCard = () => answerVisibility ? undefined : toggleVisibility(true)
    return (
        <div className={"learning"}>
            <div className={"learning__question"}>
                <div
                     className={"utils__cardEdge _1"}> </div>
                <div
                     className={"utils__cardEdge _2"}> </div>
                <div
                     className={"utils__rotating _card _3"}>
                    <img src={cloth} className={"learning__question__cloth shadowed"} alt={'card'}/>
                </div>
                <div
                     className="utils__rotating _card paperCard3 _4">
                </div>
            </div>
            <div style={{transform: `translateY(${answerVisibility ? '0' : '1000px'})`}} className={"learning__panel"}>
                <div className={`learning__gradeBox paperCard1 ${answerVisibility ? "_in" : ''}`}> </div>
                <Button style={{opacity: `${answerVisibility ? '1' : '0'}`,}} backgroundImage>Next!</Button>
            </div>

            <div className="learning__answer" onClick={revealCard}>
                <div style={{transform: `rotateY(${answerVisibility ? 183 : 3}deg)`, left: '1px'}}
                     className={"utils__cardEdge"}> </div>
                <div style={{transform: `rotateY(${answerVisibility ? -3 : -183}deg)`, right: '1px'}}
                     className={"utils__cardEdge"}> </div>
                <div style={{transform: `rotateY(${answerVisibility ? 180 : 0}deg)`}}
                     className={"utils__rotating _card"}>
                    <img src={cloth} className={"learning__answer__cloth shadowed"} alt={'card'}/>
                </div>
                <div style={{transform: `rotateY(${answerVisibility ? 0 : -180}deg)`}}
                     className="utils__rotating _card paperCard3">
                </div>
            </div>
        </div>
    )
}