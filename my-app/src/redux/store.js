import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'It\'s my first post', likesCount: 11},
                {id: 4, message: 'It\'s my first post', likesCount: 11}
            ],
            newPostText: 'it-kamas'

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Van'},
                {id: 2, name: 'Alice'},
                {id: 3, name: 'Mattew'},
                {id: 4, name: 'Lee'},
                {id: 5, name: 'Simon'},
                {id: 6, name: 'Teacup'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Man'},
                {id: 3, message: 'Mattew'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
            ],
            newMessageBody: ''
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('store changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebat = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}




export default store;
window.state = store;