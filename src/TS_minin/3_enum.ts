enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
const membership2 = Membership[2]

console.log(membership)
console.log(membership2)

enum SocialMedia {
    VK = "VK",
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)
