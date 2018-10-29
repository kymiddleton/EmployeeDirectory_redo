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

let command = '';
// const outputDiv = $('#content');

const runSubmit = function (event) {
    event.preventDefault();
    // outputDiv.empty();
    console.log('does this work');
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
        // outputDiv.empty();
        console.log('----empty----');
        let htmlStr = '<div class="print"><p>Employee NOT Found </p></div>';
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name.toLowerCase() === $('#input').val().toLowerCase()) {
                htmlStr = '<div class="print"><p> Employee Found </p></div>';
            }
        }
        render(htmlStr);

    } else if (command === 'lookup') {
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
        // outputDiv.empty();
        // console.log('contains');
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
    }
};





// case "contains":

//     let inputValue = $('#input').val().toLowerCase();

//     employeeList.forEach(e => {
//         if (e.name.toLowerCase().includes(inputValue)) {
//             html += `<div class="print"><p>Name: ${e.name}</p>`;
//             html += `<p>Office Number: ${e.officeNum}</p>`;
//             html += `<p>Phone Number: ${e.phoneNum}</p></div>`;
//         }
//     });
//     render(html);
//     break;

// case "update": //Very close to working. Out of time to make changes to input fields. 
//     outputDiv.empty();
//     index = state.employeeList.findIndex(function (element) {
//         return element.name.toLowerCase() === $('#input').val().toLowerCase();
//     });
//     updateValue = $('#phone').val();
//     switch ($('#office').val().toLowerCase()) {
//         case "name":
//             employeeList[index].name = updateValue;
//             break;
//         case "office":
//             employeeList[index].officeNum = updateValue;
//             break;
//         case "phone":
//             employeeList[index].phoneNum = updateValue;
//             break;
//         default:
//             htmlStr += `<div class="print" ><p>Invalid Command</p></div>`;
//     };
//     htmlStr += `<div class="space"><p>Name: ${e.name}</p>`; //"space" refers to CSS .space 
//     htmlStr += `<p>Office Number: ${e.officeNum}</p>`;
//     htmlStr += `<p>Phone Number: ${e.phoneNum}</p></div>`;
//     render(htmlStr);
//     break;

// case "add":
//     outputDiv.empty();
//     console.log('add');
//     const name = $('#input').val();
//     const officeNum = $('#office').val();
//     const phoneNum = $('#phone').val();

//     employeeList.push({ name, officeNum, phoneNum });
//     employeeList.forEach(e => {
//         htmlStr += `<div class="space"><p>Name: ${e.name}</p>`; //"space" refers to CSS .space 
//         htmlStr += `<p>Office Number: ${e.officeNum}</p>`;
//         htmlStr += `<p>Phone Number: ${e.phoneNum}</p></div>`;
//     });
//     render(htmlStr);
//     break;

// case "delete":
//     outputDiv.empty();
//     index = state.employeeList.findIndex(function (element) {
//         return element.name.toLowerCase() === $('#input').val().toLowerCase();
//     });
//     if (index > -1) {
//         employeeList.splice(index, 1);
//         employeeList.forEach(e => {
//             htmlStr += `<div class="space"><p>Name: ${e.name}</p>`; //"space" refers to CSS .space 
//             htmlStr += `<p>Office Number: ${e.officeNum}</p>`;
//             htmlStr += `<p>Phone Number: ${e.phoneNum}</p></div>`;
//         });
//     } else { outputDiv.append("Employee NOT Found"); }
//     render(htmlStr);
//     break;

//         case "phone":
//             outputDiv.empty();
//             let matchPhone = false;
//             employeeList.forEach(e => {
//                 if (e.name.toLowerCase() === $('#input').val().toLowerCase()) {
//                     htmlStr += `<div class="space"><p>Phone Number: ${e.phoneNum}</p></div>`;
//                     matchPhone = true;
//                 }
//             });
//             if (matchPhone === false) {
//                 htmlStr = '<p>Employee Not Found</p>';
//             }
//             render(htmlStr);
//             break;
//     }
// }

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
    runSubmit(event);
    hidePrint();
    removeFields();
    addInput();
    showForm();
}
const setLookup = function () {
    command = 'lookup';
    runSubmit(event);
    hidePrint();
    addInput();
    removeFields();
    showForm();
}
const setContains = function () {
    // outputDiv.empty();
    hidePrint();
    addInput();
    removeFields();
    showForm()
    runSubmit(event);
    command = 'contains';
}
const setUpdate = function () {
    // outputDiv.empty();
    hidePrint();
    addInput();
    removeFields();
    showForm()
    runSubmit(event);
    command = 'update';
}
const setAdd = function () {
    // outputDiv.empty();
    hidePrint();
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
    removeFields();
    hideInput();
    hideForm();
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