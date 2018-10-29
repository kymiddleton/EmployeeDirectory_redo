const employeeList = [
    {
        name: 'Jan',
        officeNum: 1,
        phoneNum: '(222) 222-2222'
    },
    {
        name: 'Juan',
        officeNum: 304,
        phoneNum: '(489) 789-8789'
    },
    {
        name: 'Margie',
        officeNum: 789,
        phoneNum: '(789) 789-7897'
    },
    {
        name: 'Sara',
        officeNum: 32,
        phoneNum: '(222) 789-4654'
    },
    {
        name: 'Tyrell',
        officeNum: 3,
        phoneNum: '(566) 621-0452'
    },
    {
        name: 'Tasha',
        officeNum: 213,
        phoneNum: '(789) 766-5675'
    },
    {
        name: 'Ty',
        officeNum: 211,
        phoneNum: '(789) 766-7865'
    },
    {
        name: 'Sarah',
        officeNum: 345,
        phoneNum: '(222) 789-5231'
    }
];

//Functions that iterate through the arrays
const findEmployee = function (startIndex, employeeName) {
    for (i = startIndex; i < employeeList.length; i++) {
        if (employeeList[i].name.toLowerCase().includes(employeeName.toLowerCase())) {
            return i;
        }
    }
    return -1;
}

const printEmployee = function (i) {
    employees.append(`<div>${"Name: " + employeeList[i].name + " / Office: " + employeeList[i].officeNum + " / Phone: " + employeeList[i].phoneNum}</div>`);

    return true;
}

let command = '';
const outputDiv = $('#content');

const runSubmit = function (event) {
    event.preventDefault();
    outputDiv.empty();
    console.log('inside', command);
    if (command === 'print') {
        let htmlStr = '';
        for (let i = 0; i < employeeList.length; i++) {
            htmlStr += `<div class="print"><p>Name: ${employeeList[i].name} </p>`;
            htmlStr += `<p> Office Number: ${employeeList[i].officeNum} </p>`;
            htmlStr += `<p> Phone Number: ${employeeList[i].phoneNum} </p>`;
            htmlStr += `<p> ----- </p></div>`;
        }
        render(htmlStr);

    } else if (command === 'verify') {
        outputDiv.empty();
        console.log('----empty----');
        let htmlStr = '<div class="print"><p>Employee NOT Found </p></div>';
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name.toLowerCase() === $('#input').val().toLowerCase()) {
                htmlStr = '<div class="print"><p> Employee Found </p></div>';
            }
        }
        render(htmlStr);

    } else if (command === 'lookup') {
        outputDiv.empty();
        htmlStr = '';
        let lookup = false;
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name.toLowerCase() === $('#input').val().toLowerCase()) {
                htmlStr += `<div class="print"><p> Name: ${employeeList[i].name} </p>`;
                htmlStr += `<p> Office Number: ${employeeList[i].officeNum} </p>`;
                htmlStr += `<p> Phone Number: ${employeeList[i].phoneNum} </p></div>`;
                lookup = true;
            }
        }
        if (lookup === false) {
            htmlStr += '<p>Employee Not Found</p>';
        }
        render(htmlStr);

    } else if (command === 'contains') {
        outputDiv.empty();
        console.log('contains');
        let htmlStr = '';
        let containsEmployee = false
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name.toLowerCase().includes($('#input').val().toLowerCase())) {
                htmlStr += `<div class="print"><p> Name: ${employeeList[i].name} </p>`;
                htmlStr += `<p> Office Number: ${employeeList[i].officeNum} </p>`;
                htmlStr += `<p> Phone Number: ${employeeList[i].phoneNum} </p>`;
                htmlStr += '<p> ----- </p></div>';
                containsEmployee = true;
            }
        }
        if (containsEmployee === false) {
            htmlStr += '<p> Match Not Found </p>';
        }
        render(htmlStr);

    } else if (command === 'update') {
        let htmlStr = '';
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name.toLowerCase() === $('#input').val().toLowerCase()) {
                employeeList[i].officeNum = $('#office').val();
                employeeList[i].phoneNum = $('#phone').val();
                htmlStr += `<div class="print"><p> Name: ${employeeList[i].name} </p>`;
                htmlStr += `<p> Office: ${employeeList[i].officeNum} </p>`;
                htmlStr += `<p> Phone: ${employeeList[i].phoneNum} </p></div>`;
            }
        }
        render(htmlStr);

    } else if (command === 'add') {
        let htmlStr = '';
        const newEmployee = {
            name: $('#input').val(),
            officeNum: $('#office').val(),
            phoneNum: $('#phone').val()
        }

        employeeList.push(newEmployee);

        for (let i = 0; i < employeeList.length; i++) {
            htmlStr += `<div class="print"><p> Name: ${employeeList[i].name} </p>`;
            htmlStr += `<p> Office: ${employeeList[i].officeNum} </p>`;
            htmlStr += `<p> Phone: ${employeeList[i].phoneNum} </p>`;
            htmlStr += `<p> ----- </p></div>`;
        }
        render(htmlStr);

    } else if (command === 'delete') {
        let htmlStr = '';
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name.toLowerCase() === $('#input').val().toLowerCase()) {
                employeeList.splice(i, 1);
            }
        }
        for (let i = 0; i < employeeList.length; i++) {
            htmlStr += `<div class="print"><p> Name: ${employeeList[i].name} </p>`;
            htmlStr += `<p> Office: ${employeeList[i].officeNum} </p>`;
            htmlStr += `<p> Phone: ${employeeList[i].phoneNum} </p>`;
            htmlStr += `<p> ----- </p></div>`;
        }
        render(htmlStr);

    } else if (command === 'phone') {
        let htmlStr = '';
        let matchPhone = false;
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name.toLowerCase() === $('#input').val().toLowerCase()) {
                htmlStr += `<div class="print"><p> Phone Number: ${employeeList[i].phoneNum}</p></div>`;
                matchPhone = true
            }
        }
        if (matchPhone === false) {
            htmlStr = '<p>Employee Not Found</p>';
        }
        render(htmlStr);
    }
};

//DOM functions
const render = function (htmlStr) {
    $('#content').html(htmlStr);
}
const hideForm = function () {
    $('form').removeClass('show')
}
const showForm = function () {
    $('form').addClass('show');
}
const addInput = function () {
    $('#input, #submit').addClass('show');
}
const hideInput = function () {
    $('#input, #submit').removeClass('show');
}
const addFields = function () {
    $('#office, #phone').addClass('show');
}
const removeFields = function () {
    $('#office, #phone').removeClass('show');
}
const hidePrint = function () {
    $('.print').addClass('hide');
}
const removeOffice = function () {
    $('#office').removeClass('show');
}
const removeInput = function () {
    $('#input').removeClass('show');
}

// const emptyInput = function () {
//     $('#input').empty('text');
// }


/*DO NOT DELETE */ //Call back Functions power event listeners
const setPrint = function () {
    command = 'print';
    runSubmit(event);
    removeFields();
    hideInput();
    hideForm();
}
const setVerify = function () {
    command = 'verify';
    // runSubmit(event);
    hidePrint();
    addInput();
    removeFields();
    showForm();
}
const setLookup = function () {
    // outputDiv.empty();
    command = 'lookup';
    // runSubmit(event);
    hidePrint();
    addInput();
    removeFields();
    showForm();
}
const setContains = function () {
    // outputDiv.empty();
    command = 'contains';
    // runSubmit(event);
    hidePrint();
    addInput();
    removeFields();
    showForm()
}
const setUpdate = function () {
    // outputDiv.empty();
    command = 'update';
    // runSubmit(event);
    hidePrint();
    addInput();
    addFields();
    showForm()
}
const setAdd = function () {
    // outputDiv.empty();
    // hidePrint();
    addInput();
    addFields();
    showForm()
    runSubmit(event);
    command = 'add';
}
const setDelete = function () {
    // outputDiv.empty();
    hidePrint();
    addInput();
    removeFields();
    showForm()
    runSubmit(event)
    command = 'delete';
}
const setPhone = function () {
    // outputDiv.empty();
    showForm();
    hidePrint();
    removeOffice();
    removeInput();
    addInput();
    runSubmit(event)
    command = 'phone';
}

//Event Listener Callback Functions
$('#print').on('click', setPrint);
$('#verify').on('click', setVerify);
$('#lookup').on('click', setLookup);
$('#contains').on('click', setContains);
$('#update').on('click', setUpdate);
$('#add').on('click', setAdd);
$('#delete').on('click', setDelete);
$('#phone').on('click', setPhone);
$('#submit').on('click', runSubmit);                