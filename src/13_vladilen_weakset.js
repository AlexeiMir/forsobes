// Значением WeakSet могут являться только объекты. Можем жобавлять только объекты. Если какой то  объект вычищается сборщиком мусора, то тогда он удаляется из WeakSet
const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
]

// Может только говорить есть ли такой объет в сете или нет

