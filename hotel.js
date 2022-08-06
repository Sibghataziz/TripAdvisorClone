addHeading()



function addHeading(){
    const hotel = localStorage.getItem("hotel")
    // console.log(hotel)
    let data = JSON.parse(localStorage.getItem("data"))
    data = data[hotel.toLocaleLowerCase()]["Hotel"]
    console.log(data)

    //form Heading
    document.querySelector("#heading>h1").innerText = `${hotel} Hotels and Places to Stay`

    //hotels heading
    document.querySelector("#text>h2").innerText = `Popular hotels in ${hotel} right now`

    //cities hotels images
    const caroImage = document.querySelector("#Catagries")
    data.forEach((element,index) => {
        if(index<3){
            // console.log(element["image"]["image3"])
            const img = document.createElement("img")
            img.setAttribute("src",element["image"]["image3"])
            const div = document.createElement("div")
            div.append(img)

            caroImage.append(div)
        }
    });

    //list of hotels
    const hotelList = document.querySelector("#hotel")
    data.forEach((element)=>{
        //image div
        const img = document.createElement("img")
        img.setAttribute("src",element["image"]["image1"])

        const div1 = document.createElement("div")
        div1.setAttribute("class","image")
        div1.append(img)

        //heading div
        const h2 = document.createElement("h2")
        h2.innerText = element.name

        const div2_1 = document.createElement("div")
        div2_1.setAttribute("class","hotelName")
        div2_1.append(h2)

        //deatils div - div1
        const icon = document.createElement("img")
        icon.setAttribute("src","https://static.tacdn.com/img2/branding/hotels/6290_TripAdvisor_Redux2_HI.png") //element.icon

        const details_h2 = document.createElement("h2")
        // const fare = calculateFare(hotel,element)
        details_h2.innerText = "Rs.4326" // fare

        const btn = document.createElement("button")
        btn.innerText = "View Deal"
        btn.setAttribute("class","ViewDealBtn")

        const link = document.createElement("a")
        link.setAttribute("href","https://www.booking.com/searchresults.en-gb.html?group_adults=1&utm_content=los-01_bw-010_dom-in_defdate-0_spo-0_clksrc-0&checkout=2022-08-15&utm_term=hotel-1952023&redirected=1&sid=0f7c63214e008d9fee4baaba8af9d58b&show_room=195202310_328517142_1_42_0&checkin=2022-08-14&utm_source=metatripad&hlrd=with_dates&room1=A%2C&utm_medium=dmeta&group_children=0&keep_landing=1&utm_campaign=in&no_rooms=1&highlighted_hotels=1952023&aid=7344211&city=-2092511&label=metatripad-link-dmetain-hotel-1952023_xqdz-d862ae2c2ec82354163c3d9743c35d07_los-01_bw-010_tod-19_dom-in_curr-INR_gst-01_nrm-01_clkid-d462c79d-fa61-4f03-a84a-4e67c7c678c8_aud-0000_mbl-M_pd-_sc-2_defdate-0_spo-0_clksrc-0_mcid-10&source=hotel")//element.hotel_link
        link.append(btn)

        const p1 = document.createElement("p")
        p1.innerText = "✓Free cancelliation"

        const p2 = document.createElement("p")
        p2.innerText = "✓Reserve now, pay at stay"

        const d1 = document.createElement("div")
        d1.append(icon,details_h2,link,p1,p2)

        //deatils div - div2
        const p31 = document.createElement("p")
        p31.innerText = "Agoda.com"

        const p32 = document.createElement("p")
        p32.innerText = "Hotels.com"

        const p33 = document.createElement("p")
        p33.innerText = "Trip.com"

        const hr = document.createElement("hr")

        const all4 = document.createElement("h4")
        all4.innerText = "View all 14 deals from"

        const h4 = document.createElement("h4")
        h4.innerText= "Rs.4323"

        const d2 = document.createElement("div")
        d2.append(p31,h4,p32,h4,p33,h4,hr,all4,h4)

        //deatils div - div3
        const p_span1 = document.createElement("span")
        p_span1.innerText = element["rating"]["review"]

        const rating = document.createElement("p")
        rating.innerText = "★★★★☆"
        rating.append(p_span1)

        const p_span2 = document.createElement("span")
        p_span2.innerText = `#1 Best Value in ${hotel} that matches your filters`

        const filter = document.createElement("p")
        filter.append(p_span2)

        const wifi_icon = document.createElement("i")
        wifi_icon.className = "fa-solid fa-wifi"

        const wifi = document.createElement("h5")
        wifi.innerText = "Free Wifi"
        wifi.append(wifi_icon)

        const parking_icon = document.createElement("i")
        parking_icon.className = "fa-solid fa-square-parking"

        const parking = document.createElement("h5")
        parking.innerText = "Free Parking"
        parking.append(parking_icon)

        const safety_icon = document.createElement("i")
        safety_icon.className = "fa-solid fa-hands-clapping"

        const safety = document.createElement("h5")
        safety.innerText = "Taking safety measures"
        safety.append(safety_icon)

        const d3 = document.createElement("div")
        d3.append(rating,filter,wifi,parking,safety)
        
        //details div
        const div2_2 = document.createElement("div")
        div2_2.setAttribute("class","otherInfo")
        div2_2.append(d1,d2,d3)

        //
        const div2 = document.createElement("div")
        div2.setAttribute("class","details")
        div2.append(div2_1,div2_2)

        const div = document.createElement("div")
        div.setAttribute("class","hotelDeal")
        div.append(div1,div2)

        hotelList.append(div)
    });
}