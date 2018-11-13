import { apiUrl } from '../../helpers/urlHelper'

const defaultUrl = apiUrl[ process.env.NODE_ENV ]

export function fetch_managers(dispatch, update_managers) {

    fetch(defaultUrl + `/manager/`,
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
            dispatch(update_managers(json));
        });
}

export function fetch_employee_by_manager(id,dispatch, update_employee_by_manager) {

    fetch(defaultUrl + `/manager/employee/${id}`,
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
            dispatch(update_employee_by_manager(json));
        });
}
