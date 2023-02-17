import { SelectData } from "../../../../../types/SelectableElementData";
import { RenderMode } from '../../../../../types/FormData.type';
import { SelectDiv, Checkbox } from './select.styles';
import { DeleteBtn, InputText, Paragraph } from '../../SegmentBody.styles';
import { Fragment } from "react";

type Props = {
    parentSegmentId: number,
    selectData: SelectData,
    answer: string,
    mode: RenderMode,
    changeSegmentAnswer: (segmentId: number, answer: string) => void,
    updateSelect: (segmentId: number, selectId: number, data: string) => void,
    deleteSelect: (segmentId: number, selectId: number) => void,
}

const Select = ({parentSegmentId, selectData, mode, updateSelect, deleteSelect, changeSegmentAnswer, answer}: Props) => {
    const {id, data} = selectData;
    function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>){
        const elementData = e.target.value;
        let newAnswer = answer.split(' & ');
        if(e.target.checked){  
            newAnswer.push(elementData);
        } else {
            newAnswer.filter(ans => ans !== elementData);
        }
        changeSegmentAnswer(parentSegmentId, newAnswer.join(' & '))
    }
    function handleChangeSelectText(e: React.ChangeEvent<HTMLInputElement>){
        const newElementData = e.target.value;
        updateSelect(parentSegmentId, id, newElementData);
    }

    return (
        <SelectDiv>
            <Checkbox 
                type='checkbox'
                value={data}  
                disabled={mode === RenderMode.edit} 
                onChange={handleCheckboxChange}
            />
            {
                mode === RenderMode.edit ?
                <Fragment>
                    <InputText type='text' onChange={handleChangeSelectText}/>
                    <DeleteBtn onClick={e => deleteSelect(parentSegmentId, id)}> ✕ </DeleteBtn>
                </Fragment> :
                <Paragraph>
                    {data}
                </Paragraph>
            }
        </SelectDiv>
    )
}

export default Select;