import { createAction, createAsynchronousAction } from './actionFactories';
import { 
	CHANGE_PASSWORD,
	CHANGE_PASSWORDCHECK,
	CHANGE_USER_ID,
	EMAIL_REQUEST_FAILED,
	EMAIL_REQUEST_PENDING,
	EMAIL_REQUEST_SUCCESS
} from './actionTypes';

export const changePassword = createAction(CHANGE_PASSWORD);
export const changePasswordCheck = createAction(CHANGE_PASSWORDCHECK);
export const changeEmail = createAsynchronousAction(
	"searchEmail",
	EMAIL_REQUEST_FAILED,
	EMAIL_REQUEST_PENDING,
	EMAIL_REQUEST_SUCCESS
);

export const changeUserId = createAction(CHANGE_USER_ID);
