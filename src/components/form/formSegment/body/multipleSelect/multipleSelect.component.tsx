import { Fragment } from 'react';
import Select from './select/select.component';
import { SelectData } from '../../../../../types/SelectableElementData';
import { RenderMode } from '../../../../../types/FormData.type';
import { AddNewBtn } from '../SegmentBody.styles';

type Props = {
	selects: SelectData[] | undefined;
	answer: string;
	parentSegmentId: number;
	mode: RenderMode;
	updateSelect: (segmentId: number, selectId: number, data: string, type: string) => void;
	deleteSelect: (segmentId: number, selectId: number, type: string) => void;
	addNewSelect: (segmentId: number, type: string) => void;
	changeSegmentAnswer: (segmentId: number, answer: string) => void;
};

const MultiSelectBody = ({
	mode,
	selects,
	answer,
	parentSegmentId,
	updateSelect,
	deleteSelect,
	addNewSelect,
	changeSegmentAnswer,
}: Props) => {
	return (
		<Fragment>
			{selects?.map((select) => (
				<Select
					key={select.id}
					answer={answer}
					parentSegmentId={parentSegmentId}
					selectData={select}
					mode={mode}
					updateSelect={updateSelect}
					deleteSelect={deleteSelect}
					changeSegmentAnswer={changeSegmentAnswer}
				/>
			))}

			{mode === RenderMode.edit && (
				<AddNewBtn onClick={() => addNewSelect(parentSegmentId, 'select')}>
					Add new element
				</AddNewBtn>
			)}
		</Fragment>
	);
};

export default MultiSelectBody;
