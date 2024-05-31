"use strict"
let pointer = `\u{1F446}`
// Задача 1) Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
if (document.querySelector(".result-one")) {
    const arr = ["123", "456", "hello", "name", "789"]
    arr.forEach(string => {
        if (/\d/.test(string)) {
            const result = document.querySelector(".result-one")
            const div = document.createElement("div")
            div.innerText = string
            result.append(div)
        }
    })
}
//Задача 2) Дано масив рядків. Вивести ті, у яких немає цифр.
if (document.querySelector(".result-two")) {
    const arr = ["123", "456", "hello", "name", "789"]
    arr.forEach(string => {
        if (!/\d/.test(string)) {
            const result = document.querySelector(".result-two")
            const div = document.createElement("div")
            div.innerText = string
            result.append(div)
        }
    })
}

// Задача 3) Дано масив рядків. Вивести ті, у яких є голосні літери.
if (document.querySelector(".result-three")) {
    const arr = ["АХ1234ВВ", "БР5678ВВ", "О5678КК", "РТ9012УУ", "НС5678ЖД", "іі5678аа"]
    arr.forEach(string => {
        if (/[АЕЄИІЇОУЮЯ]/.test(string.toUpperCase())) {
            const result = document.querySelector(".result-three")
            const div = document.createElement("div")
            div.innerText = string
            result.append(div)
        }
    })
}

// Задача 4) Дано масив рядків. Вивести ті, у яких є голосні літери.

if (document.querySelector(".result-four")) {
    const arr = ["АХ1234ВВ", "БР5678ВВ", "О5678КК", "РТ9012УУ", "НС5678ЖД", "іі5678аа"]
    arr.forEach(string => {
        if (/[бвгґджзклмнпрсхцчшщ]/.test(string.toLowerCase())) {
            const result = document.querySelector(".result-four")
            const div = document.createElement("div")
            div.innerText = string
            result.append(div)
        }
    })
}

// Задача 5) Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

if (document.querySelector(".result-five")) {
    const arr = ["АХ1234ВВ", "БР5678ВВ", "О5678КК", "РТ9012УУ", "НС56738ЖД", "іі5678аа"]
    arr.forEach(string => {
        if (/[1|3]/.test(string.toLowerCase())) {
            const result = document.querySelector(".result-five")
            const div = document.createElement("div")
            div.innerText = string
            result.append(div)
        }
    })
}

// Задача 6)  Дано рядок тексту, вивести усі числа, які є у тексті.

if (document.querySelector(".result-six")) {
    const testString = "Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3"
    const result = document.querySelector(".result-six").innerText = testString.match(/\d/g)
}

// Задача 7)  Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

if (document.querySelector(".result-seven")) {
    const testString = "Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3."
    const result = document.querySelector(".result-seven").innerText = testString.match(/[,.!?]/g)
}

// Задача 8)  Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.

if (document.querySelector(".result-eight")) {
    const testString = "Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3."
    let fragmentArr = testString.split(/[,.!?]/)
    fragmentArr.forEach(fragment => {
        const div = document.createElement("div")
        div.innerText = fragment
        document.querySelector(".result-eight").append(div)
    })
}

// Задача 9)  Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).

if (document.querySelector(".result-nine")) {
    const testString = "Тарас Шевченко народився 09.03.1814 року"
    let res = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2]).\d{4}/g.test(testString)
    if (res === true) {
        const div = document.createElement("div")
        div.innerText = `${testString} \n ${pointer} Цей рядок містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).`
        document.querySelector(".result-nine").append(div)
    }
}

// Задача 10) Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
if (document.querySelector(".result-ten")) {
    const testString = "Яблука 10кг, кортопля 20кг, морква 12кг."
    let res = testString.match(/\d{2}/g)
    if (res.length > 0) {
        const div = document.createElement("div")
        div.innerText = `${testString}\n${pointer} У цьому рядку кількість двоцифрових чисел дорівнює ${res.length}`
        document.querySelector(".result-ten").append(div)
    }
}

// Задача 11) Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
if (document.querySelector(".result-eleven")) {
    const testText = document.querySelector(".ex").innerText
    let cardNumParse = testText.match(/\d{4}[-]\d{4}[-]\d{4}[-]\d{4}/g)
    if (cardNumParse.length !== 0) {
        const div = document.createElement("div")
        div.innerText = `Результат пошуку ${cardNumParse.length}`
        document.querySelector(".result-eleven").append(div)
        cardNumParse.forEach(cardNum => {
            const num = document.createElement("div")
            num.innerText = cardNum
            div.append(num)
        })
    }

}
// Задача 12) Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
if (document.querySelector(".result-twelve")) {
    const testAddres = "https://www.uz.gov.ua"
    let res = /\bgov\b/.test(testAddres)
    if (res === true) {
        const div = document.createElement("div")
        div.innerText = `${testAddres} містить домен “gov”`
        document.querySelector(".result-twelve").append(div)
    }
}

// Задача 13) Вибрати усі роки після 2021 року з отриманого повідомлення
if (document.querySelector(".result-thirteen")) {
    let testString = "2004, 2022, 1991, 1995, 2035, 2125, 3000"
    let exp = /(\b202[2-9]\b)|(\b20[3-9]\d\b)|(\b3\d{3}\b)/g
    let res = testString.match(exp)
    if (res.length > 0) {
        const div = document.createElement("div")
        div.innerText = res
        document.querySelector(".result-thirteen").append(div)
    }
}

// Задача 14) Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
if (document.querySelector(".result-fourteen")) {
    let testNumbers = "+380331122333, +440331122333, +280331122333, +380221122777"
    let numArr = testNumbers.split(/,\s/)
    numArr.forEach(num => {
        if (num.startsWith('+38')) {
            const div = document.createElement("div")
            div.innerText = num
            document.querySelector(".result-fourteen").append(div)
        }
    })
}

// Задача 15) Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
if (document.querySelector(".result-fifteen")) {
    const nameInput = document.querySelector("#name")
    nameInput.addEventListener("input", (e) => {
        if (document.querySelector(".user-name")) {
            document.querySelector(".user-name").remove()
        }
        if (e.target.value !== "") {
            const userName = document.createElement("div")
            userName.className = "user-name"
            userName.innerText = e.target.value.replace(" ", "-")
            document.querySelector(".result-fifteen").append(userName)
        }
    })
}

// Задача 16) Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
if (document.querySelector(".result-sixteen")) {
    const dateInput = document.querySelector("#date")
    dateInput.addEventListener("input", (e) => {
        if (document.querySelector(".user-date")) {
            document.querySelector(".user-date").remove()
        }
        if (e.target.value !== "") {
            const userDate = document.createElement("div")
            userDate.className = "user-date"
            userDate.innerText = e.target.value.replaceAll(".", "/")
            document.querySelector(".result-sixteen").append(userDate)
        }
    })
}

// Задача 17)  Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
if (document.querySelector(".result-seventeen")) {
    const dayInput = document.querySelector("#day")
    dayInput.addEventListener("input", (e) => {
        if (document.querySelector(".user-day")) {
            document.querySelector(".user-day").remove()
        }
        if (e.target.value !== "") {
            const userDay = document.createElement("div")
            userDay.className = "user-day"
            if (/\b[06s]\b/.test(e.target.value)) {
                userDay.innerText = "Вихідний" 
            }else userDay.innerText = "Робочій день" 
            
            document.querySelector(".result-seventeen").append(userDay)
        }
    })
}
