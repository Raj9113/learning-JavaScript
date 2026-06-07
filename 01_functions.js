function sayMyName() {
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
    console.log("E")
    console.log("F")
    console.log("G")
    console.log("H")
}
// sayMyName()

function AddTwoNumber(Number1, Number2) {
    //     if (typeof Number1 === "number" && typeof Number2 === "number")
    //     if (typeof Number1 === "number" && typeof Number2 === "number") {
    //     console.log(Number1+Number2);
    // } else {
    //     console.log("It's not a number");
    // }
    // let result = Number1 + Number2
    // return result
    console.log("Hello")
    return Number1 + Number2
};

// const result = AddTwoNumber(3, 4)

// console.log("Return value:", result)
function logInUser(userName) {
    return `${userName} just looged in`
};
const loogedInUser = logInUser("Sanjeev");
// console.log(loogedInUser);
// 
// console.log(loogedInUser);
function loginUserName(username = "user") {
    if (!username) {
        // console.log("Please enter a username");
        // return "Please enter a username"
    }
    return `Welcome ${username}`
}
// console.log(loginUserName("sanjeev"));
function calculateCartPrice(val1, val2, ...num1){
    console.log(val1+val2)
    return num1
}
console.log(calculateCartPrice(500, 2000, 4000, 80000));