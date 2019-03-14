import {
	STATE_RECOMMENDATIONS_BY_FEELING,
	STATE_RECOMMENDATIONS_BY_ID,
	STATE_RECOMMENDATIONS_RANDOM,
	STATE_REQUEST_BY_FEELING_IS_PENDING,
	STATE_REQUEST_BY_ID_IS_PENDING,
	STATE_REQUEST_RANDOM_IS_PENDING
} from '../constants';

export const accessState = {
	accessHasFailed: false,
	accessHasSucceded: false,
	accessRequestHasFailed: false,
	accessRequestIsPending: false,
	userId: ""
};

export const bookState = {
	authors: "",
	cover: "",
	date: "",
	plataforms: "",
	synopsis: "",
	title: ""
};

export const emailState = {
	email: "", 
	emailIsNew: false,  
	emailIsValid: false,
	emailRequestIsPending: false,
	emailRequestIsSuccessful: false,
};

export const passwordState = {
	password: "",
	passwordIsValid: false,
	passwordCheck: "",
	passwordsMatch: false
};

export const recommendationsState = {
	[STATE_RECOMMENDATIONS_BY_FEELING]: [],
	[STATE_RECOMMENDATIONS_BY_ID]: [],
	[STATE_RECOMMENDATIONS_RANDOM]: [],
	[STATE_REQUEST_BY_FEELING_IS_PENDING]: false,
	[STATE_REQUEST_BY_ID_IS_PENDING]: false,
	[STATE_REQUEST_RANDOM_IS_PENDING]: false
};
