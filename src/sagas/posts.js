import {
  takeEvery,
  delay,
  takeLatest,
  buffers,
  channel,
  eventChannel,
  END
} from 'redux-saga'
import {
  put,
  call,
  take,
  fork,
  select,
  actionChannel,
  cancel,
  cancelled
} from 'redux-saga/effects'

import moment from 'moment'

import fetch from 'isomorphic-fetch'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  INCREMENT_COUNTER
} from '../actions/actionsTypes'

// 异步获取数据，开始！
function fetchPostsApi(url) {
  return fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(pro => Promise.all(pro))
}
function fetchPostsApi2(url) {
  return fetch(`http://yapi.demo.qunar.com/mock/74672/login`, {
    method: 'post',
    body: {
      user_name: 'shalen',
      passwork: 'abc123'
    }
  })
    .then(response => response.json())
    .then(pro => Promise.all(pro))
}

function* fetchPosts() {
  yield call(delay, 1000)
  const posts = yield call(fetchPostsApi)
  yield put({type: RECEIVE_POSTS, posts, receivedAt: moment().format("HH:mm:ss")})
}

function* fetchPosts2() {
  yield call(delay, 1000)
  const posts = yield call(fetchPostsApi2)
  yield put({type: INCREMENT_COUNTER, posts, receivedAt: moment().format("HH:mm:ss")})
}

export function* watchPost() {
  while( yield take(REQUEST_POSTS) ){
    yield fork(fetchPosts)
    yield fork(fetchPosts2)
  }
}


// let http_api = 'https://api.github.com/users'
// // 异步获取数据，开始！
// function fetchPostsApi(url) {
//   return fetch(url ? url : http_api)
//     .then(response => response.json())
//     // .then(json => json.map(item => item.url))
//     // .then(url => url.map(item => fetch(item).then(response => response.json())))
//     .then(pro => Promise.all(pro))
// }

// function* fetchPosts(type, url) {
//   yield call(delay, 1000)
//   const posts = yield call(fetchPostsApi(url))
//   yield put({type, posts, receivedAt: moment().format("HH:mm:ss")})
// }


// export function* watchPost() {
//   while( yield take(REQUEST_POSTS) ){
//     yield fork(fetchPosts(RECEIVE_POSTS, http_api))
//     yield fork(fetchPosts(INCREMENT_COUNTER, 'http://yapi.demo.qunar.com/mock/74672/login'))
//   }
// }