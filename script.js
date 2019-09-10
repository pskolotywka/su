// let checkedCreditId = '';
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
        // case 'tooltip':
        //     toggleTooltip();
        //     break;
        case 'checkbox':
            catchClickCheckbox(event);
            break;
        case 'credit-cash':
            showConditionsCreditCash(event);
            break;
        // case 'own_calc_credit_input':
        //     showOwnCalcCredit();
        //     break;
        // case 'calculate_credit':
        //     calculateCredit();
        //     break;
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
    clipTips();
};

function showConditionsCreditCash(event) {
    const ownCalcRadioButton = document.querySelector('#own_calc_credit_input');
    ownCalcRadioButton.checked = false;
    hideElements('.own-calc-credit__dashboard');
    showElements('#get_credit');
    catchClickCheckbox(event);
};

// function showOwnCalcCredit() {
//     const listRadiobuttonCreditCash = document.querySelectorAll('[name="credit-cash"]');
//
//     [...listRadiobuttonCreditCash].some((input) => {
//         if (input.checked) {
//             checkedCreditId = input.id;
//         };
//     });
//
//     hideElements('#get_credit');
//     hideElements('.own-calc-credit__add-condition');
//     hideElements('.own-calc-credit__count-result');
//     hideElements('.tooltip');
//     hideElements('.own-calc-credit__tooltip-count');
//
//     const title = document.querySelector('#conditions_title');
//     const sumCredit = document.querySelector('#sumCredit');
//     const periodCredit = document.querySelector('#periodCredit');
//
//     switch (checkedCreditId) {
//         case 'credit_3':
//             title.innerText = 'От 50 000 до 86 000 на сроки от 3 до 36 месяцев';
//             sumCredit.value = '86000';
//             periodCredit.value = '36';
//             showElements('#recount');
//             showElements('#insurance');
//             showElements('#holydays');
//             break;
//         case 'credit_4':
//             title.innerText = 'От 50 000 до 92 000 на сроки от 12 до 36 месяцев';
//             sumCredit.value = '92000';
//             periodCredit.value = '36';
//             showElements('#insurance');
//             break;
//     }
//     showElements('.own-calc-credit__dashboard');
// };

// function toggleTooltip() {
//     let tooltipForToggleId = '';
//     switch (checkedCreditId) {
//         case 'credit_3':
//             tooltipForToggleId = 'tooltip_credit_3';
//             break;
//         case 'credit_4':
//             tooltipForToggleId = 'tooltip_credit_4';
//             break;
//     }
//     document.getElementById(tooltipForToggleId).classList.toggle('hidden');
// };
//
// function calculateCredit() {
//     switch (checkedCreditId) {
//         case 'credit_3':
//             showElements('#count_result');
//             break;
//         case 'credit_4':
//             showElements('#count_result_fail');
//             break;
//     }
// };

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

const tip = document.querySelector('.wrap__help');
const doc = document.querySelector('body');

function m_a__claim_register() {
    if (document.getElementById("m_a__claim_register").click) {
        document.getElementById("comliance__open").style.display = 'block';
        document.getElementById("m_a__claim_register1").style.display = 'block';
        document.getElementById("m_a__claim_register").style.display = 'none';
        tip.classList.remove('hidden');
        tip.innerHTML = 'Когда клиент сообщает об ошибке оператора или сотрудника банка (например, некорректная консультация / грубая манера общения и т.п.),' +
            ' зарегистрируй претензию, следуя инструкции «Информационный портал – Дополнительные действия – Зарегистрировать претензию»';
        //при клике на body
        doc.addEventListener('click', e => {
            const blockMore = e.target.closest('#comliance__open') || e.target.closest('#m_a__claim_register') || e.target.closest('#id');
            //если изменненный эл НЕ #comliance__open и не #m_a__claim_register
            if(blockMore === null ){
                m_a__claim_register1();

            }
        })
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
        tip.classList.remove('hidden');
        tip.innerHTML = 'При любых изменений данных клиента важно строго следовать инструкции «Информационный портал – Дополнительные действия ' +
            '- Дополнительные действия – Изменение данных»';
        //при клике на body
        doc.addEventListener('click', e => {
            const blockMore = e.target.closest('#m_a__more_actions_open') || e.target.closest('#m_a__more_actions') || e.target.closest('#id');
            //если изменненный эл НЕ #m_a__more_actions_open и не #m_a__more_actions
            if(blockMore === null ){
                m_a__more_actions1();
            }
        })

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
        tip.classList.add('hidden');
        //при клике на body
        doc.addEventListener('click', e => {
            const blockMore = e.target.closest('#map') || e.target.closest('#m_a__map') || e.target.closest('#id');
            //если изменненный эл НЕ #map и не #m_a__map
            if(blockMore === null ){
                m_a__map1();
            }
        })
    }
}

function m_a__map1() {
    if (document.getElementById("m_a__map1").click) {
        document.getElementById("map").style.display = 'none';
        document.getElementById("m_a__map1").style.display = 'none';
        document.getElementById("m_a__map").style.display = 'block';
    }
}



function globalClick(){
    if(document.getElementById("m_a__more_actions_open").style.display === 'block'){
        console.log(document.getElementById("m_a__more_actions_open").style.display);

    }

}
globalClick();




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

// function loanCalculation(){
//     const link = document.querySelectorAll('.credit-cash__link');
//     const linkBlock = document.querySelectorAll('.credit-cash__item');
//     const calcBlock = document.querySelector('.own-calc-credit');
//
//     link.forEach(item => {
//         item.addEventListener('click', e =>{
//             linkBlock.forEach(item => {
//                 item.classList.add('hidden');
//             });
//             calcBlock.classList.remove('hidden');
//         })
//     })
// }
//
// loanCalculation();




function optionsCredit(){
    let checkedCreditId = '';
    const btnCalculate = document.querySelector('[data-click="calculate_credit"]');
    const title = document.querySelector('#conditions_title');
    const sumCredit = document.querySelector('#sumCredit');
    const periodCredit = document.querySelector('#periodCredit');
    const questionMark = document.querySelector('.tooltip-pin');
    const linkBlock = document.querySelectorAll('.credit-cash__item');
    const btn = document.querySelectorAll('[name="credit-cash"]');
    btn.forEach(item => {
        //при клике на одну из ссылок в "кредит наличными"
        item.addEventListener('click', e => {
            //добавляем подсказку
            linkBlock.forEach(item => {
                item.classList.add('hidden');
            });
            checkedCreditId = item.id;
            showElements('.own-calc-credit');

            switch (checkedCreditId) {
                //если id эл =
                case 'credit_3':
                    title.innerText = 'От 50 000 до 86 000 на сроки от 3 до 36 месяцев';
                    sumCredit.value = '86000';
                    periodCredit.value = '36';
                    showElements('#recount');
                    showElements('#insurance');
                    showElements('#holydays');
                    break;
                //если id эл =
                case 'credit_4':
                    title.innerText = 'От 50 000 до 92 000 на сроки от 12 до 36 месяцев';
                    sumCredit.value = '92000';
                    periodCredit.value = '36';
                    showElements('#insurance');
                    document.getElementById('recount').classList.add('hidden');
                    break;
            }


            switch (checkedCreditId) {

                case 'credit_3':
                    //на инпут суммы навешиваем событие
                    sumCredit.addEventListener('blur', e => {
                        const sum = Number(sumCredit.value);
                        // если знаечение инпута не вписываается в интервал
                        if(sum < 50000 || sum > 86000){
                            sumCredit.classList.add('red-border');
                            btnCalculate.classList.add('block');
                        }else{
                            sumCredit.classList.remove('red-border');
                            btnCalculate.classList.remove('block');
                        }
                    });
                    periodCredit.addEventListener('blur', e => {
                        const period = Number(periodCredit.value);
                        if(period < 3 || period > 36){
                            periodCredit.classList.add('red-border');
                        }else{
                            periodCredit.classList.remove('red-border');
                        }
                    });
                    break;
                case 'credit_4':
                    sumCredit.addEventListener('blur', e => {
                        const sum = Number(sumCredit.value);
                        if(sum < 50000 || sum > 92000){
                            sumCredit.classList.add('red-border');
                        }else{
                            sumCredit.classList.remove('red-border');
                        }
                    });
                    periodCredit.addEventListener('blur', e => {
                        const period = Number(periodCredit.value);
                        if(period < 12|| period > 36){
                            periodCredit.classList.add('red-border');
                        }else{
                            periodCredit.classList.remove('red-border');
                        }
                    });
                    break;
            }

            btnCalculate.onmousedown = function(){
                const sum = Number(sumCredit.value);
                const period = Number(periodCredit.value);
                switch (checkedCreditId) {
                    case 'credit_3':
                        if((sum < 50000 || sum > 86000) && (period < 3 || period > 36)){
                            btnCalculate.classList.add('block');
                        }else if(sum < 50000 || sum > 86000){
                            btnCalculate.classList.add('block');
                        }else if(period < 3 || period > 36){
                            btnCalculate.classList.add('block');
                        }else{
                            btnCalculate.classList.remove('block');
                            calculate();
                        }
                        break;
                    case 'credit_4':
                        showElements('#insurance');
                        if((sum < 50000 || sum > 92000)  && (period < 12|| period > 36)){
                            btnCalculate.classList.add('block');
                        }else if(sum < 50000 || sum > 92000){
                            btnCalculate.classList.add('block');
                        }else if(period < 12 || period > 36){
                            btnCalculate.classList.add('block');
                        }else{
                            btnCalculate.classList.remove('block');
                            calculate();
                        }
                        break;
                }
            };

            let tooltipForToggleId = '';
            switch (checkedCreditId) {
                case 'credit_3':
                    tooltipForToggleId = 'tooltip_credit_3';
                    break;
                case 'credit_4':
                    tooltipForToggleId = 'tooltip_credit_4';
                    break;
            }
            questionMark.addEventListener('click', e => {
                document.getElementById(tooltipForToggleId).classList.toggle('hidden');
                switch (checkedCreditId) {
                    case 'credit_3':
                        tip.innerHTML = 'Подсказка: При консультации клиента следуй инструкции «Согласование условий ' +
                            '– общее описание функционала – согласование условий - Собственный расчет (для кредита наличными) ' +
                            '– порядок для тарифа с пересчетом ставки в синим блоке»';
                        break;
                    case 'credit_4':
                        tip.innerHTML = 'Подсказка: При консультации клиента следуй инструкции «Согласование условий' +
                            ' – общее описание функционала – согласование условий - Собственный расчет (для кредита наличными)' +
                            ' – Клиент интересуется процентной ставкой или не уточняет конкретно, о каком проценте (годовой или общий) идёт речь';
                        break;
                }
            })

        });
    });
}

optionsCredit();

function testSumPeriod(){

}
testSumPeriod();

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









function init () {
    //если уже открывали карту
    if (window.myMap) {
        //то удаляем ее
        window.myMap.destroy()
    }

    window.myMap = new ymaps.Map("map", {
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

    // Создаем многоугольник, используя вспомогательный класс Polygon.
    var myPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [60.057553, 30.148310],
            [60.080199, 30.189800],
            [60.098035, 30.264414],
            [60.091731, 30.367832],
            [60.041739, 30.437748],
            [59.990454, 30.482903],
            [59.968279, 30.551028],
            [59.901102, 30.526281],
            [59.869743, 30.531189],
            [59.854582, 30.503847],
            [59.851408, 30.467391],
            [59.825297, 30.433038],
            [59.809762, 30.328578],
            [59.834826, 30.279503],
            [59.877498, 30.294226],
            [59.907793, 30.205891],
            [59.944364, 30.204042]
        ],
        [
            [55.881895, 37.444080],
            [55.883391, 37.470701],
            [55.906328, 37.524832],
            [55.911811, 37.569201],
            [55.909817, 37.588724],
            [55.896856, 37.641080],
            [55.895360, 37.699647],
            [55.827988, 37.831868],
            [55.779507, 37.841630],
            [55.720950, 37.839855],
            [55.698404, 37.828319],
            [55.688380, 37.829206],
            [55.664311, 37.838967],
            [55.654278, 37.837193],
            [55.616630, 37.780400],
            [55.575930, 37.686337],
            [55.571521, 37.666139],
            [55.574861, 37.597164],
            [55.596293, 37.509852],
            [55.613412, 37.489031],
            [55.638682, 37.458547],
            [55.663069, 37.431034],
            [55.712976, 37.384822],
            [55.746072, 37.369057],
            [55.784641, 37.368809],
            [55.806299, 37.386755],
            [55.836864, 37.396077],
            [55.846567, 37.391176],
            [55.861008, 37.398208],
            [55.867690, 37.405103],
            [55.873115, 37.416387]
        ],
        [
            [56.424614, 43.811882],
            [56.407867, 43.848961],
            [56.372828, 43.884666],
            [56.357202, 43.916252],
            [56.340044, 43.987663],
            [56.338137, 44.066627],
            [56.334705, 44.083793],
            [56.298834, 44.118126],
            [56.241753, 44.034001],
            [56.235070, 44.045296],
            [56.227599, 44.020588],
            [56.220520, 43.978231],
            [56.197307, 43.935874],
            [56.204390, 43.925990],
            [56.218553, 43.933756],
            [56.220126, 43.888575],
            [56.189434, 43.809509],
            [56.184710, 43.783389],
            [56.193371, 43.707852],
            [56.219340, 43.715617],
            [56.263368, 43.762916],
            [56.267297, 43.744561],
            [56.278440, 43.757667],
            [56.304254, 43.747834],
            [56.388477, 43.724356]
        ],
        [
            [54.584010, 39.772085],
            [54.583597, 39.746139],
            [54.600935, 39.645907],
            [54.616177, 39.636443],
            [54.636181, 39.632888],
            [54.650404, 39.640708],
            [54.667095, 39.595924],
            [54.685551, 39.600487],
            [54.692608, 39.591143],
            [54.695592, 39.601446],
            [54.701004, 39.614908],
            [54.699430, 39.651542],
            [54.697254, 39.652669],
            [54.696182, 39.660633],
            [54.698250, 39.669650],
            [54.691612, 39.679230],
            [54.687804, 39.675849],
            [54.686171, 39.676976],
            [54.673654, 39.708535],
            [54.656014, 39.746855],
            [54.652539, 39.771229],
            [54.663522, 39.793434],
            [54.653502, 39.808274],
            [54.636093, 39.779492],
            [54.625206, 39.795610],
            [54.620083, 39.797113],
            [54.613324, 39.826229],
            [54.607822, 39.825785],
            [54.604878, 39.836680],
            [54.599207, 39.829542],
            [54.604114, 39.818647],
            [54.599970, 39.809255],
            [54.583785, 39.817279],
            [54.579180, 39.812350],
            [54.570963, 39.805493],
            [54.566799, 39.811336],
            [54.533789, 39.784121],
            [54.545377, 39.783478],
            [54.568294, 39.781335]
        ]

    ],{}, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fill: false,
        // Цвет обводки.
        strokeColor: '#ff0000',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 5
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myPolygon);

}


function clipTips(){
    //контейнер для подсказок

    const blockConditions = document.querySelector('.conditions');
    const tipConditions = 'Запомни информацию в Апплете «Дополнительная информация». После перехода к назначению встречи, информация исчезнет';
    //при нажатии на 'Согласование условий'
    blockConditions.addEventListener('click', e => {
        tip.innerHTML = tipConditions;
        tip.classList.remove('hidden');
    });
    //при клике на body
    doc.addEventListener('click', e => {
        const blockMore = e.target.closest('.conditions') || e.target.closest('#m_a__more_actions_open') || e.target.closest('#m_a__more_actions')
            || e.target.closest('#id') || e.target.closest('#map') || e.target.closest('#m_a__map') ||e.target.closest('#comliance__open')
            || e.target.closest('#m_a__claim_register');
        //если изменненный эл НЕ conditions
        if(blockMore === null ){
            tip.classList.add('hidden');
        }
    });

    //текст в дополнительной информации
    const moreInfoContent = document.querySelectorAll('.tip');
    const moreInfoTips = ['При согласии клиента на получение кредитной карты, действуй согласно инструкции «Согласование условий»' +
    ' – общее описание функционала – Апплет Дополнительная информация».' +
    'Если клиент сообщает, что уже активировал кредитную карту нашего Банка, действуй, согласно инструкции «Согласование условий»' +
    ' – общее описание функционала – Нестандартные ситуации - Клиент сообщает, что он пользуется/ уже активировал КК».',
    'При согласовании доставки кредитной карты Почтой России, обрати внимание на данный шаг и следуй инструкции «Согласование условий»' +
    ' – общее описание функционала – Апплет Дополнительная информация».',
    'При согласии клиента на получение кредита наличными – обязательно ознакомься со значением в поле «Дебетовый клиент».' +
    ' Действуй согласно инструкции «Согласование условий – Входящие обращения/Исходящий обзвон (выбор зависит от твоего функционала)' +
    ' – очередь – описание – красный блок»'];
    for(let i = 0; i < moreInfoContent.length; i++){
        //при наведении на вопросики
        moreInfoContent[i].onmouseover = function(){
            tip.innerHTML = moreInfoTips[i];
        };
        //если убираем мышь c вопросиков, то всплывает общая подсказка для бока 'Согласование условий'
        moreInfoContent[i].onmouseout = function(){
            tip.innerHTML = tipConditions;
        }
    }

    const loanSelection = document.querySelector('.conditions__select-type-credit');
    //при наведении на "выберите кредит"
    loanSelection.onmouseover = function(){
        tip.innerHTML = 'Изучи описание задания, в котором будет указан продукт, который нужно предлагать в первую очередь.' +
            'Переходить к презентации второго продукта (при наличии) следует только после полной отработки всех имеющихся и' +
            ' выявленных возражений клиента по приоритетному продукту, если клиент все равно отказывается от приоритетного продукта.';
    };
    //если убираем мышь c "выберите кредит", то всплывает общая подсказка для бока 'Согласование условий'
    loanSelection.onmouseout = function(){
        tip.innerHTML = tipConditions;
    };

    const tipCreditCard = 'Обрати внимание! Кредитный лимит озвучивай клиенту, строго согласно инструкции «Согласование условий» ' +
        '– общее описание функционала-Особенности функционала – Как озвучивать одобренный лимит кредитной карты»';

    const creditCard = document.getElementById('credit_1');
    //если выбрали кредитную карту
    if(!creditCard.classList.contains('hidden')){
        tip.innerHTML = tipCreditCard;
    }

    //если наводим на кнопку "назначить встречу"
    const makeAppointment = document.getElementById('make_meeting_start');
    makeAppointment.onmouseover = function(){
        tip.innerHTML = 'Сначала проверь Апплет «Дополнительная информация». Порядок действий ты найдешь в инструкции «Согласование условий' +
            ' – общее описание функционала – Апплет Дополнительная информация»';
    };

    const tipCheckMap = 'Разверни Апплет «Карта» и проверь возможность доставки, следуя инструкции «Информационный портал – назначение встреч»';

    const meetingAddress = document.querySelector('.appointment__address');
    //при наведении на "Удобный адрес для встречи"
    meetingAddress .onmouseover = function () {
        tip.innerHTML = tipCheckMap;
    };
    meetingAddress .onmouseout = function () {
        tip.innerHTML = tipCreditCard;
    };

    const address = document.querySelector('.adress__title');
    //при наведении на "Удобный адрес для встречи"
    address.onmouseover = function () {
    tip.innerHTML = tipCheckMap;
    };
    address.onmouseout = function () {
        tip.innerHTML = tipCreditCard;
    };

    const tipComment = 'Обязательно уточни у клиента дополнительный номер телефона и другие данные для представителя.' +
        ' Внеси данные в Комментарий для представителя, следуя инструкции «Информационный портал – назначение встреч»';
    const comment = document.querySelector('.comment');
    //при наведении на текст 'Комментарий для представителя'
    comment.onmouseover = function(){
        tip.innerHTML = tipComment;
    };
    comment.onmouseout = function(){
        tip.inner = tipCreditCard;
    };

    const commentInput = document.querySelector('.comment-text-input');
    //при на ведении на поле для комментария для представителя
    commentInput.onmouseover = function () {
        tip.innerHTML = tipComment;
    };
    commentInput.onmouseout = function(){
        tip.inner = tipCreditCard;
    };


    //если убираем мышь с кнопки "назначить встречу", то встпывает предыдущая подсказка
    makeAppointment.onmouseout = function () {
        tip.innerHTML = tipCreditCard;
    };

    const tipCreditCash = 'Проверь, что все параметры расчета указаны верно.';
    const btn = document.querySelectorAll('[name="credit-cash"]');
    btn.forEach(item => {
        item.addEventListener('click', e => {
            tip.innerHTML = tipCreditCash;
        })
    });
    const insurance = document.getElementById('insurance');
    //если наводим на страховку
    insurance.onmouseover = function(){
        tip.innerHTML = 'Снимать чек-бокс нужно только при желании клиента.' +
            'Самостоятельно упоминать о факте подключенной страховки, стоимости услуги и ее условиях не требуется.' +
            ' Исключение – уточняющие вопросы клиента касательно большого ежемесячного. платежа, дополнительных услуг/комиссий.' +
            ' («Согласование условий – общее описание функционала – согласование условий - Собственный расчет (для кредита наличными)';
    };
    insurance.onmouseout= function(){
        tip.innerHTML = tipCreditCash;
    };

    const holiday = document.getElementById('holydays');
    //если наводим на кредитные каникулы
    holiday.onmouseover = function () {
        tip.innerHTML = 'Услуга может быть подключена по умолчанию.' +
            'В этом случае, как и со Страховкой, без уточнений клиента сообщать об услуге или ее отключать (снимать чек-бокс) не требуется.' +
            ' Если услуга по умолчанию отключена, то самостоятельно предлагать ее подключить также не требуется. ' +
            '(«Согласование условий – общее описание функционала – согласование условий - Собственный расчет (для кредита наличными)';
    };
    holiday.onmouseout = function () {
        tip.innerHTML = tipCreditCash;
    };

    const textMoreAction = 'При любых изменений данных клиента важно строго следовать инструкции «Информационный портал – Дополнительные действия ' +
        '- Дополнительные действия – Изменение данных»';

    const dateProcessing = document.querySelector('.data-change__date');
    //если наводим на "дата обработки"
    dateProcessing.onmouseover = function(){
        tip.innerHTML = 'Укажи дату и время обработки в формате "04.07.2019 17:00"';

    };
    dateProcessing.onmouseout = function(){
        tip.innerHTML = textMoreAction
    };

    const dataChangeComment = document.querySelector('.data-change__comment');
    //если наводим на комментарий в доп действиях
    dataChangeComment.onmouseover = function(){
        tip.innerHTML = 'Укажи комментарий, согласно инструкции «Информационный портал – Дополнительные действия - Дополнительные действия – Изменение данных»';

    };
    dataChangeComment.onmouseout = function(){
        tip.innerHTML = textMoreAction
    };

    const moreActionsClaim = document.querySelector('.more-actions__claim');
    //если наводим на претензию в доп действиях
    moreActionsClaim.onmouseover = function(){
        tip.innerHTML = 'Для регистрации претензии используй Апплет «Зарегистрировать претензию»';
    };
    moreActionsClaim.onmouseout = function(){
        tip.innerHTML = textMoreAction
    };


}

clipTips();

function dataChangeDate() {
    const block = document.querySelector('.data-change__date');
    const date = block.querySelector('input');

    date.onkeyup = function test(){
        const value = date.value;

        const pattern = /[()&^$?/%#\!@;+_*="'a-zA-Zа-яА-Я]/;

        //делаем проверку с помощью метода test
        //(выполняет поиск сопоставления)
        if(pattern.test(value)){
            //Метод replace() возвращает новую строку с сопоставлениями, заменёнными на заменитель
            date.value = value.replace(pattern, '');
        }
    };

    date.addEventListener('blur', e => {
        const format = /^\d{2}.\d{2}.\d{4} \d{2}:\d{2}$/.test(date.value);
        if(date.value.length > 0){
            if(format !== true){
                date.classList.add('red-border');
                tip.innerHTML = 'Укажи дату и время обработки в формате "04.07.2019 17:00" ';
            }else{
                date.classList.remove('red-border');
            }
        }
    })
}

dataChangeDate();


const element = document.getElementById('id');
const options = {
    limit: document.querySelector('.area'),
};

function clipPosition(){
    const btn = document.querySelector('.btn_call');
    const conditions = document.querySelector('.conditions');
    const wrapClip = document.querySelector('.area');
    //при клике на кнопку позвонить в блоке история по заданию
    btn.addEventListener('click', e => {
        //меняем класс, чтоб можно было перетаскивать скрепку
        wrapClip.classList.add('new-area');
        window.drag.destroy();
        window.drag = new Draggable (element, options);
        //изначальные координаты
        drag.set(window.innerWidth - 570,window.innerHeight - 340);
    });
    //при клике на согласование условий
    conditions.addEventListener('click', e => {
        wrapClip.classList.add('conditions-area');

    })
}

clipPosition();


window.drag = new Draggable (element, options);




















