
"use strict"


class CarFilters {
    constructor(carlist, containerSelector) {
        this.carlist = carlist
        this.el = this.render(containerSelector)
    }

    sendEvent(eventType) {
        const event = new CustomEvent(eventType, {
            bubbles: true
        })
        this.el.dispatchEvent(event)
    }

    selectGenerator(wrapperClassName, id, labelTitile, listItem) {
        const selectWrapper = document.createElement("div")
        selectWrapper.className = wrapperClassName

        const label = document.createElement("label")
        label.setAttribute("for", id)
        label.innerText = labelTitile

        const select = document.createElement("select")
        select.setAttribute("id", id)
        selectWrapper.append(label)

        let itemList = []

        for (const car of this.carlist) {
            if (!itemList.includes(car[listItem])) itemList.push(car[listItem])
        }

        itemList.forEach(item => {
            const option = document.createElement("option")
            option.innerText = item
            select.append(option)
        })

        selectWrapper.append(select)

        const arrow = document.createElement("span")
        arrow.className = "car-filter__arrow"
        arrow.innerText = "\u23F7"
        selectWrapper.append(arrow)
        return selectWrapper
    }

    genModelFilter() {
        const modelFilter = this.selectGenerator("car-filter__select-wrapper", "car", "Car", "model")
        return modelFilter
    }

    genYearFilter() {
        const yearFilter = this.selectGenerator("car-filter__select-wrapper", "year", "Year", "year")
        return yearFilter
    }

    render(containerSelector) {


        const header = document.createElement("div")
        header.className = "car-filter__header"

        document.querySelector(containerSelector).append(header)
        header.append(this.genModelFilter())
        header.append(this.genYearFilter())

        document.getElementById("car").onchange = () => this.sendEvent("changeCar")
        document.getElementById("year").onchange = () => this.sendEvent("changeYear")

        return header
    }
}

class CarFilterManager {
    constructor(carList, containerSelector) {
        this.carList = carList.sort((a, b) => {
            if (a.model === "None") return -1 
            if (b.model === "None") return 1
            else return a.model.localeCompare(b.model)
        })
        console.log(this.carList)
        this.el = this.render(containerSelector)
    }

    onShowResult() {
        const modelValue = document.getElementById("car").value
        const yearValue = parseFloat(document.getElementById("year").value)
        console.log(modelValue)
        console.log(yearValue)
        if (modelValue !== "None" || !isNaN(yearValue)) {
            if (document.querySelector(".car-filter__result")) {
                document.querySelector(".car-filter__result").remove()
            }
            const carFilterResult = document.createElement("div")
            carFilterResult.className = "car-filter__result"

            this.createResultList(modelValue, yearValue, carFilterResult)

            this.container.append(carFilterResult)
        }

    }

    resultDiv(...items) {
        const div = document.createElement("div")
        items.forEach(item => {
            const span = document.createElement("span")
            span.innerText = item
            div.append(span)
        })
        return div
    }

    createResultList(modelValue, yearValue, carFilterResult) {
        if (modelValue !== "None" && !isNaN(yearValue)) {
            const filteredCars = this.carList.filter(car => car.model === modelValue && car.year === yearValue)
            console.log(filteredCars)
            if (filteredCars.length > 0) {
                filteredCars.forEach(car => {
                    carFilterResult.append(this.resultDiv(car.model ,car.year ,car.price + " $"))
                })
            } else {

                const div = document.createElement("div");
                div.innerText = "Не найдено"
                carFilterResult.append(div)
            }
        } else {

            this.carList.forEach(car => {
                if ((modelValue === "None" || car.model === modelValue) && (isNaN(yearValue) || car.year === yearValue)) {
                    carFilterResult.append(this.resultDiv(car.model ,"year: "+car.year ,"price: "+car.price+ " $"))
                }
            })
        }
    }

    render(containerSelector) {
        this.container = document.createElement("div")
        this.container.className = "car-filter__container"

        document.querySelector(containerSelector).append(this.container)
        const carFilterManagerHeader = new CarFilters(this.carList, ".car-filter__container")
        document.querySelector(".car-filter__header").addEventListener("changeCar", this.onShowResult.bind(this))
        document.querySelector(".car-filter__header").addEventListener("changeYear", this.onShowResult.bind(this))

        return this.container
    }
}

let carList = [
    { model: "None", year: "None", price: "" },
    { model: "BMW", year: 2000, price: 3500 },
    { model: "BMW", year: 2003, price: 4500 },
    { model: "BMW", year: 2008, price: 7500 },
    { model: "BMW", year: 2007, price: 4500 },
    { model: "Opel", year: 2004, price: 4500 },
    { model: "Opel", year: 2001, price: 1500 },
    { model: "Opel", year: 2010, price: 2500 },
    { model: "Reno", year: 2001, price: 7500 },
    { model: "Volvo", year: 2002, price: 5000 },
    { model: "Volvo", year: 2008, price: 9000 },
    { model: "Volvo", year: 2010, price: 12000 },
    { model: "Audi", year: 2002, price: 5000 },
    { model: "Audi", year: 2003, price: 6000 },
    { model: "Audi", year: 2002, price: 8000 }
]

// let test = new CarFilters(carList, ".car-filter")

let manager = new CarFilterManager(carList, ".car-filter")
















// let el = document.querySelector(".car-filter")
// el.addEventListener("changeCar", () => alert("changeCar"))
// el.addEventListener("changeYear", ()=> alert("changeYear"))



