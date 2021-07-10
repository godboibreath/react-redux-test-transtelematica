import React, { Component } from 'react';
import Container from '../container/';
import './taskDetails.scss';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    editTask,
    updateDescribtionEditTaskForm,
    updateNameEditTaskForm,
    updateEmptyEditTaskForm
} from '../../actions';

const mapStateToProps = (state) =>{
    const {data, editTaskForm} = state;
    return {
        data,
        editTaskForm
    }
}

const mapDispatchToProps = {
    editTask,
    updateDescribtionEditTaskForm,
    updateNameEditTaskForm,
    updateEmptyEditTaskForm
}

class TaskDetails extends Component {
    componentDidMount() {
        const item = this.props.data[this.props.dataId];
        const {name,describtion} = item;
        const {
            updateDescribtionEditTaskForm,
            updateNameEditTaskForm,
            updateEmptyEditTaskForm
        } = this.props;
        updateEmptyEditTaskForm(false)
        updateDescribtionEditTaskForm(describtion);
        updateNameEditTaskForm(name);
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const {name,describtion} = this.props.editTaskForm;
        const id = this.props.dataId+1;
        const {
            editTask,
            updateNameEditTaskForm,
            updateEmptyEditTaskForm
        } = this.props;
        if(name!==''){
            const editData = {
                id,
                name,
                describtion,
                date: new Date().toDateString()
            }
            editTask(editData);
            this.props.history.push('/tasks');
        }
        else{
            updateNameEditTaskForm('Введите название задачи');
            updateEmptyEditTaskForm(true)
        }
    }
    render()  {
        const {
            updateDescribtionEditTaskForm,
            updateNameEditTaskForm,
        } = this.props;
        const {name,describtion, isEmpty} = this.props.editTaskForm;
        const classForm = isEmpty?'details__input details__input-red':'details__input';
        return(
            <div className="details">
                <Container>
                    <div className="details__block">
                        <p className="details__title">
                            {name}
                        </p>
                        <p className="details__describtion">
                            {describtion}
                        </p>
                    </div>
                    <form className="details__form" onSubmit={this.onSubmit}>
                        <p className="details__subtitle">Редактирование задачи</p>
                        <div className="details__input-block">
                            <label htmlFor="named">
                                Название задачи*
                                <input
                                className={classForm}
                                type="text"
                                id="named"
                                value={name}
                                onChange={(e)=>{
                                    updateNameEditTaskForm(e.target.value)
                                }}
                                />
                            </label>
                        </div>
                        <div className="details__input-block">
                            <label htmlFor="descr">
                                Описание задачи
                                <textarea
                                type="text"
                                className='details__textarea'
                                id="descr"
                                value={describtion}
                                onChange={(e)=>{
                                    updateDescribtionEditTaskForm(e.target.value)
                                }}
                                />
                            </label>
                        </div>
                        <button className="details__button">Редактировать задачу</button>
                    </form>
                </Container>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TaskDetails))

