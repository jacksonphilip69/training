fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v2/all');
    const myJson = await response.json(); 
    console.log(myJson);
    let datax = [...myJson];
    localStorage['jsonData'] = JSON.stringify(myJson);

    const pagination= document.getElementById("pagination");
    let current_page = 1;
    let coloumn = 9;

   function Display_elements(myJson, listbox, coloumn, page){
    listbox.innerHTML="";
    page--; 
    let start = page * coloumn;
    let end = start + coloumn;
    
    
    for(let i= start;i<end;i++){
        console.log("my",myJson[i]);
        const div = document.createElement('div');
        div.classList.add('country-item');
        div.style.backgroundColor="rgb(100, 115, 255)";
        div.style.width="250px";
        div.style.height="400px";  

        const img = document.createElement('img');
        img.classList.add('flag');
        img.setAttribute('src', myJson[i].flag);
        img.setAttribute('alt', "flag-img");
        img.style.width="230px";
        img.style.height="140px";
        img.style.paddingLeft="10px";
        img.style.paddingTop="10px";

        

        const h3 = document.createElement('h3');
        h3.textContent = myJson[i].name;

        var li_list = ["Population", "Region", "Capital"];
        var li_values = [myJson[i].population, myJson[i].region, myJson[i].capital];

        const ul = document.createElement('ul');

        for (var j = 0; j < li_list.length; j++) {
            const li = document.createElement('li');
            li.textContent = li_list[j] + ": " + li_values[j];
            ul.appendChild(li);
        }


        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(ul);

        div.addEventListener('click', function (e) {
            displayCountryDetails(e, myJson);
        })

        var c_box = document.getElementById('list');
        c_box.appendChild(div);
    }
    
    
    
    console.log(c_box);
    
    }

    
    function SetupPagination(myJson, paginationbox, coloumn){
        let pageCount = Math.ceil(myJson.length/coloumn                                                                                                                                         );
        console.log(pageCount)
        for(let i=1;i<pageCount+1;i++){
        let btn = PaginationButton(i, myJson);
        paginationbox.append(btn);
        btn.style.height="30px";
        btn.style.width="30px";
        btn.style.backgroundColor="rgb(100, 115, 255)";
    
        }
        
        }

        function PaginationButton(page, myJson ){
            let button = document.createElement("button");
            button.innerText = page;
            
            
            
            button.addEventListener("click", function(){
            current_page = page;
            Display_elements(datax, list, coloumn, current_page);
            
            
            
            })
            return button;
            }

            Display_elements(datax, list, coloumn, current_page)
            SetupPagination(datax,pagination,coloumn)

}

fetchCountries();

const search = document.forms['input-form'].querySelector('input');
search.addEventListener('keyup', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const countries = document.getElementsByTagName('h3');

    document.getElementById('regions').selectedIndex = 0;

    Array.from(countries).forEach(function (country) {
        if (country.innerText.toLowerCase().indexOf(searchTerm) != -1) {
            country.parentElement.style.display = "block";
        } else {
            country.parentElement.style.display = "none";
        }
    })
})
