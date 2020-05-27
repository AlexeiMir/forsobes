
const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

const getFreeDomainsCount = (emails) => {
    emails.map( email => {
     const [,domain] = email.split('@')
         return domain
    })
    domain.filter()
}

console.log(getFreeDomainsCount(emails))