// bucket.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";

const initialState = {
    list: [
        {text: "마법약 수업 듣기", completed: false},
        {text: "어둠 마법 방어술 배우기", completed: false},
        {text: "퀴디치 훈련 하기", completed: false},
    ]
};

// Action Creators
export const loadBucket = (bucket) => {
    return { type: LOAD, bucket };
};

export const createBucket = (bucket) => {
    return { type: CREATE, bucket };
};

export const deleteBucket = (bucket) => {
    return { type: DELETE, bucket }
};

export const updateBucket = (bucket) => {
    return { type: UPDATE, bucket };
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case "bucket/LOAD":
            return state;


        case "bucket/CREATE":
            const new_bucket_list = [...state.list, {text: action.bucket, completed: false}];
            return { list: new_bucket_list };

        case "bucket/DELETE":

            const fucking_bucket_list = state.list.filter((l, idx) => {
                if (idx !== action.bucket) {
                    return l;
                }
            })
            return { list: fucking_bucket_list }


        case 'bucket/UPDATE':
            const bucket_list = state.list.map((l, idx) => {
                if(idx === action.bucket){
                    return {...l, completed: true};
                }else{
                    return l;
                }
            })
            return {list: bucket_list};

        default:
            return state;
    }
}

