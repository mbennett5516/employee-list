// Setting a const info for a selector variable since I'll need to reference
// it many times
const info = $('#info');

// Refresh function runs through employeeList array and 
// returns a single HTML string including each object.key in the array
// use  as an argument to $(x).append(refresh()) where x is the name
// of the target class
const refresh = function () {
    let employee = '';
    for (let i = 0; i < employeeList.length; i++) {
        employee += '<div class="empInfo"><p class="name">';
        employee += employeeList[i].name;
        employee += '</p><p class="officeNum">';
        employee += employeeList[i].officeNum;
        employee += '</p><p class="phone">';
        employee += employeeList[i].phoneNum;
        employee += '</p></div>';
    }
    return employee;
}

// hideAll is a shortcut function I wrote to hide all of the
// input bars, setting them all to display-none. This way I can 
// only write 2 lines in each on('click') function to get the correct
// inputs to show up: hideAll(); and removeClass('hide') for the appropriate
// bar of inputs.
const hideAll = function () {
    $('#searchBar').addClass('hide');
    $('#addBar').addClass('hide');
    $('#newBar').addClass('hide');
    $('#deleteBar').addClass('hide');
}

// When you click "VIEW" on the navbar, #info is cleared of all HTML, the
// window scrolls to the top of the page, the employeeList array is refreshed
//  and printed out to #info. All of the input bars are hidden.
$('#view-link').on('click', function () {
    info.empty();
    window.scrollTo(0, 0);
    info.append(refresh());
    hideAll();
});

// When you click "ADD" on the navbar, #info is cleared of all HTML, the
// window scrolls to the top of the page, the employeeList array is refreshed
// and printed out to #info. All the input bars are hidden, then addBar is revealed.
$('#add-link').on('click', function () {
    info.empty();
    window.scrollTo(0, 0);
    info.append(refresh());
    hideAll();
    $('#addBar').removeClass('hide');
})

// Stops the page from automatically refreshing when submit is pressed,
// builds a new employee object from the information in the inputs on the
// addBar and pushes it into the first spot in the employeeList array using
// 'unshift'. Emptys the #info section and refreshes it with the new employee
// appearing at the top.
$('#submit').on('click', function (event) {
    event.preventDefault();
    let employee = {
        name: $('#name').val(),
        officeNum: parseInt($('#officeNum').val()),
        phoneNum: $('#phone').val(),
    }
        employeeList.unshift(employee);
        info.empty();
        info.append(refresh());
})

// When the 'VERIFY' button is pressed on the navBar
// Deletes the HTML from #info to give a blank page, scroll to the top so make
// sure the user sees the searchBar. Hide all other bars.
$('#verify-link').on('click', function () {
    info.empty();
    window.scrollTo(0, 0);
    hideAll();
    $('#searchBar').removeClass('hide');
})

// When the #searchButton is pressed, stop the page from refreshing, store the 
// string from the input field '#searchName' in the new const variable 'name'.
// run through the array checking each element for if its .name value === name.
// If it does, alert a message confirming it does. If not, alert it doesn't.
$('#searchButton').on('click', function (event) {
    event.preventDefault();
    let isThere = false;
    const name = $('#searchName').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (name === employeeList[i].name) {
            isThere = true;
        }
    }
    if (isThere) {
        alert(`${name} is already in the list!`);
    }
    else {
        alert(`${name} is not in the list yet!`)
    }
})

// When 'UPDATE' is clicked on the navBar, empty and refresh the #info section and hide all
// of the bars except newBar and scroll to the top of the window;
$('#update-link').on('click', function () {
    window.scrollTo(0, 0);
    info.empty();
    info.append(refresh());
    hideAll();
    $('#newBar').removeClass('hide');
})

// When the submit button on the update bar is pressed, stop the page from refreshing
// take the value from the #newname input and search employeeList.name keys for a 
// value that matches the input. Gets the index of the object that has the same name value
// and replaces Office Number and Phone Number of that object with what is in #newOfficeNumber
// and #newPhone input fields, then clears #info and displays a refreshed list.
$('#updateSubmit').on('click', function (event) {
    event.preventDefault();
    let newName = $('#newName').val();
    let i = employeeList.findIndex(e => e.name === newName);
    employeeList[i].officeNum = $('#newOfficeNumber').val();
    employeeList[i].phoneNum = $('#newPhone').val();
    info.empty();
    info.append(refresh());
})

// When 'DELETE' is clicked on the navBar, clear and refresh #info, scroll to the top of the 
// page, hide all the bars, except the #deleteBar.
$('#delete-link').on('click', function () {
    info.empty();
    info.append(refresh());
    window.scrollTo(0, 0);
    hideAll();
    $('#deleteBar').removeClass('hide');
})

// When Submit is pressed on the deleteBar, stop the page from refreshing, set newName =
// the value of the #deleteSearch input. Find the index of the employee object whose name
// === newName. If they're not in the list, alert the user they're not and reset the delete
// page. If they are, confirm with the user that they're about to delete all of newName's info.
// if they confirm, remove them from the employeeList and refresh the #info section. If they cancel,
// reset the delete page.
$('#deleteButton').on('click', function (event) {
    event.preventDefault();
    let newName = $('#deleteSearch').val();
    let i = employeeList.findIndex(e => e.name === newName);
    if (i === -1) {
        alert(`${newName} is not in the database. Try again.`);
        $('#deleteSearch').val('');
        window.scrollTo(0, 0);
        hideAll();
        $('#deleteBar').removeClass('hide');
    }
    else if (confirm(`Are you sure you want to proceed? All of ${newName}'s info will be permenantly deleted.`)) {
        employeeList.splice(i, 1);
        info.empty();
        info.append(refresh());
    }
    else {
        $('#deleteSearch').val('');
        window.scrollTo(0, 0);
        hideAll();
        $('#deleteBar').removeClass('hide');
    }
})