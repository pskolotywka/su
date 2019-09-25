const baseOfStep = {
    step_1: {
        theme: 'Приветствие',
        text: '<mark class="span-blue">Здравствуйте, меня зовут <ИМЯ>, <mark class="span-red">я представляю Тинькофф Банк. <ФИО></mark>?</mark>',
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '5'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '2'
            }
        ]
    },
    step_2: {
        theme: '3-е лицо',
        text: '<mark class="span-blue">По данному номеру телефона можно услышать <ФИО>?</mark>',
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '3'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '4'
            }
        ]
    },
    step_3: {
        theme: 'Перезвон',
        text: `<mark class="span-bold">Договорись о перезвоне. 
        При выборе даты перезвона обязательно проверь информацию в поле <mark class="span-blue">Дата истечения действия</mark> предложения. 
        Перезвон должен быть назначен не позднее чем за один день до этой даты.</mark>`,
        buttons: []
    },
    step_4: {
        theme: 'Отказ 3-е лицо',
        text: `<mark class="span-bold">Принеси извинения и вежливо попрощайся, перейди в закладку <mark class="span-blue">Отказ</mark>, 
        выбери соответствующую причину отказа <mark class="span-blue">3-е лицо.</mark> Заверши работу с заданием.</mark>`,
        butons: []
    },
    step_5: {
        theme: 'Приоритет по заданию',
        text: '<mark class="span-bold">Озвучь клиенту предложение с учетом приоритета по заданию.</mark>',
        buttons: [{
                text: 'Кредит наличными',
                type: 'positive',
                next_step: '6'
            },
            {
                text: 'Кредитная карта',
                type: 'positive',
                next_step: '33'
            }
        ]
    },
    step_6: {
        theme: 'КН: приветствие',
        text: `<mark class="span-blue"><mark class="span-red"><ИО></mark>, ранее Вы получили кредитную карту нашего банка, 
        сейчас Банк одобрил Вам <mark class="span-red">кредит наличными</mark> с максимальной суммой <mark class="span-red"><максимальная сумма></mark> 
        рублей на 36 месяцев. Регулярный платеж составит <mark class="span-red"><Назвать платеж> рублей в месяц.</mark> Чтобы обсудить детали, 
        давайте сделаем расчет. Какую сумму рассматриваете?
        <br>
        <br></mark> <mark class="span-bold">Произведи необходимые расчеты. При необходимости проконсультируй 
        об условиях кредитования.
        <br>
        <br>Клиент согласен получить кредит наличными?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '7'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '17'
            }
        ]
    },
    step_7: {
        theme: 'КН: способ получения кредита',
        text: `<mark class="span-bold">Уточни способы получения кредита.
        <br>
        <br>Есть возможность отправить документы на e-mail?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '9'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '8'
            }
        ]
    },
    step_8: {
        theme: 'КН: назначение встречи',
        text: `<mark class="span-bold">В апплете <mark class="span-blue">Согласование условий</mark> выбери оффер на <mark class="span-blue">кредит наличными</mark>.
        <br>Перейди к назначению встречи.
        <br>Запомни информацию по клиенту! После перехода к назначению встреч апплет <mark class="span-blue">Дополнительная информация исчезнет!</mark>
        <br>   
        <br><mark class="span-red"><ИО>, Вы можете активировать кредит наличными на встрече с представителем. Проценты будут начисляться на всю сумму, сразу после перевода средств на карту. 
        Погашать кредит можно пополняя дебетовую карту.</mark></mark>`,
        buttons: []
    },
    step_9: {
        theme: 'КН: e-mail указан верно?',
        text: `<mark class="span-bold">Сверь с клиентом e-mail.
        <br>
        <br>E-mail указан верно?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '11'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '10'
            }
        ]
    },
    step_10: {
        theme: 'КН: изменение данных',
        text: `<mark class="span-bold">Уточни у клиента, пользуется ли он личным кабинетом/мобильным приложением и предложи самостоятельно изменить адрес электронной 
        почты<mark class="span-red">*</mark>. Договорись о перезвоне.
        <br>
        <br>Если клиент не может самостоятельно изменить e-mail, отправь запрос на изменение данных.</mark>
        <br>
        <br><mark class="span-red">*</mark> Пример фразы: <mark class="span-blue"><ИО>, сейчас в ваших контактных данных указан неактуальный адрес электронной почты. 
        Если вы пользуетесь личным кабинетом на сайте или в мобильном приложении, то сможете моментально изменить его. 
        Что скажете, если я перезвоню Вам через 15 минут и отправлю документы на новый адрес, который Вы укажете в личном кабинете/мобильном приложении?</mark></mark>`,
        buttons: [{
                text: 'Далее',
                type: '',
                next_step: '8'
            },
        ]
    },
    step_11: {
        theme: 'КН: согласен получить документы по e-mail?',
        text: `<mark class="span-bold">Сообщи клиенту, что документы можем отправить на e-mail.
        <br>
        <br>Клиент согласен получить документы по e-mail?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '13'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '12'
            }
        ]
    },
    step_12: {
        theme: 'КН: назначение встречи',
        text: `<mark class="span-bold">В апплете <mark class="span-blue">Согласование условий</mark> выбери оффер на <mark class="span-blue">кредит наличными.</mark>
        <br>
        <br>Перейди к назначению встречи.
        <br>
        <br>Запомни информацию по клиенту! После перехода к назначению встреч апплет <mark class="span-blue">Дополнительная информация исчезнет!</mark></mark>
        <br>
        <br><mark class="span-red"><ИО>, Вы можете активировать кредит наличными на встрече с представителем. 
        Проценты будут начисляться на всю сумму, сразу после перевода средств на карту. Погашать кредит можно пополняя дебетовую карту.</mark>`,
        buttons: []
    },
    step_13: {
        theme: 'КН: согласие с условиями кредитования',
        text: `<mark class="span-bold">Подтверди согласие клиента с условиями кредитования.</mark>
        <br>
        <br><mark class="span-red"><ИО>, погашать кредит можно пополняя дебетовую карту. Вы подтверждаете, что оформляете кредит наличными 
        на <mark class="span-bold span-red"><Сумму></mark> и <mark class="span-bold span-red"><Срок></mark> месяцев с платежом <mark class="span-bold span-red"><Назвать платеж></mark> рублей в месяц?</mark>
        <br>
        <br><mark class="span-bold">Клиент согласен?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '14'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '39'
            }
        ]
    },
    step_14: {
        theme: 'КН: активация',
        text: `<mark class="span-bold">Сообщи (<ins>не настаивая</ins>) клиенту, что у него есть возможность активировать кредит прямо сейчас.
        <br>
        <br>Клиент согласен произвести активацию?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '15'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '16'
            }
        ]
    },
    step_15: {
        theme: 'КН: активация',
        text: `<mark class="span-red"><ИО>, активируя кредит, Вы соглашаетесь с индивидуальными условиями и тарифом.</mark>
        <br>
        <br><mark class="span-bold">Если страховка / кредитные каникулы подключены, добавь:</mark> <mark class="span-red">А также с условиями страхования / кредитных каникул.</mark>
        <br>
        <br><mark class="span-bold">Если подключен овердрафт по карте клиента, добавь:</mark> <mark class="span-red">Обратите внимание, что по Вашей карте будет отключен овердрафт.</mark>
        <br>
        <br><mark class="span-red">Кредит зачислим на счет до конца дня. Проценты будут начисляться на всю сумму, сразу после перевода средств на карту.
        <br>
        <br><mark class="span-bold">Индивидуальные условия и тариф придут клиенту на e-mail.
        <br>
        <br>Заверши работу с заданием.</mark>`,
        buttons: []
    },
    step_16: {
        theme: 'КН: отказ от активации',
        text: `<mark class="span-red"><ИО>, произвести активацию можно будет по звонку в банк или в личном кабинете. 
        Активируя кредит, Вы подтвердите своё согласие с индивидуальными условиями и тарифом.</mark>
        <br>
        <br><mark class="span-bold">Если страховка / кредитные каникулы подключены, добавь:</mark> <mark class="span-red">А также с условиями страхования / кредитных каникул.</mark>
        <br>
        <br><mark class="span-bold">Если подключен овердрафт по карте клиента, добавь:</mark> <mark class="span-red">Обратите внимание, по Вашей карте будет отключен овердрафт.
        <br>
        <br>Кредит зачислим на счет до конца дня, в котором проведена активация. Проценты будут начисляться на всю сумму, сразу после перевода средств на карту.</mark>
        <br>
        <br><mark class="span-bold">Индивидуальные условия и тариф придут клиенту на e-mail.
        <br>
        <br>Заверши работу с заданием.</mark>`,
        buttons: []
    },
    step_17: {
        theme: 'КН: РСВ',
        text: `<mark class="span-bold">Выясни причину и проведи <a href="https://weboffice.tinkoff.ru/rest/user-guide-files/7804?sale_procedure_objection">работу с возражениями</a>
        <mark class="span-red">*</mark>. Расскажи о преимуществах кредита наличными.</mark>
        <br>
        <br><mark class="span-bold">Клиент согласен получить кредит?</mark>
        <br>
        <br><mark class="span-red">*</mark> Если клиент отказывается от кредита наличными, потому что не устраивают условия, высокая процентная ставка или высокая сумма платежа, 
        в случае, если присутствует информация о возможности предложить премиум-тариф, сообщи:
        <br><mark class="span-blue">Если вы погасите кредит без просрочек и не раньше, чем за половину срока, то мы вернем Вам часть переплаты за кредит. 
        Для возврата Вам будет достаточно обратиться в банк после полного погашения кредита не позднее, чем через три месяца с даты погашения.</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '7'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '18'
            }
        ]
    },
    step_18: {
        theme: 'Новая тема',
        text: `<mark class="span-bold">Проверь поле <mark class="span-blue">Дебетовый клиент</mark>
        <br>У клиента есть дебетовая карта банка?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '19'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '27'
            }
        ]
    },
    step_19: {
        theme: 'Выяви потребность',
        text: `Уточни у клиента потребность в дополнительных средствах в ближайшие 2 мес.
        <br>
        <br><mark class="span-bold">Например:</mark> <mark class="span-red"><ИО></mark>, <mark class="span-blue">в ближайшие 2 месяца вам могут потребоваться дополнительные средства?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '20'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '27'
            }
        ]
    },
    step_20: {
        theme: 'КН: предложение для дебетового клиента',
        text: `<mark class="span-bold">Предложи клиенту получить документы, чтобы воспользоваться кредитом наличными в течение 60 дней с момента согласования условий.
        <br>
        <br>Клиент согласен получить документы?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '21'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '27'
            }
        ]
    },
    step_21: {
        theme: 'КН для дебетового клиента: уточнение способа доставки',
        text: `<mark class="span-bold">Уточни способы получения кредита.
        <br>
        <br>Есть возможность отправить документы на e-mail?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '22'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '24'
            }
        ]
    },
    step_22: {
        theme: 'КН для дебетового клиента: e-mail указан верно?',
        text: `<mark class="span-bold">Сверь с клиентом e-mail.
        <br>
        <br>E-mail указан верно?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '23'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '10'
            }
        ]
    },
    step_23: {
        theme: 'КН для дебетового клиента: можем отправить на e-mail',
        text: `<mark class="span-bold">Сообщи клиенту, что документы можем отправить на e-mail.
        <br>
        <br>Клиент согласен получить документы по e-mail?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '25'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '24'
            }
        ]
    },
    step_24: {
        theme: 'КН для дебетового клиента:',
        text: `<mark class="span-bold">В апплете <mark class="span-blue">Согласование условий</mark> выбери оффер на <mark class="span-blue">кредит наличными.</mark>
        <br>Перейди к назначению встречи.
        <br>
        <br>Запомни информацию по клиенту! После перехода к назначению встреч апплет <mark class="span-blue">Дополнительная информация</mark> исчезнет!</mark>
        <br>
        <br><mark class="span-red"><ИО>, произвести активацию можно будет по звонку в банк или в личном кабинете. 
        Проценты будут начисляться на всю сумму, сразу после перевода средств на карту. Погашать кредит можно, пополняя дебетовую карту.</mark>`,
        buttons: []
    },
    step_25: {
        theme: 'КН для дебетового клиента: согласие с условиями кредитования',
        text: `<mark class="span-bold">Подтверди согласие клиента с условиями кредитования.</mark>
        <br>
        <br><mark class="span-red"><ИО>, погашать кредит можно пополняя дебетовую карту. Вы подтверждаете, что оформляете кредит наличными на 
        <mark class="span-bold"><Сумму></mark> и  <mark class="span-bold"><Срок></mark> месяцев с платежом  <mark class="span-bold"><Назвать платеж></mark> рублей в месяц?</mark>
        <br>
        <br><mark class="span-bold">Клиент согласен?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '16'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '26'
            }
        ]
    },
    step_26: {
        theme: '',
        text: `<mark class="span-bold">Проведи <a href="https://weboffice.tinkoff.ru/rest/user-guide-files/7804?sale_procedure_objection">работу с возражениями</a>.
        <br>
        <br>Клиент согласен получить КН и документы?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '16'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '27'
            }
        ]
    },
    step_27: {
        theme: 'КН: второй оффер',
        text: `<mark class="span-bold">В задании есть оффер на предложение кредитной карты?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '28'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '29'
            }
        ]
    },
    step_28: {
        theme: 'КН: второй оффер',
        text: `<mark class="span-bold">Предложи клиенту второй оффер. При необходимости проведи 
        <a href="https://weboffice.tinkoff.ru/rest/user-guide-files/7804?sale_procedure_objection">работу с возражениями</a>.
        <br>
        <br>Клиент согласен?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '30'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '29'
            }
        ]
    },
    step_29: {
        theme: 'КН: отказ',
        text: `<mark class="span-blue">Спасибо за уделённое время, если Вы все же заинтересуетесь, можете позвонить в Банк или оформить заявку на сайте tinkoff.ru</mark>
        <br>
        <br><mark class="span-bold">Перейди в закладку <mark class="span-blue">Отказ</mark>, выбери соответствующую причину отказа.
        <br>
        <br>Заверши работу с заданием.</mark>`,
        buttons: []
    },
    step_30: {
        theme: 'КК: дополнительная информация',
        text: `<mark class="span-bold">Проверь апплет <mark class="span-blue">Дополнительная информация</mark>
        <br>
        <br>У клиента есть не активированная кредитная карта, которая будет заблокирована?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '31'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '32'
            }
        ]
    },
    step_31: {
        theme: 'КК: предупреждение',
        text: `<mark class="span-red"><ИО>, обращаю Ваше внимание, что в данном случае Ваша не активированная кредитная карта будет заблокирована.</mark>`,
        buttons: [{
                text: 'Далее',
                type: '',
                next_step: '32'
            },
        ]
    },
    step_32: {
        theme: 'КК: назначение встречи',
        text: `<mark class="span-bold">В апплете <mark class="span-blue">Согласование условий</mark> выбери оффер на <mark class="span-blue">кредитную карту.</mark>
        Перейди к назначению встречи.
        <br>
        <br>В приоритете предложи клиенту доставку по рабочему адресу.
        <br>
        <br>Запомни информацию по клиенту! После перехода к назначению встреч апплет <mark class="span-blue">Дополнительная информация</mark> исчезнет!</mark>`,
        buttons: []
    },
    step_33: {
        theme: 'КК: приветствие',
        text: `<mark class="span-red"><ИО>, <mark class="span-blue">ранее Вы оформляли кредитную карту нашего банка. Сейчас Банк одобрил Вам</mark> 
        кредитную карту Тинькофф Платинум, <mark class="span-blue">выпустим и доставим карту бесплатно.</mark>
        Вам будет удобно получить карту <mark class="span-blue">по <адресу></mark>?<mark class="span-red">Для назначения встречи нужно подтвердить Ваш доход.</mark></mark>
        <br>
        <br><mark class="span-bold">Клиент готов назначить встречу с представителем банка?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '30'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '34'
            },
            {
                text: 'Преимущества',
                type: '',
                next_step: '38'
            }
        ]
    },
    step_34: {
        theme: 'КК: РСВ',
        text: `<mark class="span-blue">Выясни причину и проведи <a href="https://weboffice.tinkoff.ru/rest/user-guide-files/7804?sale_procedure_objection">работу с возражениями</a>.
        <br>Расскажи о преимуществах продукта.
        <br>
        <br>Клиент согласен получить карту?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '30'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '35'
            },
        ]
    },
    step_35: {
        theme: 'КК: второй оффер',
        text: `<mark class="span-bold">В задании есть оффер на предложение кредита наличными?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '37'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '36'
            },
        ]
    },
    step_36: {
        theme: 'КК: прощание/оффера нет',
        text: `<mark class="span-blue">Спасибо за уделённое время, со всеми продуктами нашего Банка Вы сможете ознакомиться на сайте tinkoff.ru</mark>
        <br>
        <br><mark class="span-bold">Перейди в закладку <mark class="span-blue">Отказ</mark>, выбери соответствующую причину отказа.
        <br>
        <br>Заверши работу с заданием.</mark>`,
        buttons: []
    },
    step_37: {
        theme: 'КК: РСВ',
        text: `<mark class="span-bold">Предложи клиенту второй оффер. При необходимости проведи 
        <a href="https://weboffice.tinkoff.ru/rest/user-guide-files/7804?sale_procedure_objection">работу с возражениями</a>.
        <br>
        <br>Клиент согласен?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '7'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '36'
            },
        ]
    },
    step_38: {
        theme: 'КК: преимущества',
        text: `<ul><li>Приобретая более дорогой товар, не придется тратить время на оформление кредита в магазине, можно оплатить все картой и даже не переплачивать за счет рассрочки.</li>
        <li>Рассрочка по карте – это тот же беспроцентный кредит на покупку, которым можно пользоваться неограниченное количество раз.</li>
        <li>Рассрочка до 12 месяцев без первоначального взноса, комиссий и переплат в магазинах-партнёрах. Если использовать карту только для рассрочек, то можно пользоваться заемными деньгами практически бесплатно. Рассчитываясь картой, вернете часть потраченного баллами с бонусной программой. Потратив деньги с карты и вернув через какое-то время обратно, снова сможете ими воспользоваться.</li>
        <li>Тратьте деньги с карты, возвращайте и снова пользуйтесь. Кредитная карта стала универсальной за счет рассрочки, беспроцентного периода на покупки и бонусной программы.</li>
        <li>По карте появились новые возможности: Вам стала доступна рассрочка до 12 мес. в магазинах-партнерах. Вам не нужно каждый раз заново обращаться в банк, чтобы получить кредит на покупку, Вы просто пользуетесь картой.</li></ul>`,
        buttons: []
    },
    step_39: {
        theme: 'КН: РСВ (условия кредитования)',
        text: `<mark class="span-bold">Выясни причину и проведи <a href="https://weboffice.tinkoff.ru/rest/user-guide-files/7804?sale_procedure_objection">работу с возражениями</a>
        <mark class="span-red">*</mark>. Расскажи о преимуществах кредита наличными.
        <br>
        <br>Клиент согласен получить кн и документы?</mark>
        <br>
        <br><mark class="span-red">*</mark> Если клиент отказывается от кредита наличными, потому что не устраивают условия, высокая процентная ставка или высокая сумма платежа, 
        в случае, если присутствует информация о возможности предложить премиум-тариф, сообщи:
        <br><mark class="span-blue">Если вы погасите кредит без просрочек и не раньше, чем за половину срока, то мы вернем Вам часть переплаты за кредит. 
        Для возврата Вам будет достаточно обратиться в банк после полного погашения кредита не позднее, чем через три месяца с даты погашения.</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: ''
            },{
                text: 'Нет',
                type: 'negative',
                next_step: '18'
            },
        ]
    },
};

const baseKnDialog = {
    step_1: {
        theme: 'Приветствие',
        text: '<mark class="span-blue">Здравствуйте, меня зовут <ИМЯ>, <mark class="span-red">я представляю Тинькофф Банк. <ФИО></mark>?</mark>',
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '103'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '2'
            }
        ]
    },
    step_103: {
        theme: 'Приоритет по заданию',
        text: '<mark class="span-bold">Озвучь клиенту предложение с учетом приоритета по заданию.</mark><br>',
        buttons: [{
                text: 'Кредит наличными',
                type: 'positive',
                next_step: '6'
            },
            {
                text: 'Кредитная карта',
                type: 'positive',
                next_step: '107'
            }
        ]
    },
    step_107: {
        theme: '',
        text: `<mark class="span-red"><ИО>, <mark class="span-blue"> Банк одобрил Вам</mark> 
        <mark class="span-red">кредитную карту Тинькофф Платинум</mark>, <mark class="span-blue">С которой можно снимать наличные, а значит уже сейчас решить вопросы, на которые требовались деньги. Лимит по карте составляет <mark class="span-red"><лимит руб></mark>, выпустим и доставим карту бесплатно.<br><br>Проведи презентацию карты<br><br><mark class="span-red">Вам будет удобно получить карту <mark class="span-blue">по <адресу><mark class="span-blue">?<br><br><mark class="span-bold">Клиент готов назначить встречу с представителем банка?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '108'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '108'
            }
        ]
    },
    step_108: {
        theme: '',
        text: `Выяcни причину и проведи <mark class="span-blue">работу с возражениями,</mark><br><mark class="span-bold">Расскажи о преимуществах продукта.<br><br>Клиент согласен получить карту?`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '109'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '1012'
            }
        ]
    },
    step_109: {
        theme: '',
        text: `Проверь апплет<mark class="span-green-bold"> Дополнительная информация<br><br><mark class="span-bold">У клиента есть неактивированная кредитная карта, которая будет заблокирована?`,
        buttons: [{
                text: 'Есть',
                type: 'positive',
                next_step: '1010'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '1011'
            }
        ]
    },
    step_1010: {
        theme: '',
        text: `Сообщи:<br><mark class="span-red"><ИО></mark><mark class="span-blue">, обращаю Ваше внимание, что в данном случае Ваша неактивированная кредитная карта будет заблокирована.<br>
        </mark>В апплете<mark class="span-green-bold"> Согласование условий</mark> выбери оффер на <mark class="span-green-bold">кредитную карту</mark>.<br>
        Перейди к <mark class="span-blue">назначению встречи.</mark><br>
        В приоритете предложи клиенту доставку по рабочему адресу.<br><br>
        <mark class="span-bold">Запомни информацию по клиенту!</mark> После перехода к назначению встреч апплет <mark class="span-green-bold">Дополнительная информация</mark> исчезнет!`,
    },
    step_1011: {
        theme: '',
        text: `В апплете<mark class="span-green-bold"> Согласование условий</mark> выбери оффер на <mark class="span-green-bold">кредитную карту</mark>.<br>
        Перейди к <mark class="span-blue">назначению встречи.</mark><br>
        В приоритете предложи клиенту доставку по рабочему адресу.<br><br>
        <mark class="span-bold">Запомни информацию по клиенту!</mark> После перехода к назначению встреч апплет <mark class="span-green-bold">Дополнительная информация</mark> исчезнет!`,
    },
    step_1012: {
        theme: '',
        text: `В задании есть оффер на предложение кредита наличными?`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '1013'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '1014'
            }
        ]
    },
    step_1013: {
        theme: '',
        text: `Предложи клиенту второй оффер. При необходимости проведи <mark class="span-blue">работу с возражениями.</mark><br>
        <br>Клиент согласен?`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '7'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '1014'
            }
        ]
    },
    step_1014: {
        theme: '',
        text: `<mark class="span-blue">Спасибо за уделённое время, со всеми продуктами нашего Банка Вы сможете ознакомиться на сайте tinkoff.ru</mark>.<br>
        Перейди в закладку <mark class="span-green-bold">Отказ</mark>, выбери соответствующую причину отказа.<br>
        Заверши работу с заданием.`,
        buttons: []
    },
    step_2: {
        theme: '3-е лицо',
        text: '<mark class="span-blue">По данному номеру телефона можно услышать <ФИО>?</mark>',
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '3'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '4'
            }
        ]
    },
    step_3: {
        theme: 'Перезвон',
        text: `<mark class="span-bold">Договорись о перезвоне. 
        При выборе даты перезвона обязательно проверь информацию в поле <mark class="span-blue">Дата истечения действия</mark> предложения. 
        Перезвон должен быть назначен не позднее чем за один день до этой даты.</mark>`,
        buttons: []
    },
    step_4: {
        theme: 'Отказ 3-е лицо',
        text: `<mark class="span-bold">Принеси извинения и вежливо попрощайся, перейди в закладку <mark class="span-blue">Отказ</mark>, 
        выбери соответствующую причину отказа <mark class="span-blue">3-е лицо.</mark> Заверши работу с заданием.</mark>`,
        butons: []
    },
    step_6: {
        theme: 'КН: приветствие',
        text: `<mark class="span-blue"><mark class="span-red"><ИО></mark>, банк одобрил Вам кредит наличными с максимальной суммой <mark class="span-red"><максимальная сумма> рублей на 36 месяцев</mark>
        Регулярный платеж составит <mark class="span-red"><Назвать платеж> рублей в месяц.</mark> Воспользуетесь предложением?
        <br>
        <br></mark> <mark class="span-bold">Произведи необходимые расчеты. При необходимости проконсультируй 
        об условиях кредитования.
        <br>
        <br>Клиент согласен получить кредит наличными?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '7'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '17'
            }
        ]
    },
    step_7: {
        theme: 'КН: способ получения кредита',
        text: `<mark class="span-bold">Уточни способы получения кредита.
        <br>
        <br>Есть возможность отправить документы на e-mail?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '9'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '8'
            }
        ]
    },
    step_8: {
        theme: 'КН: назначение встречи',
        text: `<mark class="span-bold">В апплете <mark class="span-blue">Согласование условий</mark> выбери оффер на <mark class="span-blue">кредит наличными</mark>.
        <br>Перейди к назначению встречи.
        <br>Запомни информацию по клиенту! После перехода к назначению встреч апплет <mark class="span-blue">Дополнительная информация исчезнет!</mark>
        <br>   
        <br><mark class="span-red"><ИО>, Вы можете активировать кредит наличными на встрече с представителем. Проценты будут начисляться на всю сумму, сразу после перевода средств на карту. 
        Погашать кредит можно пополняя дебетовую карту.</mark></mark>`,
        buttons: []
    },
    step_9: {
        theme: 'КН: e-mail указан верно?',
        text: `<mark class="span-bold">Сверь с клиентом e-mail.
        <br>
        <br>E-mail указан верно?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '11'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '10'
            }
        ]
    },
    step_10: {
        theme: 'КН: изменение данных',
        text: `<mark class="span-bold">Уточни у клиента, пользуется ли он личным кабинетом/мобильным приложением и предложи самостоятельно изменить адрес электронной 
        почты<mark class="span-red">*</mark>. Договорись о перезвоне.
        <br>
        <br>Если клиент не может самостоятельно изменить e-mail, отправь запрос на изменение данных.</mark>
        <br>
        <br><mark class="span-red">*</mark> Пример фразы: <mark class="span-blue"><ИО>, сейчас в ваших контактных данных указан неактуальный адрес электронной почты. 
        Если вы пользуетесь личным кабинетом на сайте или в мобильном приложении, то сможете моментально изменить его. 
        Что скажете, если я перезвоню Вам через 15 минут и отправлю документы на новый адрес, который Вы укажете в личном кабинете/мобильном приложении?</mark></mark>`,
        buttons: [{
                text: 'Далее',
                type: '',
                next_step: '8'
            },
        ]
    },
    step_11: {
        theme: 'КН: согласен получить документы по e-mail?',
        text: `<mark class="span-bold">Сообщи клиенту, что документы можем отправить на e-mail.
        <br>
        <br>Клиент согласен получить документы по e-mail?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '13'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '12'
            }
        ]
    },
    step_12: {
        theme: 'КН: назначение встречи',
        text: `<mark class="span-bold">В апплете <mark class="span-blue">Согласование условий</mark> выбери оффер на <mark class="span-blue">кредит наличными.</mark>
        <br>
        <br>Перейди к назначению встречи.
        <br>
        <br>Запомни информацию по клиенту! После перехода к назначению встреч апплет <mark class="span-blue">Дополнительная информация исчезнет!</mark></mark>
        <br>
        <br><mark class="span-red"><ИО>, Вы можете активировать кредит наличными на встрече с представителем. 
        Проценты будут начисляться на всю сумму, сразу после перевода средств на карту. Погашать кредит можно пополняя дебетовую карту.</mark>`,
        buttons: []
    },
    step_13: {
        theme: 'КН: согласие с условиями кредитования',
        text: `<mark class="span-bold">Подтверди согласие клиента с условиями кредитования.</mark>
        <br>
        <br><mark class="span-red"><ИО>, погашать кредит можно пополняя дебетовую карту. Вы подтверждаете, что оформляете кредит наличными 
        на <mark class="span-bold span-red"><Сумму></mark> и <mark class="span-bold span-red"><Срок></mark> месяцев с платежом <mark class="span-bold span-red"><Назвать платеж></mark> рублей в месяц?</mark>
        <br>
        <br><mark class="span-bold">Клиент согласен?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '14'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '39'
            }
        ]
    },
    step_14: {
        theme: 'КН: активация',
        text: `<mark class="span-bold">Сообщи (<ins>не настаивая</ins>) клиенту, что у него есть возможность активировать кредит прямо сейчас.
        <br>
        <br>Клиент согласен произвести активацию?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '15'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '16'
            }
        ]
    },
    step_15: {
        theme: 'КН: активация',
        text: `<mark class="span-red"><ИО>, активируя кредит, Вы соглашаетесь с индивидуальными условиями и тарифом.</mark>
        <br>
        <br><mark class="span-bold">Если страховка / кредитные каникулы подключены, добавь:</mark> <mark class="span-red">А также с условиями страхования / кредитных каникул.</mark>
        <br>
        <br><mark class="span-bold">Если подключен овердрафт по карте клиента, добавь:</mark> <mark class="span-red">Обратите внимание, что по Вашей карте будет отключен овердрафт.</mark>
        <br>
        <br><mark class="span-red">Кредит зачислим на счет до конца дня. Проценты будут начисляться на всю сумму, сразу после перевода средств на карту.
        <br>
        <br><mark class="span-bold">Индивидуальные условия и тариф придут клиенту на e-mail.
        <br>
        <br>Заверши работу с заданием.</mark>`,
        buttons: []
    },
    step_16: {
        theme: 'КН: отказ от активации',
        text: `<mark class="span-red"><ИО>, произвести активацию можно будет по звонку в банк или в личном кабинете. 
        Активируя кредит, Вы подтвердите своё согласие с индивидуальными условиями и тарифом.</mark>
        <br>
        <br><mark class="span-bold">Если страховка / кредитные каникулы подключены, добавь:</mark> <mark class="span-red">А также с условиями страхования / кредитных каникул.</mark>
        <br>
        <br><mark class="span-bold">Если подключен овердрафт по карте клиента, добавь:</mark> <mark class="span-red">Обратите внимание, по Вашей карте будет отключен овердрафт.
        <br>
        <br>Кредит зачислим на счет до конца дня, в котором проведена активация. Проценты будут начисляться на всю сумму, сразу после перевода средств на карту.</mark>
        <br>
        <br><mark class="span-bold">Индивидуальные условия и тариф придут клиенту на e-mail.
        <br>
        <br>Заверши работу с заданием.</mark>`,
        buttons: []
    },
    step_17: {
        theme: 'КН: РСВ',
        text: `<mark class="span-bold">Выясни причину и проведи <a href="https://weboffice.tinkoff.ru/rest/user-guide-files/7804?sale_procedure_objection">работу с возражениями</a>
        <mark class="span-red">*</mark>. Расскажи о преимуществах кредита наличными.</mark>
        <br>
        <br><mark class="span-bold">Клиент согласен получить кредит?</mark>
        <br>
        <br><mark class="span-red">*</mark> Если клиент отказывается от кредита наличными, потому что не устраивают условия, высокая процентная ставка или высокая сумма платежа, 
        в случае, если присутствует информация о возможности предложить премиум-тариф, сообщи:
        <br><mark class="span-blue">Если вы погасите кредит без просрочек и не раньше, чем за половину срока, то мы вернем Вам часть переплаты за кредит. 
        Для возврата Вам будет достаточно обратиться в банк после полного погашения кредита не позднее, чем через три месяца с даты погашения.</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '7'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '18'
            }
        ]
    },
    step_18: {
        theme: 'Новая тема',
        text: `<mark class="span-bold">Проверь поле <mark class="span-blue">Дебетовый клиент</mark>
        <br>У клиента есть дебетовая карта банка?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '19'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '27'
            }
        ]
    },
    step_19: {
        theme: 'Выяви потребность',
        text: `Уточни у клиента потребность в дополнительных средствах в ближайшие 2 мес.
        <br>
        <br><mark class="span-bold">Например:</mark> <mark class="span-red"><ИО></mark>, <mark class="span-blue">в ближайшие 2 месяца вам могут потребоваться дополнительные средства?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '20'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '27'
            }
        ]
    },
    step_20: {
        theme: 'КН: предложение для дебетового клиента',
        text: `<mark class="span-bold">Предложи клиенту получить документы, чтобы воспользоваться кредитом наличными в течение 60 дней с момента согласования условий.
        <br>
        <br>Клиент согласен получить документы?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '21'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '27'
            }
        ]
    },
    step_21: {
        theme: 'КН для дебетового клиента: уточнение способа доставки',
        text: `<mark class="span-bold">Уточни способы получения кредита.
        <br>
        <br>Есть возможность отправить документы на e-mail?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '22'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '24'
            }
        ]
    },
    step_22: {
        theme: 'КН для дебетового клиента: e-mail указан верно?',
        text: `<mark class="span-bold">Сверь с клиентом e-mail.
        <br>
        <br>E-mail указан верно?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '23'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '10'
            }
        ]
    },
    step_23: {
        theme: 'КН для дебетового клиента: можем отправить на e-mail',
        text: `<mark class="span-bold">Сообщи клиенту, что документы можем отправить на e-mail.
        <br>
        <br>Клиент согласен получить документы по e-mail?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '25'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '24'
            }
        ]
    },
    step_24: {
        theme: 'КН для дебетового клиента:',
        text: `<mark class="span-bold">В апплете <mark class="span-blue">Согласование условий</mark> выбери оффер на <mark class="span-blue">кредит наличными.</mark>
        <br>Перейди к назначению встречи.
        <br>
        <br>Запомни информацию по клиенту! После перехода к назначению встреч апплет <mark class="span-blue">Дополнительная информация</mark> исчезнет!</mark>
        <br>
        <br><mark class="span-red"><ИО>, произвести активацию можно будет по звонку в банк или в личном кабинете. 
        Проценты будут начисляться на всю сумму, сразу после перевода средств на карту. Погашать кредит можно, пополняя дебетовую карту.</mark>`,
        buttons: []
    },
    step_25: {
        theme: 'КН для дебетового клиента: согласие с условиями кредитования',
        text: `<mark class="span-bold">Подтверди согласие клиента с условиями кредитования.</mark>
        <br>
        <br><mark class="span-red"><ИО>, погашать кредит можно пополняя дебетовую карту. Вы подтверждаете, что оформляете кредит наличными на 
        <mark class="span-bold"><Сумму></mark> и  <mark class="span-bold"><Срок></mark> месяцев с платежом  <mark class="span-bold"><Назвать платеж></mark> рублей в месяц?</mark>
        <br>
        <br><mark class="span-bold">Клиент согласен?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '16'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '26'
            }
        ]
    },
    step_26: {
        theme: '',
        text: `<mark class="span-bold">Проведи <a href="https://weboffice.tinkoff.ru/rest/user-guide-files/7804?sale_procedure_objection">работу с возражениями</a>.
        <br>
        <br>Клиент согласен получить КН и документы?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '16'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '27'
            }
        ]
    },
    step_27: {
        theme: 'КН: второй оффер',
        text: `<mark class="span-bold">В задании есть оффер на предложение кредитной карты?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '28'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '29'
            }
        ]
    },
    step_28: {
        theme: 'КН: второй оффер',
        text: `<mark class="span-bold">Предложи клиенту второй оффер. При необходимости проведи 
        <a href="https://weboffice.tinkoff.ru/rest/user-guide-files/7804?sale_procedure_objection">работу с возражениями</a>.
        <br>
        <br>Клиент согласен?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '30'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '29'
            }
        ]
    },
    step_29: {
        theme: 'КН: отказ',
        text: `<mark class="span-blue">Спасибо за уделённое время, если Вы все же заинтересуетесь, можете позвонить в Банк или оформить заявку на сайте tinkoff.ru</mark>
        <br>
        <br><mark class="span-bold">Перейди в закладку <mark class="span-blue">Отказ</mark>, выбери соответствующую причину отказа.
        <br>
        <br>Заверши работу с заданием.</mark>`,
        buttons: []
    },
    step_30: {
        theme: 'КК: дополнительная информация',
        text: `<mark class="span-bold">Проверь апплет <mark class="span-blue">Дополнительная информация</mark>
        <br>
        <br>У клиента есть не активированная кредитная карта, которая будет заблокирована?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '31'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '32'
            }
        ]
    },
    step_31: {
        theme: 'КК: предупреждение',
        text: `<mark class="span-red"><ИО>, обращаю Ваше внимание, что в данном случае Ваша не активированная кредитная карта будет заблокирована.</mark>`,
        buttons: [{
                text: 'Далее',
                type: '',
                next_step: '32'
            },
        ]
    },
    step_32: {
        theme: 'КК: назначение встречи',
        text: `<mark class="span-bold">В апплете <mark class="span-blue">Согласование условий</mark> выбери оффер на <mark class="span-blue">кредитную карту.</mark>
        Перейди к назначению встречи.
        <br>
        <br>В приоритете предложи клиенту доставку по рабочему адресу.
        <br>
        <br>Запомни информацию по клиенту! После перехода к назначению встреч апплет <mark class="span-blue">Дополнительная информация</mark> исчезнет!</mark>`,
        buttons: []
    },
    step_33: {
        theme: 'КК: приветствие',
        text: `<mark class="span-red"><ИО>, <mark class="span-blue">ранее Вы оформляли кредитную карту нашего банка. Сейчас Банк одобрил Вам</mark> 
        кредитную карту Тинькофф Платинум, <mark class="span-blue">выпустим и доставим карту бесплатно.</mark>
        Вам будет удобно получить карту <mark class="span-blue">по <адресу></mark>?<mark class="span-red">Для назначения встречи нужно подтвердить Ваш доход.</mark></mark>
        <br>
        <br><mark class="span-bold">Клиент готов назначить встречу с представителем банка?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '30'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '34'
            },
            {
                text: 'Преимущества',
                type: '',
                next_step: '38'
            }
        ]
    },
    step_34: {
        theme: 'КК: РСВ',
        text: `<mark class="span-blue">Выясни причину и проведи <a href="https://weboffice.tinkoff.ru/rest/user-guide-files/7804?sale_procedure_objection">работу с возражениями</a>.
        <br>Расскажи о преимуществах продукта.
        <br>
        <br>Клиент согласен получить карту?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '30'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '35'
            },
        ]
    },
    step_35: {
        theme: 'КК: второй оффер',
        text: `<mark class="span-bold">В задании есть оффер на предложение кредита наличными?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '37'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '36'
            },
        ]
    },
    step_36: {
        theme: 'КК: прощание/оффера нет',
        text: `<mark class="span-blue">Спасибо за уделённое время, со всеми продуктами нашего Банка Вы сможете ознакомиться на сайте tinkoff.ru</mark>
        <br>
        <br><mark class="span-bold">Перейди в закладку <mark class="span-blue">Отказ</mark>, выбери соответствующую причину отказа.
        <br>
        <br>Заверши работу с заданием.</mark>`,
        buttons: []
    },
    step_37: {
        theme: 'КК: РСВ',
        text: `<mark class="span-bold">Предложи клиенту второй оффер. При необходимости проведи 
        <a href="https://weboffice.tinkoff.ru/rest/user-guide-files/7804?sale_procedure_objection">работу с возражениями</a>.
        <br>
        <br>Клиент согласен?</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: '7'
            },
            {
                text: 'Нет',
                type: 'negative',
                next_step: '36'
            },
        ]
    },
    step_38: {
        theme: 'КК: преимущества',
        text: `<ul><li>Приобретая более дорогой товар, не придется тратить время на оформление кредита в магазине, можно оплатить все картой и даже не переплачивать за счет рассрочки.</li>
        <li>Рассрочка по карте – это тот же беспроцентный кредит на покупку, которым можно пользоваться неограниченное количество раз.</li>
        <li>Рассрочка до 12 месяцев без первоначального взноса, комиссий и переплат в магазинах-партнёрах. Если использовать карту только для рассрочек, то можно пользоваться заемными деньгами практически бесплатно. Рассчитываясь картой, вернете часть потраченного баллами с бонусной программой. Потратив деньги с карты и вернув через какое-то время обратно, снова сможете ими воспользоваться.</li>
        <li>Тратьте деньги с карты, возвращайте и снова пользуйтесь. Кредитная карта стала универсальной за счет рассрочки, беспроцентного периода на покупки и бонусной программы.</li>
        <li>По карте появились новые возможности: Вам стала доступна рассрочка до 12 мес. в магазинах-партнерах. Вам не нужно каждый раз заново обращаться в банк, чтобы получить кредит на покупку, Вы просто пользуетесь картой.</li></ul>`,
        buttons: []
    },
    step_39: {
        theme: 'КН: РСВ (условия кредитования)',
        text: `<mark class="span-bold">Выясни причину и проведи <a href="https://weboffice.tinkoff.ru/rest/user-guide-files/7804?sale_procedure_objection">работу с возражениями</a>
        <mark class="span-red">*</mark>. Расскажи о преимуществах кредита наличными.
        <br>
        <br>Клиент согласен получить кн и документы?</mark>
        <br>
        <br><mark class="span-red">*</mark> Если клиент отказывается от кредита наличными, потому что не устраивают условия, высокая процентная ставка или высокая сумма платежа, 
        в случае, если присутствует информация о возможности предложить премиум-тариф, сообщи:
        <br><mark class="span-blue">Если вы погасите кредит без просрочек и не раньше, чем за половину срока, то мы вернем Вам часть переплаты за кредит. 
        Для возврата Вам будет достаточно обратиться в банк после полного погашения кредита не позднее, чем через три месяца с даты погашения.</mark>`,
        buttons: [{
                text: 'Да',
                type: 'positive',
                next_step: ''
            },{
                text: 'Нет',
                type: 'negative',
                next_step: '18'
            },
        ]
    },
}