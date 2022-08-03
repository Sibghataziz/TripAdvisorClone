const form =  document.querySelector("form")
form.addEventListener("submit",checkFlights)


const booking = document.querySelector("#typeOfTravel")
booking.addEventListener("change",returnInput)

setToday()
displaySearch()
function setToday(){
    const departDate = document.querySelector("#depart")
    var today = new Date();
    depart.value = today.toISOString().substr(0, 10);
}

function checkFlights(){
    event.preventDefault()
    const type = booking
    const from = document.querySelector("#from")
    const to = document.querySelector("#to")
    const depart = document.querySelector("#depart")
    const returnTrip  = type==="RoundTrip"? document.querySelector("#returnDate"):null
    const noOfPassengers = document.querySelector("#noOftravellers")

    if(from.value===""){
        console.log("from")
        // from.setAttribute("class","highLight")
    }
    else if(to.value===""){
        console.log("to")
        // from.setAttribute("class","highLight")
    }
    else if(returnTrip!==null && returnTrip.value===""){
        console.log("returnTrip")
        // from.setAttribute("class","highLight")
    }
    else if(noOfPassengers.value==="" || noOfPassengers===0){
        console.log("noOfPassengers")
        // from.setAttribute("class","highLight")
    }
    else{
        // console.log(nonStop)
        const search = {
            from :  from.value,
            to:     to.value,
            depart: depart.value,
            returnTrip: returnTrip===null?null:returnTrip.value,
            type: type.value,
            noOfPassengers: noOfPassengers.value,
        }
        localStorage.setItem("search",JSON.stringify(search))
        location="flightResult.html"
    }
}

function returnInput(){
    const val = booking.value
    // console.log(val)
    const div = document.querySelector("#return")
    if(val==="RoundTrip"){
        const returnDate = document.createElement("input")
        // console.log(returnDate)
        returnDate.setAttribute("type","date")
        let date = new Date()
        date.setDate(date.getDate() + 1)
        returnDate.value = date.toISOString().substr(0, 10)
        const returnDateLabel = document.createElement("label")
        returnDateLabel.innerText="Return Date"
        const br = document.createElement("br")
        div.append(returnDateLabel,br,returnDate)
    }
    else{
        div.innerText=""
    }
}


function displaySearch(){
    const search = JSON.parse(localStorage.getItem("search"))
    // console.log(search)
    const data = JSON.parse(localStorage.getItem('data'))
    // console.log(search.nonStop,"nonStop")
    let data1 = data[search.from.toLowerCase()]['Travel'][search.to.toLowerCase()]['non_stop']
    if(!search.nonStop){
        console.log("inside")
        data1 =  data1.concat(data[search.from.toLowerCase()]['Travel'][search.to.toLowerCase()]['one_stop'],data[search.from.toLowerCase()]['Travel'][search.to.toLowerCase()]['one_plus_stop'])
    }
    console.log(data1,"data1",!search.nonStop)

    const div = document.querySelector("#content")
    if(search.type==="roundTrip"){
        console.log("hihih")
        let data2 = data[search.to.toLowerCase()]['Travel'][search.from.toLowerCase()]['non_stop']
        if(!search.nonStop){
            data2 = data2.concat(data[search.to.toLowerCase()]['Travel'][search.from.toLowerCase()]['one_stop'],data[search.to.toLowerCase()]['Travel'][search.from.toLowerCase()]['one_plus_stop']) 
        }
        console.log(data2,"data2")
        data1.forEach((element,index) => {
            data2.forEach((element2,index2)=>{
                const img1 = document.createElement("img")
                img1.setAttribute("src","https://static.tacdn.com/img2/flights/airlines/logos/100x100/Spicejet.png")
                img1.setAttribute("alt",element.company)
                img1.setAttribute("class","flightImage")
                
                const h4 = document.createElement("h4")
                h4.innerText = `${element.departure}-${element.arrival}`

                const p = document.createElement("p")
                p.innerText = `${search.from}-${search.to}, ${element.company}`

                const h4_p1 = document.createElement("div")
                h4_p1.append(h4,p)
                h4_p1.setAttribute("class","time")

                const duration = document.createElement("h5")
                duration.innerText = "2h 10m"//`${calculateDuration(element.departure,element.arrival)}`
                duration.setAttribute("class","duration")

                const div1 = document.createElement("div")
                div1.append(img1,h4_p1,duration)
                div1.setAttribute("class","roundFligthDetails")

                const img2 = document.createElement("img")
                img2.setAttribute("src","https://static.tacdn.com/img2/flights/airlines/logos/100x100/Spicejet.png")
                img2.setAttribute("alt",element2.company)
                img2.setAttribute("class","flightImage")
                
                const h41 = document.createElement("h4")
                h41.innerText = `${element2.departure}-${element2.arrival}`

                const p1 = document.createElement("p")
                p1.innerText = `${search.to}-${search.from}, ${element2.company}`

                const h4_p2 = document.createElement("div")
                h4_p2.append(h41,p1)
                h4_p2.setAttribute("class","time")

                const duration1 = document.createElement("h5")
                duration1.innerText = "2h 10m"//`${calculateDuration(element.departure,element.arrival)}`
                duration1.setAttribute("class","duration")

                const div2 = document.createElement("div")
                div2.append(img2,h4_p2,duration1)
                div2.setAttribute("class","roundFligthDetails")

                const rdiv = document.createElement("div")
                rdiv.append(div1,div2)

                const h21 = document.createElement("h2")
                h21.innerText = "Rs.12365"//calculatePrice(element,search.from,search.to)

                const btn2 = document.createElement("button")
                btn2.innerText = "View Deal >"

                const h2_btn = document.createElement("div")
                h2_btn.append(h21,btn2)
                h2_btn.setAttribute("class","roundPricebox")

                // div1.append(h21)
                // div2.append(btn2)

                const div3 = document.createElement("div")
                div3.append(rdiv,h2_btn)    
                // div3.append(div1,div2)
                div3.setAttribute("class","roundDetails")

                div.append(div3)
            })
        });
    }
    else{
        console.log("1212364")
        data1.forEach((element,index)=>{
            const img1 = document.createElement("img")
            img1.setAttribute("src","https://static.tacdn.com/img2/flights/airlines/logos/100x100/Spicejet.png")
            img1.setAttribute("alt",element.company)
            img1.setAttribute("class","flightImage")
            
            const h4 = document.createElement("h3")
            h4.innerText = `${element.departure}-${element.arrival}`

            const p = document.createElement("p")
            p.innerText = `${search.from}-${search.to}, ${element.company}`

            const h4_p1 = document.createElement("div")
            h4_p1.append(h4,p)
            h4_p1.setAttribute("class","time")

            const duration = document.createElement("h5")
            duration.innerText = "2h 10m"//`${calculateDuration(element.departure,element.arrival)}`
            duration.setAttribute("class","duration")

            const h2 = document.createElement("h2")
            h2.innerText = "Rs.98745"//calculatePrice(element,search.from,search.to)

            const btn2 = document.createElement("button")
            btn2.innerText = "View Deal >"

            const h2_btn = document.createElement("div")
            h2_btn.append(h2,btn2)
            h2_btn.setAttribute("class","pricebox")

            const div2 = document.createElement("div")
            div2.append(img1,h4_p1,duration,h2_btn)
            div2.setAttribute("class","fligthDetails")

            div.append(div2)
        })
    }
    
}