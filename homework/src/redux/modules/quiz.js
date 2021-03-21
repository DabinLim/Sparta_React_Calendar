const GET_QUIZ = 'quiz/GET_QUIZ';
const ADD_ANSWER = 'quiz/ADD_ANSWER';
const RESET_ANSWER = 'quiz/RESET_ANSWER';

const initialState = {
    name: '해리포터',
    page: 'ranking',
    list: [
        {
        question: "해리포터는 그리핀도르 기숙사 소속이다", answer:"o"
        },
        {
        question: "론는 그리핀도르 기숙사 소속이다", answer:"o"
        },
        {
        question: "헤르미온느는 그리핀도르 기숙사 소속이다", answer:"o"
        },
        {
        question: "말포이는 그리핀도르 기숙사 소속이다", answer:"x"
        }
    ],
};

export const getQuiz = (quiz_list) => {
    return {type: GET_QUIZ, quiz_list};
};

export const addAnser = (answer) => {
    return {type: ADD_ANSWER, answer};
};

export const resetAnser = () => {
    return {type: RESET_ANSWER};
};

export default function reducer(state = initialState, action = {}){
    switch(action.type) {

        case 'quiz/GET_QUIZ': {
            return {...state, quiz: action.quiz_list};
        }
        case 'quiz/ADD_ANSWER': {
            return {...state, answers: [...state.answers, action.answer]};
        }
        case 'quiz/RESET_ANSWER': {
            return {...state, answer: [] };
        }

        default:
            return state;

    }
}