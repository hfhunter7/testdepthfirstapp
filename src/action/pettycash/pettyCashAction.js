import { apiUrl } from '../../helpers/urlHelper'
import history from '../../history';
const defaultUrl = apiUrl[ process.env.NODE_ENV ]

export function create_petty_cash(data , dispatch, update_petty_cash) {
    fetch(defaultUrl + `/petty-cash/`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(data),
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                // throw new Error("Bad response from server");
            }
            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_petty_cash(json));
            history.replace('/employee-status-petty-cash/' + data.employee_id);
        });
}

export function fetch_petty_cash_by_employee(id,dispatch, update_petty_cash_by_employee) {

    fetch(defaultUrl + `/petty-cash/employee/${id}`,
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
            dispatch(update_petty_cash_by_employee(json));
        });
}

export function fetch_petty_cash_approve(dispatch, update_petty_cash_approve) {

    fetch(defaultUrl + `/petty-cash/approve/`,
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
            dispatch(update_petty_cash_approve(json));
        });
}

export function fetch_petty_cash_received(dispatch, update_petty_cash_received) {

    fetch(defaultUrl + `/petty-cash/received/`,
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
            dispatch(update_petty_cash_received(json));
        });
}

export function update_status_petty_cash(id , data , emp_id ,dispatch, update_petty_cash_by_employee , update_petty_cash_approve ,update_petty_cash_received) {
    fetch(defaultUrl + `/petty-cash/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "PUT",
            body: JSON.stringify(data),
        })
        .then(function ( response ) {
            if (response.status >= 400) {
                // throw new Error("Bad response from server");
            }
            return response.json()
        })
        .then(function ( json ) {
            dispatch(update_petty_cash_by_employee(json));
            fetch_petty_cash_by_employee(emp_id ,dispatch , update_petty_cash_by_employee);
            fetch_petty_cash_approve(dispatch , update_petty_cash_approve)
            fetch_petty_cash_received(dispatch , update_petty_cash_received)
        });
}