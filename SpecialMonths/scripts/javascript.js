function displayHolidays(){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let m in months){
        let monthh = months[m]
        console.log(monthh)

        switch(monthh){
            case "January":
                document.getElementById("specialDates").innerHTML += `<div id="holidaMonthy">
                <h1>January</h1>
                <br>`;
                let JanHolidays = ["New Years Day", "Martin Luther King Day"]
                for (h in JanHolidays){
                    let jholiday = JanHolidays[h]
                    document.getElementById("specialDates").innerHTML += `<p>${jholiday}</p>`;


                }
                document.getElementById("specialDates").innerHTML += `</div>`
                break


            case "February":
                document.getElementById("specialDates").innerHTML += `<div id="holidaMonthy">
                <h1>February</h1>
                <br>`;
                let FebHolidays = ["Presidents Day", "Valentine Day"];
                for (h in FebHolidays){
                    let fholiday = FebHolidays[h]
                    document.getElementById("specialDates").innerHTML += `<p>${fholiday}</p>`;


                }
                document.getElementById("specialDates").innerHTML += `</div>`
                break
            
            case "March":
                document.getElementById("specialDates").innerHTML += `<div id="holidaMonthy">
                <h1>March</h1>
                <br>`;
                let MarHolidays = ["Womens History Month", "St. Patrick's Day"];
                for (h in MarHolidays){
                    let mholiday = MarHolidays[h]
                    document.getElementById("specialDates").innerHTML += `<p>${mholiday}</p>`;


                }
                document.getElementById("specialDates").innerHTML += `</div>`
                break

            case "April":
                document.getElementById("specialDates").innerHTML += `<div id="holidaMonthy">
                <h1>April</h1>
                <br>`;
                let AprlHolidays = ["April Fool's Day", "Easter","Earth Day"];
                
                for (h in AprlHolidays){
                    let aholiday = AprlHolidays[h]
                    document.getElementById("specialDates").innerHTML += `<p>${aholiday}</p>`;


                }
                document.getElementById("specialDates").innerHTML += `</div>`
                break



            case "May":
                document.getElementById("specialDates").innerHTML += `<div id="holidaMonthy">
                <h1>May</h1>
                <br>`;
                let MayHolidays = ["Cinco de Mayo", "Mother's Day","Memorial Day"];
                for (h in MayHolidays){
                    let mmholiday = MayHolidays[h]
                    
                    document.getElementById("specialDates").innerHTML += `<p>${mmholiday}</p>`;


                }
                document.getElementById("specialDates").innerHTML += `</div>`
                break



            case "June":
                document.getElementById("specialDates").innerHTML += '<div id="holidaMonthy">'+
                '<h1>June</h1>'+
                '<br>';
                let junHolidays = ["Presidents Day", "Valentine Day"];
                for (h in junHolidays){
                    let jjholiday = junHolidays[h]
                    document.getElementById("specialDates").innerHTML += `<p>${jjholiday}</p>`;


                }
                document.getElementById("specialDates").innerHTML += `</div>`
                break



            case "July":
                document.getElementById("specialDates").innerHTML += `<div id="holidaMonthy">
                <h1>July</h1>
                <br>`;
                let julyHolidays = ["Father's Day", "Flag Day"];
                for (h in julyHolidays){
                    let jjjholiday = julyHolidays[h]
                    document.getElementById("specialDates").innerHTML += `<p>${jjjholiday}</p>`;


                }
                document.getElementById("specialDates").innerHTML += `</div>`
                break

                case "August":
                document.getElementById("specialDates").innerHTML += `<div id="holidaMonthy">
                <h1>August</h1>
                <br>`;
                let augHolidays = ["National Aviation Day", "Womans Equality Day"];
                for (h in augHolidays){
                    let agholiday = augHolidays[h]
                    document.getElementById("specialDates").innerHTML += `<p>${agholiday}</p>`;


                }
                document.getElementById("specialDates").innerHTML += `</div>`
                break

                case "September":
                    document.getElementById("specialDates").innerHTML += `<div id="holidaMonthy">
                    <h1>September</h1>
                    <br>`;
                    let sepHolidays = ["labor day", "911"];
                    for (h in sepHolidays){
                        let sholiday = sepHolidays[h]
                        document.getElementById("specialDates").innerHTML += `<p>${sholiday}</p>`;
    
    
                    }
                    document.getElementById("specialDates").innerHTML += `</div>`
                    break


                case "October":
                    document.getElementById("specialDates").innerHTML += `<div id="holidaMonthy">
                    <h1>October</h1>
                    <br>`;
                    let octHolidays = ["Columbus Day", "Halloween"];
                    for (h in octHolidays){
                        let oholiday = octHolidays[h]
                        document.getElementById("specialDates").innerHTML += `<p>${oholiday}</p>`;
    
    
                    }
                    document.getElementById("specialDates").innerHTML += `</div>`
                    break


                case "November":
                    document.getElementById("specialDates").innerHTML += `<div id="holidaMonthy">
                    <h1>November</h1>
                    <br>`;
                    let novHolidays = ["Veterans Day", "Thanksgiving Day"];
                    for (h in novHolidays){
                        let nholiday = novHolidays[h]
                        document.getElementById("specialDates").innerHTML += `<p>${nholiday}</p>`;
    
    
                    }
                    document.getElementById("specialDates").innerHTML += `</div>`
                    break


                    case "December":
                        document.getElementById("specialDates").innerHTML += `<div id="holidaMonthy">
                        <h1>December</h1>
                        <br>`;
                        let DecHolidays = ["Christmas", "New Years eve", "Kwanzaa"];
                        for (h in DecHolidays){
                            let dholiday = DecHolidays[h]
                            document.getElementById("specialDates").innerHTML += `<p>${dholiday}</p>`;
        
        
                        }
                        document.getElementById("specialDates").innerHTML += `</div>`
                        break
                
                
        }

    }
}