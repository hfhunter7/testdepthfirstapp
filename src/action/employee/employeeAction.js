import { apiUrl } from '../../helpers/urlHelper'

const defaultUrl = apiUrl[ process.env.NODE_ENV ]

export function fetch_employees(dispatch, update_employees) {

    fetch(defaultUrl + `/employee/`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "GET",
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                // throw new Error("Bad response from server");
            }
            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_employees(json));
        });
}

export function fetch_general_employees(dispatch, update_general_employees) {

    fetch(defaultUrl + `/employee/general`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "GET",
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                // throw new Error("Bad response from server");
            }
            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_general_employees(json));
        });
}

export function fetch_finance_employees(dispatch, update_finance_employees) {

    fetch(defaultUrl + `/employee/finance`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "GET",
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                // throw new Error("Bad response from server");
            }
            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_finance_employees(json));
        });
}
