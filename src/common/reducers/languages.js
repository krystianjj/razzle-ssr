export default (state = {
    lang: '',
    locale: '',
    content: {}
}, action) => {

    switch (action.type) {
        case "UPDATE_LANGUAGE":
            return {
                ...state,
                lang: action.lang,
                locale: action.locale,
                content: action.payload
            };
        default:
            return state;
    }
}
