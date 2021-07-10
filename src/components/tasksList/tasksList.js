import React, {Component} from 'react';
import Container from '../container/';
import './tasksList.scss';
import { connect } from 'react-redux';
import AddTaskForm from '../addTaskForm/';
import {deleteTask} from '../../actions';
import {Link} from 'react-router-dom';

const mapStateToProps = ({data}) =>({
    data
});

const mapDispatchToProps = {
    deleteTask
}

class TasksList extends Component{
    render(){
        const {data, deleteTask} = this.props;
        const elements = data.map((item) =>{
            return <li
            key={`${item.name}${item.id}`}
            className='tasks-list__item'
            >
                <Link to={`/tasks/${item.id}`}>{`${item.name}, Дата ${item.date}`}</Link>
                <button 
                className="tasks-list__delete"
                onClick={(e)=>{
                    e.preventDefault();
                    deleteTask(item.id);
                }}
                >Удалить</button>
            </li>
        })
        return(
            <div className='tasks-list'>
                <Container>
                    <ul className="tasks-list__list">
                        {elements}
                        <AddTaskForm />
                    </ul>
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TasksList);

