
enum OptionActionTypes {
    UPDATE_WIDTH = 'FETCH_USERS_SUCCESS',
    UPDATE_OPTION1 = 'UPDATE_OPTION1',
    UPDATE_OPTION2 = 'UPDATE_OPTION2',
}

interface OptionInterface {
    width?: string,
    option1?: string,
    option2?: string,
}

interface UpdateWidthAction {
    type: OptionActionTypes.UPDATE_WIDTH;
    payload: string;
}

interface UpdateOption1Action {
    type: OptionActionTypes.UPDATE_OPTION1;
    payload: string;
}

interface UpdateOption2Action {
    type: OptionActionTypes.UPDATE_OPTION2;
    payload: string;
}

type OptionAction = UpdateWidthAction | UpdateOption1Action | UpdateOption2Action;

export {
    OptionActionTypes
};
export type {
        OptionInterface,
        UpdateWidthAction,
        UpdateOption1Action,
        UpdateOption2Action,
        OptionAction
    };
