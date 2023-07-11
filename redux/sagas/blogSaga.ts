import { useSelector } from 'react-redux';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { RootState } from '../store/store';
import { response } from 'express';
import { isBlogSended } from '../store/blogSlice';



function sendBlogFetch(store) {

    let {blogs} = store.getState()
    let {title, body} = blogs
    let bodyData = JSON.stringify({title: title, body: body})
    console.log(bodyData);
    
    return fetch("http://localhost:8080/api/blogs", {
        method: "POST",
        mode: 'no-cors',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Credentials": "true"
        },
        body: bodyData,
    })

    // let response = await request.text()

    // console.log(response)

    // response.then(res=> {
    //     console.log(res)
    // })

} 

function* workGetStamps(store) {
    debugger
    try {
        console.log(store)
        const data: Response = yield call(()=> {sendBlogFetch(store)
        .then(res=> {        
            return res.text()
        })})
        yield put(isBlogSended(data as unknown as string))
    } catch (error) {
        yield put(isBlogSended(String(error)))
    }
}


export function* watchSendBlog(store) {  
    yield takeEvery("blog/sendBlog", ()=>{workGetStamps(store)});
}



// Конечно! Вот пример кода для создания POST-запроса с использованием Redux Saga:


// import { call, put, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';

// // Action Types
// const POST_REQUEST = 'POST_REQUEST';
// const POST_SUCCESS = 'POST_SUCCESS';
// const POST_FAILURE = 'POST_FAILURE';

// // Action Creators
// const postRequest = () => ({ type: POST_REQUEST });
// const postSuccess = (data) => ({ type: POST_SUCCESS, payload: data });
// const postFailure = (error) => ({ type: POST_FAILURE, payload: error });

// // Reducer
// function reducer(state = {}, action) {
//   switch (action.type) {
//     case POST_SUCCESS:
//       return { ...state, data: action.payload };
//     case POST_FAILURE:
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// }

// // API Request
// function postDataAPI(data) {
//   return axios.post('/api/endpoint', data);
// }

// // Worker Saga
// function* postData(action) {
//   try {
//     yield put(postRequest());
//     const response = yield call(postDataAPI, action.payload);
//     yield put(postSuccess(response.data));
//   } catch (error) {
//     yield put(postFailure(error.message));
//   }
// }

// // Watcher Saga
// function* watchPostData() {
//   yield takeEvery(POST_REQUEST, postData);
// }

// export default function* rootSaga() {
//   yield all([watchPostData()]);
// }
// В этом примере Redux Saga обрабатывает действие POST_REQUEST, вызывает функцию postData, которая выполняет POST-запрос с помощью Axios. Затем Saga обрабатывает успешные и неуспешные ответы сервера и отправляет соответствующие действия POST_SUCCESS и POST_FAILURE.

// Пожалуйста, убедитесь, что у вас установлены необходимые зависимости, такие как Redux, Redux Saga и Axios, чтобы код корректно работал.