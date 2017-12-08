import { types } from '../actions/loginActions';

const INITIAL_STATE = {
    email: 'bob@bob.com',
    password: 'bob0',
    owner: 'false',
    activeOwner: false,
    activeCustomer: false,
    currentOwnerId: '',
    currentCustomerId: ''
};

export default function LoginReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case types.LOGIN_OWNER: {
            if (payload) {
                return {
                    ...state,
                    currentOwnerId: payload.userId,
                    activeOwner: true
                };
            } else {
                return {
                    ...state,
                    password: ''
                };
            }
            break;
        }
        case types.LOGIN_CUSTOMER: {
            if (payload) {
                return {
                    ...state,
                    currentCustomerId: payload.userId,
                    activeCustomer: true
                }
            } else {
                return {
                    ...state,
                    password: ''
                };
            }
            break;
        }

        case (types.OWNER_TOGGLE_LOGIN): {
            return {
                ...state,
                owner: payload
            };
            break;
        }

        case (types.UPDATE_USERNAME_LOGIN): {
            return {
                ...state,
                email: payload
            };
            break;
        }

        case (types.UPDATE_PASSWORD_LOGIN): {
            return {
                ...state,
                password: payload
            };
            break;
        }
        default: {
            return state;
        }
    }
};