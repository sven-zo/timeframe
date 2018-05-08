import { all, takeLatest, put } from 'redux-saga/effects';
import { PACKAGE_FETCH_REQUEST, requestPackageFailure, requestPackageSuccess } from '../actions';
import fetchPackage from '../../services/api';

function* workerRequestPackage(action) {
  try {
    const parcel = yield fetchPackage(action.payload);
    yield put(requestPackageSuccess(parcel));
  } catch (error) {
    yield put(requestPackageFailure(error));
  }
}

function* watchRequestPackage() {
  yield takeLatest(PACKAGE_FETCH_REQUEST, workerRequestPackage);
}

export default function* rootSaga() {
  yield all([
    watchRequestPackage(),
  ]);
}
