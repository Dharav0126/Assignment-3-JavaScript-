function captureInputs() {
    // getting values from form
    const size = document.getElementById('pizza-size').value;
    const crust = document.getElementById('pizza-crust').value;
    const meatToppings = getSelectedToppings('meat-toppings');
    const vegToppings = getSelectedToppings('veggie-topping');
    const cheese = document.getElementById('Moz-cheese').value;
    const additionalCheese = getSelectedToppings('additional-cheese');
    const herbs = getSelectedToppings('oregano');
    // validating form
    if (size === 'Select your size' || crust === 'Select your crust' || cheese === 'Select the cheese') {
        
        alert('Please select all fields before placing the order.');
        return null;
    }

    const pizza = new Pizza(size, crust, meatToppings, vegToppings, cheese, additionalCheese, herbs); 
    return pizza;
}

// getting the topping values
function getSelectedToppings(toppingType) {
    const checkboxes = document.querySelectorAll(`input[type="checkbox"][name="${toppingType}"]:checked`);
    const toppings = [];
    checkboxes.forEach(checkbox => {
        toppings.push(checkbox.value);
    });
    return toppings;
}

// Pizza object
class Pizza {
    constructor(size, crust, meatToppings, vegToppings, cheese, additionalCheese, herbs) {
        this.size = size;
        this.crust = crust;
        this.meatToppings = meatToppings;
        this.vegToppings = vegToppings;
        this.cheese = cheese;
        this.additionalCheese = additionalCheese;
        this.herbs = herbs;
    }

   
    describePizza() {
        return `Size: ${this.size}, Crust: ${this.crust}, Meat Toppings: ${this.meatToppings.join(', ')}, Veg Toppings: ${this.vegToppings.join(', ')}, Cheese: ${this.cheese}, Additional Cheese: ${this.additionalCheese.join(', ')}, Herbs: ${this.herbs.join(', ')}`;
    }
}

// Function to handle order button click
document.getElementById('Order').addEventListener('click', function() {
    const pizza = captureInputs(); 

    if (pizza) {
        const description = pizza.describePizza(); 
        document.getElementById('description').innerText = description; 
    }
});

// displaying student info
const student = document.getElementById('student-info');
student.textContent = "Student No: 200553417 and Student Name: Dharav Harishbhai Patel"