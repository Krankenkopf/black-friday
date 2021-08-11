import React, {FC} from 'react';
import Input from "../../common/c1-Input/Input";
import Button from "../../common/c2-Button/Button";
import {Checkbox} from "../../common/c3-Checkbox/Checkbox";
import EditableSpan from "../../common/c4-EditableSpan/EditableSpan";
import {InputAlt} from "../../common/c1-Input/InputAlt";
import {ButtonAlt} from "../../common/c2-Button/ButtonAlt";


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