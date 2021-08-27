export type PostType = {
    id?: number
    message: string
    like: number
    disLike: number
}
export type DialogItemType = {
    name: string
    id: number
    url: string
}
export type MessageItemType = {
    id?: number
    textBody: string
    isOwner?: boolean
}
export type PostsPageType = {
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogItemData: Array<DialogItemType>
    messages: Array<MessageItemType>
}
export type RootStateType = {
    postsPage: PostsPageType
    dialogPage: DialogPageType
}
let state: RootStateType = {
    postsPage: {
        posts: [
            {
                id: 1,
                message: "Hello, how are you",
                like: 354,
                disLike: 0
            },
            {
                id: 2,
                message: "It`s my first post",
                like: 23,
                disLike: 2
            }
        ],
    },
    dialogPage: {
        dialogItemData: [
            {
                name: "David Peterson",
                id: 1,
                url: "/img/avatar-2.jpg"
            },
            {
                name: "Sindy Forest",
                id: 2,
                url: "/img/avatar-3.jpg"
            },
            {
                name: "David Peterson",
                id: 3,
                url: "/img/avatar-4.jpg"
            },
            {
                name: "Zara Ali",
                id: 4,
                url: "/img/avatar-5.jpg"
            },
            {
                name: "Zah Abdulla",
                id: 5,
                url: "/img/avatar-1.jpg"
            }
        ],
        messages: [
            {
                id: 1,
                textBody: "Lorem ipsum dolor sit amet," +
                    "nostrum officiis omnis praesentium provident reprehenderit sit tempore.",
                isOwner: true,
            },
            {
                id: 2,
                textBody: "Lorem ipsum dolor sit amet," +
                    "raesentium provident reprehenderit sit tempore.",
                isOwner: false,
            },
            {
                id: 3,
                textBody: "Lor amet,omnit sit te mpore.",
                isOwner: false,
            },
            {
                id: 4,
                textBody: "Lolostsentium provident reprehenderit sit tempore.",
                isOwner: false,
            },
            {
                id: 5,
                textBody: "Lolostsentium provident reprehenderit sit tempore.",
                isOwner: false,
            }
        ]
    },
}
export default state;