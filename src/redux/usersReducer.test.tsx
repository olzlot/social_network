import { followSucces, unFollowSucces, usersReducer, UserType } from "./usersReducer"

type inititailStateType = {
    users: UserType[]
    totalCount: number
    currentPage: number
    isFetching: boolean
}

let initial: inititailStateType




beforeEach(() => initial = {
    users: [{
        id: 1,
        name: 'Nikita',
        photos: { small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU' },
        followed: false,
        status: 'i`m a student'
    },
    {
        id: 2,
        name: 'Maks',
        photos: { small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU' },
        followed: true,
        status: 'i`m a sansei'
    },
    ],
    totalCount: 0,
    currentPage: 1,
    isFetching: false
}
)

test('user should be switched to followed', () => {
    const newState = usersReducer(initial, followSucces(1))

    expect(newState.users[0].followed).toBe(true)
    expect(newState.users[1].followed).toBe(true)
})

test('user should be switched to unfollowed', () => {
    const newState = usersReducer(initial, unFollowSucces(2))

    expect(newState.users[0].followed).toBe(false)
    expect(newState.users[1].followed).toBe(false)
})