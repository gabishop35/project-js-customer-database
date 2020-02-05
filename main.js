// create div for each customer and give same class for css purposes

// 12 customers
// all styled the same
// 4 per row
// *********************************************************

// const name = document.querySelector('.name')
// const email = document.querySelector('.email')
// const address = document.querySelector('.location')
// const dob = document.querySelector('.dob')
// const dateRegistered = document.querySelector('.registered')
// const image = document.querySelector('.picture')

const row = document.querySelector(".row")

for(let customer of customers) {

    let box = document.createElement("div")
    box.classList.add("cust")
    row.appendChild(box)

    let image = document.createElement("img")
    box.appendChild(image)
    image.src = customer.picture.large

    let name = document.createElement("p")
    name.classList.add("name")
    name.innerHTML = capitalizeFirstLetter(customer.name.first) + " " + capitalizeFirstLetter(customer.name.last)
    box.appendChild(name)

    let email = document.createElement("p")
    email.classList.add("email")
    email.innerHTML = customer.email
    box.appendChild(email)

    let street = document.createElement("p")
    street.classList.add("location")
    street.innerHTML =customer.location.street
    box.appendChild(street)

    let address = document.createElement("p")
    address.classList.add("location")
    address.innerHTML = customer.location.city + ", " + nameToAbbr(customer.location.state) + " " + customer.location.postcode
    box.appendChild(address)

    let dob = document.createElement("p")
    dob.classList.add("dob")
    dob.innerHTML = `DOB: ${moment(customer.dob).format('MMM Do, YYYY')}`
    box.appendChild(dob)

    let dateRegistered = document.createElement("p")
    dateRegistered.classList.add("registered")
    dateRegistered.innerHTML = `Customer Since: ${moment(customer.registered).format('MMM Do, YYYY')}`
    box.appendChild(dateRegistered)

}





// function createCustomerInfo (customers) {
//   const customerListItem = document.createElement('li')
//   li.textContent = name
//   return li


//     return listItem
// }

// const ul = document.createElement('ul')
// for (const li of customerListItem) {
//   ul.appendChild(li)
// }

// // function showCustomers () {

// // }

// const customerNames = customers.map(function (customer) {
//   return customer.name.first[0].topUpperCase() +
//     customer.name.first.slice(1)
//   ' ' +
//     customer.name.last[0].toUpperCase() +
//     customer.name.last.slice(1)
// })

function capitalizeFirstLetter (string) {
  return string[0].toUpperCase() + string.slice(1)

  const customerNames = customers.map(function (customer) {
    return capitalizeFirstLetter(customer.name.first) +
        ' ' +
        capitalizeFirstLetter(customer.name.last)
  })
}


function capitalizeStreetName (string) {
    return string[5].toUpperCase() + string.splice(1)

    const customerStreet = customers.map(function (customer) {
        return capitalizeStreetName(customer.location.street)
    })
}

function nameToAbbr (stateName) {
    const idx = usStates.findIndex(function (state) {
      return state.name === stateName.toUpperCase()
    })
  
    if (idx === -1) {
      return null
    }
  
    return usStates[idx].abbreviation
  }