"use strict"
let pointer = `\u{1F446}`
// Задача 5. Дано список URL адрес. Підрахувати кількість адрес, що відносяться до кожного із доменів (edu, com, org,...).
if (document.querySelector(".ex1")) {
    const urlAddresses = [
        "https://www.harvard.edu",
        "https://www.stanford.edu",
        "https://www.mitt.edu",
        "https://www.wikipedia.org",
        "https://www.mozilla.org",
        "https://www.google.com",
        "https://www.facebook.com",
        "https://www.microsoft.com",
        "https://www.apple.com",
        "https://www.amazon.com"
    ]
    let map = new Map()

    for (const addres of urlAddresses) {
        let key = addres.match(/\.\w{3}\b/g)
        let count = map.get(key[0]) ?? 0
        map.set(key[0], count + 1)
    }
    map.forEach((count, key, mapRef) => {
        let div = document.createElement("div")
        div.innerText = `${key} - ${count}`
        document.querySelector(".ex1__res").append(div)
    })

    console.log()
}

// Задача 6. Дано масив книг (назва, рік видання, автор, ціна). Підрахувати загальну вартість книг для кожного із авторів.

if (document.querySelector(".ex2")) {
    const books = [
        { title: "To Kill a Mockingbird", year: 1960, author: "Harper Lee", price: 15.99 },
        { title: "1984", year: 1949, author: "George Orwell", price: 12.99 },
        { title: "The Great Gatsby", year: 1925, author: "F. Scott Fitzgerald", price: 10.99 },
        { title: "The Catcher in the Rye", year: 1951, author: "J.D. Salinger", price: 14.99 },
        { title: "Pride and Prejudice", year: 1813, author: "Jane Austen", price: 9.99 },
        { title: "Animal Farm", year: 1945, author: "George Orwell", price: 11.99 },
        { title: "Moby Dick", year: 1851, author: "Herman Melville", price: 13.99 },
        { title: "The Lord of the Rings", year: 1954, author: "J.R.R. Tolkien", price: 25.99 },
        { title: "The Hobbit", year: 1937, author: "J.R.R. Tolkien", price: 17.99 }
    ]
    let map = new Map()
    for (const book of books) {
        let totalPrice = map.get(book.author) ?? 0
        map.set(book.author, totalPrice + book.price)
    }
    map.forEach((totalPrice, autor) => {
        let div = document.createElement("div")
        div.innerText = `${autor} - ${totalPrice}`
        document.querySelector(".ex2__res").append(div)
    })
}


// Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.

if (document.querySelector(".ex3")) {
    const nicknames = [
        "HappyCamper",
        "ShadowNinja",
        "CoolCat123",
        "MightyEagle",
        "ShadowNinja",
        "CoolCat123",
        "TechGuru",
        "HappyCamper",
        "GamerGirl99",
        "WiseOwl",
        "Speedster",
        "CoolCat123",
        "TechGuru",
        "HappyCamper",
        "TechGuru",
        "TechGuru",
        "DreamChaser",
        "DreamChaser",
        "CryptoKing",
        "ShadowNinja",
        "HappyCamper",
    ]

    let map = new Map()
    for (const nickname of nicknames) {
        let count = map.get(nickname) ?? 0
        map.set(nickname, count + 1)
    }
    map.forEach((visits, userName) => {
        let div = document.createElement("div")
        div.innerText = `${userName} - ${visits}`
        document.querySelector(".ex3__res").append(div)
    })
}

// Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

if (document.querySelector(".ex4")) {
    const students = [
        { fio: "Иванов Иван Иванович", course: 1, faculty: "Информационные технологии" },
        { fio: "Петров Петр Петрович", course: 2, faculty: "Информационные технологии" },
        { fio: "Сидоров Сидор Сидорович", course: 3, faculty: "Филология" },
        { fio: "Александров Александр Александрович", course: 4, faculty: "Филология" },
        { fio: "Смирнов Сергей Сергеевич", course: 1, faculty: "Математика" },
        { fio: "Кузнецов Николай Николаевич", course: 2, faculty: "Математика" },
        { fio: "Попов Павел Павлович", course: 3, faculty: "Физика" },
        { fio: "Васильев Василий Васильевич", course: 4, faculty: "Физика" },
        { fio: "Новиков Николай Иванович", course: 1, faculty: "Информационные технологии" },
        { fio: "Морозов Максим Максимович", course: 2, faculty: "Информационные технологии" },
        { fio: "Федоров Федор Федорович", course: 3, faculty: "Филология" },
        { fio: "Михайлов Михаил Михайлович", course: 4, faculty: "Филология" },
        { fio: "Андреев Андрей Андреевич", course: 1, faculty: "Математика" },
        { fio: "Алексеев Алексей Алексеевич", course: 2, faculty: "Математика" },
        { fio: "Макаров Максим Максимович", course: 3, faculty: "Физика" },
        { fio: "Николаев Николай Николаевич", course: 4, faculty: "Физика" },
        { fio: "Захаров Захар Захарович", course: 1, faculty: "Информационные технологии" },
        { fio: "Соловьев Слава Славович", course: 2, faculty: "Информационные технологии" },
        { fio: "Павлов Павел Павлович", course: 3, faculty: "Филология" },
        { fio: "Семенов Семен Семенович", course: 4, faculty: "Филология" }
    ]

    let map = new Map()
    for (const student of students) {
        let count = map.get(student.course) ?? 0
        map.set(student.course, count + 1)
    }
    map.forEach((val, key) => {
        let div = document.createElement("div")
        div.innerText = `${key}(й) курс - ${val}`
        document.querySelector(".ex4__res").append(div)
    })

    let faculty = new Set(students.map(student => student.faculty))
    let div = document.createElement("div")
    div.innerText = `Кількість різних факультетів - ${faculty.size}`
    document.querySelector(".ex4__res").append(div)
}

// Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів.
if (document.querySelector(".ex5")) {
    let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
    let map = new Map()
    for (const temperature of temperatures) {
        let count = map.get(temperature) ?? 0
        map.set(temperature, count + 1)
    }
    map.forEach((val, key) => {
        let div = document.createElement("div")
        div.innerText = `${key} - ${val}`
        document.querySelector(".ex5__res").append(div)
    })
    // Заокруглити вверх значення та підрахувати кількість різних показів.
    let roundedTemperatures = new Set(temperatures.map(temp => Math.ceil(temp)))
    let div = document.createElement("div")
    div.innerText = `Кількість заокруглиних вверх різних показів - ${roundedTemperatures.size}`
    document.querySelector(".ex5__res").append(div)
}

// Задача 10. Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії
// також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.
if (document.querySelector(".ex6")) {
    let mathAndHistory = 0
    const mathStudents = ["Иванов", "Петров", "Сидоров", "Кузнецов", "Смирнов", "Попов", "Васильев", "Михайлов", "Андреев", "Алексеев"]
    const historyStudents = ["Сидоров", "Кузнецов", "Смирнов", "Макаров", "Николаев", "Васильев", "Семенов", "Захаров", "Павлов", "Соловьев"]

    let map = new Map()
    for (const mathStudent of mathStudents) {
        map.set(mathStudent, 'math')
    }
    for (const historyStudent of historyStudents) {
        if (map.has(historyStudent)) {
            map.delete(historyStudent)
            map.set(historyStudent, 'math, history')
            mathAndHistory += 1
        } else map.set(historyStudent, 'history')
    }
    let div = document.createElement("div")
    div.innerText = `Кількість студентів з гуртка з історії також відвідують гурток з математики - ${mathAndHistory}`
    document.querySelector(".ex6__res").append(div)
    let evenOne = new Set([...mathStudents, ...historyStudents])
    let div2 = document.createElement("div")
    div2.innerText = `Кількість студентів які відвідують хоча б один гурток - ${evenOne.size}`
    document.querySelector(".ex6__res").append(div2)
}

// Задача 12. Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ
// і виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.

if (document.querySelector(".ex7")) {
    // localStorage.clear()
    class NewTask {
        constructor(taskName, taskValue) {
            this.taskName = taskName
            this.taskValue = taskValue
        }
    }
    class TaskList {
        constructor(taskList) {
            this.taskList = taskList
            this.interval()
        }
        loadTasks() {
            for (const item of this.taskList) {
                localStorage.setItem(item.taskName, item.taskValue)
            }
        }
        showRandomTask() {
            let max = localStorage.length
            if (max >= 1) {
                let randomTaskNumber = Math.floor(Math.random() * max)
                let task = localStorage.key(randomTaskNumber)
                if (confirm(`${task} : ${localStorage.getItem(task)}`)) {
                    localStorage.removeItem(task)
                }
                console.log(localStorage.length)
            } else clearInterval(this.interval)
        }


        interval() {
            this.loadTasks()
            setInterval(this.showRandomTask, 3000)
        }
    }
    let taskList = [
        new NewTask("task 1", "Подивитись урок"),
        new NewTask("task 2", "Зробити зарадяку"),
        new NewTask("task 3", "Зробити домашку"),
        new NewTask("task 4", "Почитати JS для чайників")
    ]
    let test = new TaskList(taskList)


}