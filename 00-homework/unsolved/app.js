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

const hideAll = function(){
    $('#updateBar').addClass('hide');
    $('#searchBar').addClass('hide');
    $('#addBar').addClass('hide');
    $('#newBar').addClass('hide');
    $('#deleteBar').addClass('hide');
}

// When you click "VIEW" on the navbar, #info is cleared of all HTML, the
// window scrolls to the top, the employeeList array is printed out to #info.
// All five of the input bars are hidden.
$('#view-link').on('click', function(){
    $('#info').empty();
    window.scrollTo(0,0);
    $("#info").append(refresh());
    hideAll();
});

$('#add-link').on('click', function(){
    $('#info').empty();
    window.scrollTo(0,0);
    $("#info").append(refresh());
    $('#updateBar').addClass('hide');
    $('#searchBar').addClass('hide');
    $('#addBar').removeClass('hide');
})

$('#submit').on('click', function(stopRefresh){
    stopRefresh.preventDefault();
    let employee = {
        name: document.getElementById('name').value,
        officeNum: parseInt(document.getElementById('officeNum').value),
        phoneNum: document.getElementById('phone').value
    };
    employeeList.unshift(employee);
    $('#info').empty();
    $("#info").append(refresh());
    console.log(employeeList);
})

$('#verify-link').on('click', function(){
    $('#info').empty();
    window.scrollTo(0,0);
    $('#updateBar').addClass('hide');
    $('#searchBar').removeClass('hide');
    $('#addBar').addClass('hide');
})

$('#searchButton').on('click', function(stopRefresh){
    stopRefresh.preventDefault();
    const name = document.getElementById('searchName').value;
    for (let i=0;i<employeeList.length;i++){
        if (name===employeeList[i].name){
            alert(`${name} is already in the list!`);
            return true;
        }
        else{
            alert(`${name} is not in the list yet!`);
            return false;
        }
    }
})

$('#update-link').on('click', function(){
    $('#info').empty();
    
    $('#newBar').removeClass('hide');
    $('#searchBar').addClass('hide');
    $('#addBar').addClass('hide');
})

$('#updateSubmit').on('click', function(event){
    event.preventDefault(); 
    let newName = $('#newName').val();
    let indx = employeeList.findIndex(e=> e.name == newName);
    employeeList[indx].officeNum = $('#newOfficeNumber').val();
    employeeList[indx].phoneNum = $('#newPhone').val();
    $('#updateBar').addClass('hide');
    $('#replaceBar').toggle('hide');
    console.log(indx);  
})

$('#delete-link').on('click', function(){
    $('#info').empty();
    window.scrollTo(0,0);
    hideAll();
    $('#deleteBar').removeClass('hide');
})

$('#deleteButton').on('click', function(event){
    event.preventDefault();
    let newName = $('#deleteSearch').val();
    let indx = employeeList.findIndex(e=> e.name === newName);
    if(confirm("Are you sure you want to proceed?")){
        employeeList.splice(indx, 1);
    }
    else{
        $('#deleteSearch').val('');
        window.scrollTo(0,0);
        hideAll();
        $('#deleteBar').removeClass('hide');
    }
})