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
    $('#updateBar').addClass('hide');
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
    for(let i=0;i<employeeList.length;i++){
        let employee = '<div class="empInfo"><p class="name">';
        employee += employeeList[i].name;
        employee +='</p><p>';
        employee += employeeList[i].officeNum;
        employee +='</p><p>';
        employee += employeeList[i].phoneNum;
        employee += '</p></div>';
        $("#info").append(employee);
    }   console.log(employeeList);
})

$('#verify-link').on('click', function(){
    $('#info').empty();
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
    const name = document.getElementById('updateSearch').value;
    for (let i=0;i<employeeList.length;i++){

    }
    $('#updateBar').removeClass('hide');
    $('#searchBar').addClass('hide');
    $('#addBar').addClass('hide');
})
