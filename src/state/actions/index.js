/* A C T I O N  T Y P E S */

export const STEP_SET = 'STEP_SET';
export const PACKAGE_FETCH_REQUEST = 'PACKAGE_FETCH_REQUEST';
export const PACKAGE_FETCH_SUCCESS = 'PACKAGE_FETCH_SUCCESS';
export const PACKAGE_FETCH_FAILURE = 'PACKAGE_FETCH_FAILURE';

/* A C T I O N  C R E A T O R S */

export const requestPackage = id => ({ type: PACKAGE_FETCH_REQUEST, payload: id });
export const requestPackageSuccess = parcel => ({ type: PACKAGE_FETCH_SUCCESS, payload: parcel });
export const requestPackageFailure = error => ({ type: PACKAGE_FETCH_FAILURE, payload: error });
export const setStep = step => ({ type: STEP_SET, payload: step });