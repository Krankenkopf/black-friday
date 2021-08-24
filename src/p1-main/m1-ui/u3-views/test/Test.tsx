import React from 'react';
import Input from "../../u0-common/c1-Input/Input";
import Button from "../../u0-common/c2-Button/Button";
import {Checkbox} from "../../u0-common/c3-Checkbox/Checkbox";
import EditableSpan from "../../u0-common/c4-EditableSpan/EditableSpan";
import {InputAlt} from "../../u0-common/c1-Input/InputAlt";
import {ButtonAlt} from "../../u0-common/c2-Button/ButtonAlt";


const Test = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
            <Input />
            <InputAlt />
            <Button> Tap </Button>
            <ButtonAlt> Tap-Tap </ButtonAlt>
            <Checkbox />
            <EditableSpan />
        </div>
    )
}

export default Test