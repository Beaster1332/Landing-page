import { Action, InitialState } from "../../types/types";

const initialState: InitialState = {
    
};

const firstModuleReducer = (state: InitialState = initialState, action: Action): InitialState => {
    switch (action.type) {
        default:
            return state
    }
};

export default firstModuleReducer;