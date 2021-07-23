import React, {FC} from 'react';
import Input from "../../common/c1-Input/Input";
import AltInput from "../../common/c1-Input/AltInput";
import Button from "../../common/c2-Button/Button";
import AltButton from "../../common/c2-Button/AltButton";
import Checkbox from "../../common/c3-Checkbox/Checkbox";
import AltCheckbox from "../../common/c3-Checkbox/AltCheckbox";
import EditableSpan from "../../common/c4-EditableSpan/EditableSpan";

type TTestProps = {

};
const Test: FC<TTestProps> = ({}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
            <Input />
            <AltInput />
            <Button> Tap </Button>
            <AltButton> Tap-Tap </AltButton>
            <Checkbox />
            <EditableSpan />
        </div>
    )
}

export default Test