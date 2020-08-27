const form = document.flightInfo
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const checkedDiet = []
    for(let i=0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            checkedDiet.push(form.diet[i].value)
        }
    }
    alert(
        "First Name: " + form.firstName.value + "\n" +
        "Last Name: " + form.lastName.value + "\n" +
        "Age: " + form.age.value + "\n" +
        "Gender: " + form.gender.value + "\n" +
        "Your Destination: " + form.city.value + "\n" +
        "Your Dietary Restrictions: " + checkedDiet.join(", ")
    )
})