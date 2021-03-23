import { firestore } from '../../firebase';

const calendar_db = firestore.collection('calendar');

const LOAD = "calendar/LOAD";
const CREATE = "calendar/CREATE";
const DELETE = "calendar/DELETE";
const UPDATE = "calendar/UPDATE";


const initialState = {
    calendar: ''
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
            day: calendar[4]
        };
        calendar_db.add(todo_data).then(docRef => {
            todo_data = { ...todo_data, id: docRef.id };
            dispatch(createCalendar(todo_data));
        })
    }
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case "calendar/LOAD": {
            
            if (action.calendar.length > 0) {
                let calendar_list = action.calendar
                calendar_list.sort((a, b) => a.year - b.year || a.month - b.month || a.day - b.day)
                console.log(calendar_list)
                return {
                    list:calendar_list
                }
            }

                return state;
            }


        case "calendar/CREATE":
            const new_todo_list = [...state.list, action.calendar,];
            return { list: new_todo_list };


        default:
            return state;
    }
}
