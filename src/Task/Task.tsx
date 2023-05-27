import React from 'react';

interface ITaskProps extends React.PropsWithChildren {
    id: number;
    text: string;
    onRemoveTask: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}
const Task: React.FC<ITaskProps> = props => {

    return (
        <div className="container">
            <div className="task">
                    <p>{props.text}</p>
                    <button onClick={(event) => props.onRemoveTask(event,props.id)}>удалить</button>
            </div>
        </div>
    );
};

export default Task;