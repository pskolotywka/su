let checkedCreditId = '';
document.addEventListener('click', (event) => catchClick(event));
document.addEventListener('change', (event) => catchChange(event));

function catchClick(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('client-card__bookmark')) {
        catchClickBookmarkClientCard(clickedElement);
    };
    if (clickedElement.classList.contains('actions__bookmark')) {
        catchClickBookmarkActions(clickedElement);
    };

    switch (clickedElement.dataset.click) {
        case 'call':
            showScript(clickedElement);
            break;
        case 'tooltip':
            toggleTooltip();
            break;
        case 'checkbox':
            catchClickCheckbox(event);
            break;
        case 'credit-cash':
            showConditionsCreditCash(event);
            break;
        case 'own_calc_credit_input':
            showOwnCalcCredit();
            break;
        case 'calculate_credit':
            calculateCredit();
            break;
        case 'calculate_credit_1':
            calculateCredit1();
            break;
        case 'make_meeting_start':
            make_meeting_start();
            break;
        case 'make_meeting_final':
            showModal();
            break;
        case 'show_adress':
            showAdress();
            break;
        case 'set_time_and_date':
            showTimeAndDate();
            break;
        case 'show_end_task_button':
            showEndTaskButton();
            break;
        case 'delivery_mail':
            showDeliveryMailButton();
            break;
        case 'show_enter_adress':
            showEnterAdress();
            break;
        case 'work_adress':
            hideAdressElements();
            break;
        case 'reload':
            window.location.reload();
            break;
        case 'modal_cancel':
            hideModal();
            break;
        case 'choose_next_step':
            chooseNextStep(event);
            break;
    };
};

function catchClickBookmarkClientCard(clickedElement) {
    switch (clickedElement.innerText) {
        case 'Информация по заданию':
            toggleClientCardSection('.client-card__task-info', clickedElement);
            break;
        case 'История по заданию':
            toggleClientCardSection('.client-card__history', clickedElement);
            break;
        case 'Детали кредита':
            toggleClientCardSection('.client-card__credit-details', clickedElement);
            break;
    };
};

function catchClickBookmarkActions(clickedElement) {
    switch (clickedElement.innerText) {
        case 'Представление':
            toggleActionsSection('.actions__presentation', clickedElement);
            break;
        case 'Согласование условий':
            toggleActionsSection('.actions__conditions', clickedElement);
            break;
        case 'Недозвон':
            toggleActionsSection('.actions__no-call', clickedElement);
            break;
        case 'Отказ':
            toggleActionsSection('.actions__refusal', clickedElement);
            break;
        case 'Перезвон':
            toggleActionsSection('.actions__recall', clickedElement);
            break;
        case 'Ошибка телефонии':
            toggleActionsSection('.actions__error', clickedElement);
            break;
    };
};

function toggleClientCardSection(sectionClassName, clickedElement) {
    [...document.querySelectorAll('.client-card__bookmark')].forEach((bookmark) => bookmark.classList.remove('client-card__bookmark_active'));
    clickedElement.classList.add('client-card__bookmark_active');

    hideElements('.client-card__section');
    const section = document.querySelector(sectionClassName);
    section.classList.remove('hidden');
};

function showScript(clickedElement) {
    clickedElement.classList.add('hidden');
    showElements('.history__work-status');
    showElements('.predstavlenie__table');
    insertNextStepDialog('step_1');
    showElements('#more_actions');
};



function catchChange(event) {
    const changedElement = event.target;
    if (changedElement.classList.contains('conditions__select-type-credit')) {
        showCredit(changedElement);
    };
};

function showCredit(changedElement) {
    hideElements('.conditions__credit');
    hideElements('.conditions__step');
    switch (changedElement.value) {
        case 'Кредитная карта':
            showElements('#credit_1');
            showElements('#make_meeting_start');
            break;
        case 'Кредит наличными':
            showElements('.credit-cash');
            break;
    };
};

function showConditionsCreditCash(event) {
    const ownCalcRadioButton = document.querySelector('#own_calc_credit_input');
    ownCalcRadioButton.checked = false;
    hideElements('.own-calc-credit__dashboard');
    showElements('#get_credit');
    catchClickCheckbox(event);
};

function showOwnCalcCredit() {
    // const listRadiobuttonCreditCash = document.querySelectorAll('[name="credit-cash"]');
    //
    // [...listRadiobuttonCreditCash].some((link) => {
    //     console.log(link);
    //     if (link.classList.contains('active')) {
    //         checkedCreditId = link.id;
    //     };
    //     return link.classList.contains('active');
    // });
    const btn = document.querySelectorAll('[name="credit-cash"]');
    btn.forEach(item => {
        item.addEventListener('click', e => {
            checkedCreditId = item.id;
        })
    });
    hideElements('#get_credit');
    hideElements('.own-calc-credit__add-condition');
    hideElements('.own-calc-credit__count-result');
    hideElements('.tooltip');
    hideElements('.own-calc-credit__tooltip-count');

    const title = document.querySelector('#conditions_title');
    const sumCredit = document.querySelector('#sumCredit');
    const periodCredit = document.querySelector('#periodCredit');

    switch (checkedCreditId) {
        case 'credit_3':
            title.innerText = 'От 50 000 до 86 000 на сроки от 3 до 36 месяцев';
            sumCredit.value = '86000';
            periodCredit.value = '36';
            showElements('#recount');
            showElements('#insurance');
            showElements('#holydays');
            break;
        case 'credit_4':
            title.innerText = 'От 50 000 до 92 000 на сроки от 12 до 36 месяцев';
            sumCredit.value = '92000';
            periodCredit.value = '36';
            showElements('#insurance');
            break;
    }
    showElements('.own-calc-credit__dashboard');

    return checkedCreditId;
};

function toggleTooltip() {
    showOwnCalcCredit();
    let tooltipForToggleId = '';
    console.log(checkedCreditId);
    switch (checkedCreditId) {
        case 'credit_3':
            tooltipForToggleId = 'tooltip_credit_3';
            break;
        case 'credit_4':
            tooltipForToggleId = 'tooltip_credit_4';
            break;
    }
    document.getElementById(tooltipForToggleId).classList.toggle('hidden');
};

function calculateCredit() {
    switch (checkedCreditId) {
        case 'credit_3':
            showElements('#count_result');
            break;
        case 'credit_4':
            showElements('#count_result_fail');
            break;
    }
};

function calculateCredit1() {
    showElements('#count_result');
};

function make_meeting_start() {
    hideElements('.conditions__step');
    showElements('#meeting');
};

function showModal() {
    showElements('.modal');
};

function hideModal() {
    hideElements('.modal');
};

function showAdress() {
    hideElements('#meeting');
    hideAdressElements()
    showElements('#adress');
};

function showTimeAndDate() {
    showElements('#set_time_and_date');
};

function showEndTaskButton() {
    showElements('#end_task');
};

function showDeliveryMailButton() {
    hideAdressElements();
    showElements('#delivery_mail');
};

function showEnterAdress() {
    hideAdressElements();
    showElements('#enter_adress');
};

function hideAdressElements() {
    hideElements('#enter_adress');
    hideElements('#delivery_mail');
}







function toggleActionsSection(sectionClassName, clickedElement) {
    [...document.querySelectorAll('.actions__bookmark')].forEach((bookmark) => bookmark.classList.remove('actions__bookmark_active'))
    clickedElement.classList.add('actions__bookmark_active');

    hideElements('.actions__section');
    const section = document.querySelector(sectionClassName);
    section.classList.remove('hidden');
};

function catchClickCheckbox(event) {
    const input = event.target;
    const aimSelector = input.dataset.aim;

    if (input.checked) {
        showElements(aimSelector)
    } else {
        hideElements(aimSelector)
    }
};




function hideElements(selector) {
    [...document.querySelectorAll([selector])].forEach((elem) => elem.classList.add('hidden'));
};

function showElements(selector) {
    [...document.querySelectorAll([selector])].forEach((elem) => elem.classList.remove('hidden'));
};







//Вставка следующего шага диалогового скрипта.
function insertNextStepDialog(step_number) {
    const dialog = document.querySelector('.dialog');//Это таблица.
    const step = baseOfStep[step_number];//Берем из базы данные о шаге.
    step.step_number = step_number;//Добавляем в объект номер шага, он нам пригодится.
   
    //Создаем контейнер-строку в таблице.
    const string = createDiv();
    string.classList.add('dialog__string');
    string.dataset.step = step_number;

    //Создаем ячейки для строки.
    const cellGrid = createDiv();
    cellGrid.classList.add('dialog__cell');
    const themeCell = cellGrid.cloneNode(true);
    const phraseCell = cellGrid.cloneNode(true);
    const answerCell = cellGrid.cloneNode(true);

    //Наполняем ячейки данными из базы.
    themeCell.innerHTML = step.theme;
    phraseCell.innerHTML = step.text;
    if (step.buttons) {//Если в базе есть данные о кнопках, вставляем их в ячейку.
        answerCell.append( createAnswerForDialog(step) );
    };
    
    //Наполняем строку ячейками.
    string.append(themeCell);
    string.append(phraseCell);
    string.append(answerCell);

    //Добавляем строку в таблицу.
    dialog.append(string);
};

//Создаем контейнер с кнопками.
function createAnswerForDialog(step) {
    const wrap = createDiv();//Создаем обертку.
    wrap.classList.add('dialog__buttons');
    //Для каждой кнопки повторяем операцию создания и добавляем ее в обертку.
    step.buttons.forEach(button_data => {
        let label = createLabelForDialog(button_data, step);
        wrap.append(label);
    });
    return wrap;
};

//Создаем кнопки.
function createLabelForDialog(button_data, step) {
    //Создаем label.
    const label = document.createElement('label');
    label.classList.add('dialog__label');
    //Если есть данные о типе ответа - подкрашиваем текст ответа.
    if (button_data.type) {
        label.classList.add(`dialog__${button_data.type}`);
    };
    
    //Создаем input.
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';//Делаем его радиокнопкой.
    radioButton.name = step.step_number;//Присваиваем имя, чтобы радиокнопки переключались между собой.
    radioButton.dataset.click = 'choose_next_step';//Маркер для ловца кликов.
    radioButton.dataset.nextStep = button_data.next_step;//Какой шаг должен ооткрыться при клике.
    
    //Добавляем input в label.
    label.append(radioButton);
    //Добавляем текст кнопки в label.
    label.append(button_data.text);

    return label;
};

//Вставка следующего шага.
function chooseNextStep(event) {
    const radio = event.target;
    //Находим строку таблицы в которой был клик и удаляем все последующие строки.
    const string = radio.closest('.dialog__string');
    deleteSteps(string);
    
    //Берем номер следющео шага из дата-аттрибута кнопки и вставляем его.
    const next_step = `step_${radio.dataset.nextStep}`;
    insertNextStepDialog(next_step);
};

//Проверяем - есть ли нижележащий сестринский элемент, удаляем, повторяем.
function deleteSteps(string) {
    if(string.nextSibling) {
        string.nextSibling.remove();
        deleteSteps(string);
    };
    return;
};

function createDiv() {
    const div = document.createElement('div');
    return div;
}























// appointment__ops form__SU3 





function m_a__claim_register() {
    if (document.getElementById("m_a__claim_register").click) {
        document.getElementById("comliance__open").style.display = 'block';
        document.getElementById("m_a__claim_register1").style.display = 'block';
        document.getElementById("m_a__claim_register").style.display = 'none';
    }
}


function m_a__claim_register1() {
    if (document.getElementById("m_a__claim_register1").click) {
        document.getElementById("comliance__open").style.display = 'none';
        document.getElementById("m_a__claim_register1").style.display = 'none';
        document.getElementById("m_a__claim_register").style.display = 'block';
    }
}

function m_a__more_actions() {
    if (document.getElementById("m_a__more_actions").click) {
        document.getElementById("m_a__more_actions_open").style.display = 'block';
        document.getElementById("m_a__more_actions1").style.display = 'block';
        document.getElementById("m_a__more_actions").style.display = 'none';
    }
}

function m_a__more_actions1() {
    if (document.getElementById("m_a__more_actions1").click) {
        document.getElementById("m_a__more_actions_open").style.display = 'none';
        document.getElementById("m_a__more_actions1").style.display = 'none';
        document.getElementById("m_a__more_actions").style.display = 'block';
    }
}

function m_a__map() {
    if (document.getElementById("m_a__map").click) {
        document.getElementById("map").style.display = 'block';
        ymaps.ready(init);
        document.getElementById("m_a__map1").style.display = 'block';
        document.getElementById("m_a__map").style.display = 'none';
    }
}

function m_a__map1() {
    if (document.getElementById("m_a__map1").click) {
        document.getElementById("map").style.display = 'none';
        document.getElementById("m_a__map1").style.display = 'none';
        document.getElementById("m_a__map").style.display = 'block';
    }
}

function ch_comliance() {
    {
        if (document.getElementById("ch_comliance").checked) {
            document.getElementById("m_a_comliance").style.display = 'block';
        } else {
            document.getElementById("m_a_comliance").style.display = 'none';

        }
    };

}


function change_data() {
    {
        if (document.getElementById("change_data").checked) {
            document.getElementById("change_data__wrap").style.display = 'block';
        } else {
            document.getElementById("change_data__wrap").style.display = 'none';

        }
    };
}

function updateDate() {
    const dateField = document.getElementById('date');
    const dateText = document.querySelector('.modal__message__date');
    dateField .addEventListener('change', e => {
        dateText.innerHTML = dateField.value;
    })
}

updateDate();

function updatePeriod(){
    const periodField = document.querySelector('.period');
    const periodText = document.querySelector('.modal__message__period');
    periodField.addEventListener('change', e => {
        periodText.innerHTML = periodField.value;
    })
}
updatePeriod();

function loanCalculation(){
    const link = document.querySelectorAll('.credit-cash__link');
    const linkBlock = document.querySelectorAll('.credit-cash__item');
    const calcBlock = document.querySelector('.own-calc-credit');

    link.forEach(item => {
        item.addEventListener('click', e =>{
            linkBlock.forEach(item => {
                item.classList.add('hidden');
            });
            calcBlock.classList.remove('hidden');
        })
    })
}

loanCalculation();


function calculate(){
    const btn = document.querySelector('[data-click="calculate_credit"]');
    const approved = document.getElementById('count_result');
    const notApproved = document.getElementById('count_result_fail');

    const sum = document.getElementById('sumCredit');
    const period = document.getElementById('periodCredit');
    const insurance = document.getElementById('credit-insurance');
    const holidays = document.getElementById('credit-holydays');

    const price = document.querySelectorAll('.price');
    const time = document.querySelectorAll('.time');
    const priceMonth = document.querySelectorAll('.price-per-month');
    const creditInsurance = document.querySelectorAll('.insurance');
    const creditHolidays = document.querySelectorAll('.credit-holidays');

    btn.addEventListener('click', e => {
        const random = Math.floor(Math.random() * 2);

        if(random === 0){
            approved.classList.add('hidden');
            notApproved.classList.remove('hidden');
        }else{
            approved.classList.remove('hidden');
            notApproved.classList.add('hidden');
        }

        price.forEach(item => {
            item.innerHTML = sum.value;
        });
        time.forEach(item => {
            item.innerHTML = period.value;
        });
        priceMonth.forEach(item => {
            const percent =  14.9 / 12 / 100;
            const percentPlus = 1 + percent;
            const per = Number(period.value);
            const coefficient = percent * Math.pow(percentPlus, per)/ (Math.pow(percentPlus,per) - 1);
            item.innerHTML = Math.round(Number(sum.value) * coefficient);
        });
        creditInsurance.forEach(item => {
            if(insurance.checked){
                item.innerHTML = 'присутствует';
            }else{
                item.innerHTML = 'отсутсвует';
            }
        });
        creditHolidays.forEach(item => {
            if(holidays.checked){
                item.innerHTML = 'присутствуют';
            }else{
                item.innerHTML = 'отсутсвуют';
            }
        })
    })
}

calculate();


function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.761832, 37.595279],
            zoom: 5
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.936839, 30.312668], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Невский проспект, 3",
            balloonContentBody: "Санкт-Петербург, Россия",
            balloonContentFooter: "191186",
            hintContent: "Невский проспект, 3"
        });
    myMap.geoObjects.add(myPlacemark);

        myPlacemark = new ymaps.Placemark([59.913495, 30.317253], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "5-я Красноармейская улица, 1",
            balloonContentBody: "Санкт-Петербург, Россия",
            balloonContentFooter: "190005",
            hintContent: "5-я Красноармейская улица, 1"
        });

    myMap.geoObjects.add(myPlacemark);

        myPlacemark = new ymaps.Placemark([59.944885, 30.365564], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Фурштатская улица, 41",
            balloonContentBody: "Санкт-Петербург, Россия",
            balloonContentFooter: "191123",
            hintContent: "Фурштатская улица, 41"
        });

    myMap.geoObjects.add(myPlacemark);

        myPlacemark = new ymaps.Placemark([55.761832, 37.595279], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Малая Бронная улица, 17",
            balloonContentBody: "Москва, Россия",
            balloonContentFooter: "123104",
            hintContent: "Малая Бронная улица, 17"
        });

    myMap.geoObjects.add(myPlacemark);

        myPlacemark = new ymaps.Placemark([55.734511, 37.618112], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "1-й Хвостов переулок, 3Ас2",
            balloonContentBody: "Москва, Россия",
            balloonContentFooter: "119180",
            hintContent: "Ф-й Хвостов переулок, 3Ас2"
        });

    myMap.geoObjects.add(myPlacemark);

        myPlacemark = new ymaps.Placemark([55.766202, 37.649296], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Большой Харитоньевский переулок, 21с4",
            balloonContentBody: "Москва, Россия",
            balloonContentFooter: "107078",
            hintContent: "Большой Харитоньевский переулок, 21с4"
        });

    myMap.geoObjects.add(myPlacemark);

        myPlacemark = new ymaps.Placemark([56.311010, 43.941732], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "улица Анатолия Григорьева, 16",
            balloonContentBody: "Нижний Новгород, Россия",
            balloonContentFooter: "603059",
            hintContent: "улица Анатолия Григорьева, 16"
        });

    myMap.geoObjects.add(myPlacemark);

        myPlacemark = new ymaps.Placemark([54.616576, 39.724085], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "улица Пушкина, 18",
            balloonContentBody: "Рязань, Россия",
            balloonContentFooter: "390005",
            hintContent: "улица Пушкина, 18"
        });

    myMap.geoObjects.add(myPlacemark);

}

const element = document.getElementById('id');
const options = {
    limit: document.querySelector('.area'),
};
const drag = new Draggable (element, options);

drag.set(window.innerWidth - 200,window.innerHeight - 200);


function more(){
    const btn = document.querySelectorAll('[name="credit-cash"]');
    btn.forEach(item => {
        item.addEventListener('click', e => {
            item.classList.add('active');
        })
    })

}


more();



































