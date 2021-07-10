const initialScale = {
    data:[
        {
            id: 1,
            name: 'Задача номер 1',
            date:'Thu Jul 08 21',
            describtion: 'Описание задачи номер 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci officiis inventore aspernatur non necessitatibus magnam quo totam quam libero ex sequi aliquam, at quidem rerum asperiores! Doloribus nulla enim inventore.'
        },
        {
            id: 2,
            name: 'Задача номер 2',
            date:'Wen Jul 07 21',
            describtion: 'Описание задачи номер 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur sunt ea repudiandae corporis fugiat soluta maiores expedita dignissimos quisquam minima eius impedit, assumenda earum cupiditate voluptatibus et enim maxime quam.'
        },
        {
            id: 3,
            name: 'Задача номер 3',
            date:'Tue Jul 06 21',
            describtion: 'Описание задачи номер 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate asperiores nesciunt commodi reiciendis neque reprehenderit molestiae cum soluta, exercitationem, modi harum eos adipisci doloribus, beatae laboriosam atque corrupti. Incidunt.'
        },
        {
            id: 4,
            name: 'Задача номер 4',
            date:'Mon Jul 05 21',
            describtion: 'Описание задачи номер 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa nihil perspiciatis repudiandae quasi atque iusto nemo? Deleniti cupiditate ducimus illo molestias praesentium exercitationem! Eveniet, delectus iste. Delectus, alias laudantium!'
        },
        {
            id: 5,
            name: 'Задача номер 5',
            date:'San Jul 04 21',
            describtion: 'Описание задачи номер 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dignissimos dolorem reiciendis laborum itaque deleniti adipisci doloribus, illo molestiae praesentium distinctio est odio totam numquam ipsum maxime! At, excepturi expedita?'
        }
    ],
    logIn: {
        email: '',
        password: ''
    },
    addTaskForm: {
        name: '',
        describtion: '',
        isEmpty: true,
    },
    editTaskForm: {
        name: '',
        describtion: '',
        isEmpty: true
    },
};

const reducer = (state = initialScale, action) => {
    switch(action.type) {
        case 'UPDATE_LOGIN_EMAIL':{
            return {
                ...state,
                logIn:{
                    email: action.payload,
                    password: state.logIn.password
                }
            }
        }
        case 'UPDATE_LOGIN_PASSWORD':{
            return {
                ...state,
                logIn: {
                    email: state.logIn.email,
                    password: action.payload
                }
            }
        }
        case 'UPDATE_NAME_TASK_FORM':{
            const {describtion} = state.addTaskForm;
            return {
                ...state,
                addTaskForm: {
                    name: action.payload,
                    describtion,
                    isEmpty: false
                }
            }
        }
        case 'UPDATE_DESCRIBTION_TASK_FORM': {
                const {name, isEmpty} = state.addTaskForm;
                return {
                ...state,
                addTaskForm: {
                    name,
                    describtion: action.payload,
                    isEmpty
                }
            }
        }
        case 'UPDATE_EMPTY_TASK_FORM':{
                const {name, describtion} = state.addTaskForm;
                return {
                ...state,
                addTaskForm: {
                    name,
                    describtion,
                    isEmpty: action.payload
                }
            }
        }
        case 'ADD_TASK': {
            const task = {...action.payload, id: state.data.length+1};
            const newData = [...state.data, task];
            return {
                ...state,
                data: newData
            }
        }
        case 'DELETE_TASK': {
            const {data} = state;
            const id = action.payload;
            const index = data.findIndex(element => element.id === id);
            const before = data.slice(0,index),
                after=data.slice(index+1);
            const newData = [...before,...after];
            return {
                ...state,
                data: newData
            }
        }
        case 'EDIT_NAME_TASK_FORM':{
            return {
                ...state,
                editTaskForm: {
                    name: action.payload,
                    describtion: state.editTaskForm.describtion,
                    isEmpty: false
                }
            }
        }
        case 'EDIT_DESCRIBTION_TASK_FORM': {
            return {
                ...state,
                editTaskForm: {
                    name: state.editTaskForm.name,
                    describtion: action.payload,
                    isEmpty: state.editTaskForm.isEmpty
                }
            }
        }
        case 'EDIT_EMPTY_TASK_FORM': {
            const newEditTaskForm = {...state.editTaskForm, isEmpty: action.payload};
            return {
                ...state,
                editTaskForm: newEditTaskForm
            }
        }
        case 'EDIT_TASK': {
            const {id } = action.payload;
            const {data} = state;
            const index = data.findIndex(element => element.id === id);
            const before = data.slice(0,index),
                after=data.slice(index+1);
            const newData = [...before,action.payload,...after];
            return {
                ...state,
                data: newData
            }
        }
        default:
            return state;
    }
}

export default reducer;
