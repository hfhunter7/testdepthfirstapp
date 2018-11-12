import { apiUrl } from '../../helpers/urlHelper'
import { current_user_storage } from "../../helpers/sessionHelper";
import { createJwtFromToken } from "../../helpers/tokenHelper";

const defaultUrl = apiUrl[ process.env.NODE_ENV ]

export function fetch_employees(dispatch, update_employees) {
    const user_storage = current_user_storage();
    const auth_token = user_storage.auth_token;
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
            console.log(json)
            dispatch(update_employees(json));
        });
}
