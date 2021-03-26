import { firestore } from '../../firebase';
import moment from 'moment';

const calendar_db = firestore.collection('calendar');

const LOAD = "calendar/LOAD";
const CREATE = "calendar/CREATE";
const DELETE = "calendar/DELETE";
const UPDATE = "calendar/UPDATE";
const LOADED = 'calendar/LOADED';
const CHANGE = 'num/CHANGE'


const initialState = {
    list:[],
    date: moment(),
    is_loaded:false
};

export const loadCalendar = (calendar) => {
    return { type: LOAD, calendar };
};

export const createCalendar = (calendar) => {
    return { type: CREATE, calendar };
};

export const deleteCalendar = (calendar) => {
    return { type: DELETE, calendar }
};

export const updateCalendar = (calendar) => {
    return { type: UPDATE, calendar };
}

export const changeDate = (num) => {
    return {type: CHANGE, num};
}

export const isLoaded = (loaded) => {
    return {type: LOADED, loaded}
}

export const loadCalendarFB = () => {
    return function (dispatch) {

        calendar_db.get().then((docs) => {
            let calendar_data = [];
            docs.forEach((doc) => {
                if (doc.exists) {
                    calendar_data = [...calendar_data, { id: doc.id, ...doc.data()}];
                };
            });
            dispatch(loadCalendar(calendar_data));
        });
    };
};

export const addCalendarFB = (calendar) => {
    return function (dispatch) {
        let todo_data = {
            todo: calendar[0],
            detail: calendar[1],
            year: calendar[2],
            month: calendar[3],
            day: calendar[4],
            time: calendar[5],
            minute: calendar[6],
            completed:false
        };

        dispatch(isLoaded(false));

        calendar_db.add(todo_data).then(docRef => {
            todo_data = { ...todo_data, id: docRef.id };
            dispatch(createCalendar(todo_data));
            dispatch(isLoaded(true));
        })
    }
}

export const updateCalendarFB = (index) => {
    return function(dispatch, getState) {
        const old_calendar_data = getState().calendar.list[index];
        let calendar_data = {...old_calendar_data, completed:true,is_loaded:true};
        if (!calendar_data.id) {
            return;
        }

        calendar_db.doc(calendar_data.id).update(calendar_data).then(docRef => {
            dispatch(updateCalendar(index));
            dispatch(isLoaded(true));
        })
    };
};



export const deleteCalendarFB = (index) => {
    return function(dispatch, getState) {
        const old_calendar_data = getState().calendar.list[index];

        if (!old_calendar_data.id) {
            return;
        }


        calendar_db.doc(old_calendar_data.id).delete().then(docRef => {
            dispatch(deleteCalendar(index));
            dispatch(isLoaded(true));
        })
    };
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case "calendar/LOAD": {
            
            if (action.calendar.length > 0) {
                let calendar_list = action.calendar
                const sorted_calendar_list = calendar_list.sort((a, b) => a.year - b.year || a.month - b.month || a.day - b.day || a.time - b.time || a.minute - b.minute)
                console.log(sorted_calendar_list)
                return {
                    list:sorted_calendar_list , date: moment(), is_loaded: true
                }
            }

                return state;
            }


        case "calendar/CREATE":
            const new_todo_list = [...state.list, action.calendar,];
            return { list: new_todo_list,date:state.date };


        default:
            return state;


        case "calendar/DELETE":

            const calendar_list = state.list.filter((l, idx) => {
                if (idx !== action.calendar) {
                    return l;
                }
            })
            return { list: calendar_list,date:state.date }

        case 'calendar/UPDATE':{
            const calendar_list = state.list.map((l, idx) => {
                if(idx === action.calendar){
                    return {...l, completed: true};
                }else{
                    return l;
                }
            })
            
            return {list: calendar_list,date:state.date};
        }

        case 'num/CHANGE':{
            if (action.num == 1){
                const new_date = state.date.subtract(1,'M');
                const calendar_list = [...state.list]
                return {
                    list: calendar_list,
                    date: new_date,
                    is_loaded:true
                }
            } else if(action.num ==2){
                const new_date = state.date.add(1,'M');
                const calendar_list = [...state.list]
                return {
                    list: calendar_list,
                    date: new_date,
                    is_loaded:true
                }
            }else {
                const new_date = moment()
                const calendar_list = [...state.list]
                return {
                    list: calendar_list,
                    date: new_date,
                    is_loaded: true
                }
            }
        }
        case 'calendar/LOADED': {
            return {...state, is_loaded: action.loaded}
        }

    }
            
        
}
