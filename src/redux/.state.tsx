// import { useState } from "react";
import { v1 } from "uuid";
// import { render } from "../render";

export type DialogItemType = {
  id: string
  name: string
};
export type MessageType = {
  id: string
  message: string
  isMe: boolean
};
export type PostType = {
  id: string
  message: string
}
export type FriendType = {
  id: string
  name: string
  logoSrc?: string
}
export type SidebarType = {
  myFriendsList: FriendType[]
}


export type DialogsPageType = {
  dialogs: DialogItemType[]
  messages: MessageType[]
}
export type ProfilePageType = {
  posts: PostType[]
  inputValue: string
}
export type AppStateType = {
  dialogsPage: DialogsPageType
  profilePage: ProfilePageType
  sidebar: SidebarType
}

let render = (state: AppStateType) => {
  console.log('state changed');
  
}

let state: AppStateType = {
  dialogsPage: {
    dialogs: [
      { id: v1(), name: 'Vasya' },
      { id: v1(), name: 'John' },
      { id: v1(), name: 'Petr' },
      { id: v1(), name: '466' },
    ],

    messages: [
      { id: v1(), message: 'Hi. How are you?', isMe: true },
      { id: v1(), message: 'i`m fine', isMe: false },
      { id: v1(), message: 'you know, i`m studing in IT-incubator', isMe: true },
      { id: v1(), message: 'oh, it`s great', isMe: false},
    ],
  },

  profilePage: {
    posts: [
      { id: v1(), message: 'My first POST' },
      { id: v1(), message: 'Hi!!!' },
      { id: v1(), message: 'How are you' },
      { id: v1(), message: 'dsfsdf' }
    ],
    inputValue: ''
  },

  sidebar: {
    myFriendsList: [
      { id: v1(), name: 'Nikita', logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22H-et3cLZZfMf8uFawJt_8y3nZ-Y1u2wWg&usqp=CAU' },
      { id: v1(), name: 'Stas', logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU' },
      { id: v1(), name: 'Roman', logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8JS_wiWCOiw9GLR3l7EvaVd0DsX7cNwu2g&usqp=CAU' },
      { id: v1(), name: 'Pier Rishar', logoSrc:'data:image/jpeg;base64,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' },
      { id: v1(), name: 'bez logo' },
    ]
  }
};
 
export const addNewPost = () => {
  const newPost = {
    id: v1(), 
    message: state.profilePage.inputValue
  }
  const newState = {...state};
  newState.profilePage.posts.push(newPost)
  newState.profilePage.inputValue = ''
  state = {...newState}
  
  render(state)

}

export const changeValue = (post: string) => {
  
  state.profilePage.inputValue = post
  // console.log(state.profilePage.inputValue);
  render(state)
}

// const [stateA, setState] = useState(state)
export const subcriber = (observer: (state:AppStateType)=> void) => {
   render = observer
}

export default state