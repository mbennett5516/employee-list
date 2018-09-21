$('#view-link').on('click', function(){
    $('#info').empty();
    for(let i=0;i<employeeList.length;i++){
        let employee = '<div class="empInfo"><p class="name">';
        employee += employeeList[i].name;
        employee +='</p><p class="officeNum">';
        employee += employeeList[i].officeNum;
        employee +='</p><p class="phone">';
        employee += employeeList[i].phoneNum;
        employee += '</p></div>';
        $("#info").append(employee);
    }
    $('#searchBar').addClass('hide');
    $('#addBar').addClass('hide');
})

$('#add-link').on('click', function(){
    $('#info').empty();
    for(let i=0;i<employeeList.length;i++){
        let employee = '<div class="empInfo"><p class="name">';
        employee += employeeList[i].name;
        employee +='</p><p>';
        employee += employeeList[i].officeNum;
        employee +='</p><p>';
        employee += employeeList[i].phoneNum;
        employee += '</p></div>';
        $("#info").append(employee);
    }
    $('#searchBar').addClass('hide');
    $('#addBar').removeClass('hide');
})

$('#submit').on('click', function(stopRefresh){
    stopRefresh.preventDefault();
    let employee = '<div class="empInfo"><p class="name">';
    employee += document.getElementById('name').value;
    employee += '</p><p class="officeNum">';
    employee += document.getElementById('officeNum').value;
    employee += '</p><p class="phone">';
    employee += document.getElementById('phone').value;
    employee += '</p></div>'
    $("#info").prepend(employee);
    console.log(employee);
})

$('#verify-link').on('click', function(){

    $('#searchBar').removeClass('hide');
    $('#addBar').addClass('hide');
})

$('update-link').on('click', function(){

    $('#searchBar').addClass('hide');
    $('#addBar').addClass('hide');
})
