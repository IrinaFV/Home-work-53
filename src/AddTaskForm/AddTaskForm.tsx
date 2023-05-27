import React, {ChangeEvent, MouseEventHandler} from 'react';
interface IAddTaskForm extends React.PropsWithChildren {
    text: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    addTask: (text: string) => void;
}

const AddTaskForm: React.FC<IAddTaskForm> = props => {
    const addTaskForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        props.addTask(props.text);
    };
    return(
        <div className="AddTaskForm">
            <form>
                <input type="text"
                onChange={props.onChange}/>
                <button className="btn" onClick={addTaskForm}>add</button>
            </form>
        </div>
    );
};
export default AddTaskForm;