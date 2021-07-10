import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    updateNameTaskForm,
    updateDescribtionTaskForm,
    updateEmptyTaskForm,
    addTask
} from '../../actions';
import './addTaskForm.scss';

const mapStateToProps = ({addTaskForm: {name, describtion, isEmpty}}) =>{
    return {
        name,
        describtion,
        isEmpty
    }
}

const mapDispatchToProps = {
    updateNameTaskForm,
    updateDescribtionTaskForm,
    updateEmptyTaskForm,
    addTask
}

class AddTaskForm extends Component{
    onSubmit = (e) =>{
        e.preventDefault();
        const {
            updateNameTaskForm,
            updateEmptyTaskForm,
            addTask
        } = this.props;
        const {name, describtion} = this.props;
        if(name!==''){
            updateEmptyTaskForm(false);
            addTask(name, describtion);
        }
        else{
            updateNameTaskForm('Введите название задачи');
            updateEmptyTaskForm(true);
        }
    }
    render(){
        const {name, describtion, isEmpty} = this.props;
        const {updateNameTaskForm,updateDescribtionTaskForm} = this.props;
        const classForm = isEmpty ?'add-task-form__input add-task-form__input-red': 'add-task-form__input';
        return(
            <form  className='add-task-form' onSubmit={this.onSubmit}>
                <p className="add-task-form__title">Добавление задачи</p>
                <div className="add-task-form__inputblock">
                    <label htmlFor="named">
                        Название задачи*
                        <input
                        className={classForm}
                        type="text"
                        id="named"
                        value={name}
                        onChange={(e) => {
                            updateNameTaskForm(e.target.value);
                        }}
                        />
                    </label>
                </div>
                <div className="add-task-form__inputblock">
                    <label htmlFor="descr">
                        Описание задачи
                        <textarea
                        type="text"
                        className='add-task-form__textarea'
                        id="descr"
                        value={describtion}
                        onChange={(e)=>{
                            updateDescribtionTaskForm(e.target.value);
                        }}
                        />
                    </label>
                </div>
                <button className="add-task-form__button">Добавить задачу</button>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);