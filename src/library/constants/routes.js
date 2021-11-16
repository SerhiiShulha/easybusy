export const BASE = '/'

export const SIGN_IN = '/sign-in'
export const SIGN_UP = '/sign-up'
export const SIGN_UP_2 = `${SIGN_UP}/step-2`

export const PROFILE = '/profile'
export const PROFILE_SETTINGS = `${PROFILE}/settings`
export const CHILDREN_ENROLLMENT = `${PROFILE_SETTINGS}/children-enrollment`
export const ADD_CHILD = `${CHILDREN_ENROLLMENT}/add`
export const ADD_CHILD_2 = `${ADD_CHILD}/step-2`
export const CALENDAR = `${PROFILE}/calendar`
export const POSTED_CAMPS = `${PROFILE}/posted-camps`
export const CHILDREN_LIST = `${PROFILE}/children-list`

export const CAMPS_SEARCH = '/camps'
export const CAMP = '/camps/:campId'
export const CAMP_CREATE = '/new-camp'
export const CAMP_EDIT = `${CAMP}/edit`

export const SUPPORT = '/support'
