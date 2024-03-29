const users =  [
    {name: 'Tirion',
    friends: [
        {name:'Mira',gender:'female'},
        {name:'Ramsey',gender:'male'}
    ],
    },
    {name: 'Bronn',
        friends: [],
    },
    {name: 'Sam',
        friends: [
            {name:'Aria',gender:'female'},
            {name:'Keit',gender:'female'}
        ],
    },
    {name: 'Rob',
        friends: [
            {name:'Taywin',gender:'female'},
        ],
    },
]

const getGirlFriends = (users) => {
    const friendsOfUsers = users.map(({friends}) => friends)
    return friendsOfUsers.flat().filter(({gender}) => gender === 'female');
}

console.log(getGirlFriends(users))