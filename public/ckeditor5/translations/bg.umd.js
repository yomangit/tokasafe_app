/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'bg' ]: { dictionary, getPluralForm } } = {"bg":{"dictionary":{"Words: %0":"Думи: %0","Characters: %0":"Знаци: %0","Widget toolbar":"Лента с помощни средства","Insert paragraph before block":"Въведи параграф преди блока","Insert paragraph after block":"Въведи параграф след блока","Press Enter to type after or press Shift + Enter to type before the widget":"Натиснете Enter за въвеждане или натиснете Shift + Enter за въвеждане преди изпълнимия модул","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Клавишни комбинации, които могат да се използват при избран елемент (например: изображение, таблица и др.)","Insert a new paragraph directly after a widget":"Въвеждане на нов параграф директно след елемента","Insert a new paragraph directly before a widget":"Въвеждане на нов параграф директно преди елемента","Move the caret to allow typing directly before a widget":"Преместване на карето за директно писане преди елемент","Move the caret to allow typing directly after a widget":"Преместване на карето за директно писане след елемент","Move focus from an editable area back to the parent widget":"Преместване на фокуса от област с възможност за редактиране обратно към родителския изпълним модукл","Upload in progress":"Качването е в процес","Undo":"Отмени","Redo":"Повтори","Rich Text Editor":"Богат текстов редактор","Edit block":"Редактирай блок","Click to edit block":"Кликнете, за да редактирате блок","Drag to move":"Плъзнете за преместване","Next":"Следващ","Previous":"Предишен","Editor toolbar":"Лента за редакция","Dropdown toolbar":"Лента с падащо меню","Dropdown menu":"Падащо меню","Black":"Черен","Dim grey":"Тъмно сив","Grey":"Сив","Light grey":"Светло сив","White":"Бял","Red":"Червен","Orange":"Оранжев","Yellow":"Жълт","Light green":"Светло зелен","Green":"Зелен","Aquamarine":"Аквамарин","Turquoise":"Тюркоазен","Light blue":"Светло син","Blue":"Син","Purple":"Лилав","Editor block content toolbar":"Лента с инструменти за блокиране на съдържанието на редактора","Editor contextual toolbar":"Контекстна лента с инструменти на редактора","HEX":"НЕХ","No results found":"Няма намерени резултати","No searchable items":"Няма елементи за търсене","Editor dialog":"Диалогов прозорец на редактора","Close":"Затвори","Help Contents. To close this dialog press ESC.":"Помощно съдържание. За да затворите този прозорец, натиснете ESC.","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Долу можете да намерите списък от клавишни комбинации, които могат да се използват в редактора.","(may require <kbd>Fn</kbd>)":"(може да изисква <kbd>Fn</kbd>)","Accessibility":"Достъпност","Accessibility help":"Помощ за достъпност","Press %0 for help.":"Натиснете %0 за помощ.","Move focus in and out of an active dialog window":"Приближаване и отдалечаване на фокуса в активен диалогов прозорец","MENU_BAR_MENU_FILE":"Файл","MENU_BAR_MENU_EDIT":"Редактирай","MENU_BAR_MENU_VIEW":"Преглед","MENU_BAR_MENU_INSERT":"Вмъкни","MENU_BAR_MENU_FORMAT":"Формат","MENU_BAR_MENU_TOOLS":"Инструменти","MENU_BAR_MENU_HELP":"Помощ","MENU_BAR_MENU_TEXT":"Текст","MENU_BAR_MENU_FONT":"Шрифт","Editor menu bar":"Редактор на лентата с менюта","Please enter a valid color (e.g. \"ff0000\").":"Моля, въведете валиден цвят (напр. \"ff0000\").","Insert table":"Вмъкни таблица","Header column":"Заглавна колона","Insert column left":"Вмъкни колона отляво","Insert column right":"Вмъкни колона отдясно","Delete column":"Изтриване на колона","Select column":"Избери колона","Column":"Колона","Header row":"Заглавен ред","Insert row below":"Вмъкни ред отдолу","Insert row above":"Вмъкни ред отгоре","Delete row":"Изтриване на ред","Select row":"Избери ред","Row":"Ред","Merge cell up":"Обединяване на клетка отгоре","Merge cell right":"Обединяване на клетка отдясно","Merge cell down":"Обединяване на клетка надолу","Merge cell left":"Обединяване на клетка отляво","Split cell vertically":"Разделяне на клетки вертикално","Split cell horizontally":"Разделяне на клетки хоризонтално","Merge cells":"Обединяване на клетки","Table toolbar":"Лента за таблици","Table properties":"Свойства на таблици","Cell properties":"Свойства на клетки","Border":"Граница","Style":"Стил","Width":"Ширина","Height":"Височина","Color":"Цвят","Background":"Фон","Padding":"Пълнеж","Dimensions":"Размери","Table cell text alignment":"Подравняване на текст в клетка","Alignment":"Подравняване","Horizontal text alignment toolbar":"Лента за хоризонтално подравняване на текст","Vertical text alignment toolbar":"Лента за вертикално подравняване на текст","Table alignment toolbar":"Лента за подравняване на таблици","None":"Нищо","Solid":"Твърд","Dotted":"На точки","Dashed":"На черти","Double":"Двоен","Groove":"На зиг-заг","Ridge":"Назъбен","Inset":"Вмъкни","Outset":"Изпъкнала","Align cell text to the left":"Подравни текста в клетката наляво","Align cell text to the center":"Подравни текста в клетката централно","Align cell text to the right":"Подравни текста в клетката надясно","Justify cell text":"Разпредели равномерно текста в клетката","Align cell text to the top":"Подравни текста в клетката нагоре","Align cell text to the middle":"Подравни текста в клетката към средата","Align cell text to the bottom":"Подравни текста в клетката към дъното","Align table to the left":"Подравни таблицата наляво","Center table":"Центрирай таблицата","Align table to the right":"Подравни таблицата надясно","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"Цветът е невалиден. Опитайте \"#FF0000\" или \"rgb(255,0,0)\", или \"red\".","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"Стойността е невалидна. Опитайте \"10px\" или \"2em\", или просто \"2\".","Enter table caption":"Въведи надпис на таблица","Keystrokes that can be used in a table cell":"Клавишни комбинации, които могат да се използват в клетка от таблицата","Move the selection to the next cell":"Преместване на избора към следващата клетка","Move the selection to the previous cell":"Преместване на избора към предишната клетка","Insert a new table row (when in the last cell of a table)":"Въвеждане на нов ред в таблицата (когато сте в последната клетка на таблица)","Navigate through the table":"Навигация в таблицата","Table":"Маса","Styles":"Стилове","Multiple styles":"Множество стилове","Block styles":"Блокови стилове","Text styles":"Текстови стилове","Special characters":"Специални символи","Category":"Категория","All":"Всички","Arrows":"Стрелки","Currency":"Валутни символи","Latin":"Латиница","Mathematical":"Математически символи","Text":"Текст","leftwards simple arrow":"обикновена стрелка наляво","rightwards simple arrow":"обикновена стрелка надясно","upwards simple arrow":"обикновена стрелка нагоре","downwards simple arrow":"обикновена стрелка надолу","leftwards double arrow":"двойна стрелка наляво","rightwards double arrow":"двойна стрелка надясно","upwards double arrow":"двойна стрелка нагоре","downwards double arrow":"двойна стрелка надолу","leftwards dashed arrow":"пунктирана стрелка наляво","rightwards dashed arrow":"пунктирана стрелка надясно","upwards dashed arrow":"пунктирана стрелка нагоре","downwards dashed arrow":"пунктирана стрелка надолу","leftwards arrow to bar":"стрелка наляво към лентата\n","rightwards arrow to bar":"стрелка надясно към лентата","upwards arrow to bar":"стрелка нагоре към лентата","downwards arrow to bar":"стрелка надолу към лентата","up down arrow with base":"стрелка нагоре надолу с основа","back with leftwards arrow above":"назад със стрелка наляво отгоре","end with leftwards arrow above":"завършва със стрелка наляво отгоре","on with exclamation mark with left right arrow above":"върху с удивителен знак със стрелка наляво надясно над","soon with rightwards arrow above":"скоро със стрелка надясно отгоре","top with upwards arrow above":"отгоре със стрелка нагоре отгоре","Dollar sign":"Символ на долар","Euro sign":"Символ на евро","Yen sign":"Символ на йена","Pound sign":"Символ на лира стерлинг","Cent sign":"Символ на цент","Euro-currency sign":"Символ на евровалута","Colon sign":"Символ двоеточие","Cruzeiro sign":"Символ Крузейро","French franc sign":"Символ на френски франк","Lira sign":"Символ на лира","Currency sign":"Символ на валута","Bitcoin sign":"Символ на Биткойн","Mill sign":"Символ на мелница","Naira sign":"Символ Найра","Peseta sign":"Символ на песета","Rupee sign":"Символ на рупия","Won sign":"Символ на уон","New sheqel sign":"Символ на нов шекел","Dong sign":"Символ на донг","Kip sign":"Символ на кип","Tugrik sign":"Символ на тугрик","Drachma sign":"Символ на драхма","German penny sign":"Символ на немско пени","Peso sign":"Символ на песо","Guarani sign":"Символ на гуарани","Austral sign":"Символ на аустрал","Hryvnia sign":"Символ на гривнa","Cedi sign":"Символ Седи","Livre tournois sign":"Символ на ливр турноа","Spesmilo sign":"Символ на спесмило","Tenge sign":"Символ на тенге","Indian rupee sign":"Символ на индийска рупия","Turkish lira sign":"Символ на турска лира","Nordic mark sign":"Символ на скандинавски знак","Manat sign":"Символ на манат","Ruble sign":"Символ на рубла","Latin capital letter a with macron":"Главна латинска буква „a“ с макрон","Latin small letter a with macron":"Малка латинска буква „a“ с макрон","Latin capital letter a with breve":"Главна латинска буква „a“ с бреве","Latin small letter a with breve":"Малка латинска буква „а“ с бреве","Latin capital letter a with ogonek":"Главна латинска буква „a“ с огонек","Latin small letter a with ogonek":"Малка латинска буква „a“ с огонек","Latin capital letter c with acute":"Главна латинска буква „c“ с акут","Latin small letter c with acute":"Малка латинска буква „c“ с акут","Latin capital letter c with circumflex":"Главна латинска буква „c“ с циркумфлекс","Latin small letter c with circumflex":"Малка латинска буква „c“ с циркумфлекс","Latin capital letter c with dot above":"Главна латинска буква „c“ с точка отгоре","Latin small letter c with dot above":"Малка латинска буква „c“ с точка отгоре","Latin capital letter c with caron":"Главна латинска буква „c“ с карон","Latin small letter c with caron":"Mалка латинска буква „c“ с карон","Latin capital letter d with caron":"Главна латинска буква d с карон","Latin small letter d with caron":"Малка латинска буква d с карон","Latin capital letter d with stroke":"Главна латинска буква d с черта","Latin small letter d with stroke":"Малк а латинска буква d с черта","Latin capital letter e with macron":"Главна латинска буква „e“ с макрон","Latin small letter e with macron":"Малка латинска буква „e“ с макрон","Latin capital letter e with breve":"Главна латинска буква „e“ с бреве","Latin small letter e with breve":"Малка латинска буква „e“ с бреве","Latin capital letter e with dot above":"Главна латинска буква „e“ с точка отгоре","Latin small letter e with dot above":"Малка латинска буква „e“ с точка отгоре","Latin capital letter e with ogonek":"Главна латинска буква „e“ с огонек","Latin small letter e with ogonek":"Малка латинска буква „e“ с огонек","Latin capital letter e with caron":"Главна латинска буква „e“ с карон","Latin small letter e with caron":"Малка латинска буква „e“ с карон","Latin capital letter g with circumflex":"Главна латинска буква „g“ с циркумфлекс","Latin small letter g with circumflex":"Малка латинска буква „g“ с циркумфлекс","Latin capital letter g with breve":"Главна латинска буква „g“ с бреве","Latin small letter g with breve":"Малка латинска буква „g“ с бреве","Latin capital letter g with dot above":"Главна латинска буква „g“ с точка отгоре","Latin small letter g with dot above":"Малка латинска буква „g“ с точка отгоре","Latin capital letter g with cedilla":"Главна латинска буква „g“ със седил","Latin small letter g with cedilla":"Малка латинска буква „g“ със седил","Latin capital letter h with circumflex":"Главна латинска буква h с циркумфлекс","Latin small letter h with circumflex":"Малка латинска буква h с циркумфлекс","Latin capital letter h with stroke":"Главна латинска буква h с черта","Latin small letter h with stroke":"Малка латинска буква h с черта","Latin capital letter i with tilde":"Главна латинска буква i с тилда","Latin small letter i with tilde":"Малка латинска буква i с тилда","Latin capital letter i with macron":"Главна латинска буква i с макрон","Latin small letter i with macron":"Малка латинска буква i с макрон","Latin capital letter i with breve":"Главна латинска буква i с бреве","Latin small letter i with breve":"Малка латинска буква i с бреве","Latin capital letter i with ogonek":"Главна латинска буква i с ogonek","Latin small letter i with ogonek":"Малка латинска буква i с огонек","Latin capital letter i with dot above":"Главна латинска буква i с точка отгоре","Latin small letter dotless i":"Малка латинска буква без точка i","Latin capital ligature ij":"Главна латинска лигатура ij","Latin small ligature ij":"Mалка латинска лигатура ij","Latin capital letter j with circumflex":"Главна латинска буква j с циркумфлекс","Latin small letter j with circumflex":"Малка латинска буква j с циркумфлекс","Latin capital letter k with cedilla":"Главна латинска буква k със седил","Latin small letter k with cedilla":"Mалка lатинска буква k със седил","Latin small letter kra":"Mалка латинска буква kra","Latin capital letter l with acute":"Главна латинска буква l с акут","Latin small letter l with acute":"Mалка латинска буква l с акут","Latin capital letter l with cedilla":"Главна латинска буква l със седил","Latin small letter l with cedilla":"Малка латинска буква l със седил","Latin capital letter l with caron":"Главна латинска буква l с карон","Latin small letter l with caron":"Малка латинска буква l с карон","Latin capital letter l with middle dot":"Главна латинска буква l със средна точка","Latin small letter l with middle dot":"Малка латинска буква l със средна точка","Latin capital letter l with stroke":"Главна латинска буква l с черта","Latin small letter l with stroke":"Малка латинска буква l с черта","Latin capital letter n with acute":"Главна латинска буква n с акут","Latin small letter n with acute":"Малка латинска буква n с акут","Latin capital letter n with cedilla":"Главна латинска буква n със седил","Latin small letter n with cedilla":"Малка латинска буква n със седил","Latin capital letter n with caron":"Главна латинска буква n с карон","Latin small letter n with caron":"Малка латинска буква n с карон","Latin small letter n preceded by apostrophe":"Малка латинска буква n, предшествана от апостроф","Latin capital letter eng":"Главна латинска буква eng","Latin small letter eng":"Малка латинска буква eng","Latin capital letter o with macron":"Главна латинска буква „o“ с макрон","Latin small letter o with macron":"Малка латинска буква „o“ с макрон","Latin capital letter o with breve":"Главна латинска буква „o“ с бреве","Latin small letter o with breve":"Малка латинска буква „o“ с бреве","Latin capital letter o with double acute":"Главна латинска буква „o“ с двоен акут","Latin small letter o with double acute":"Малка латинска буква „o“ с двоен акут","Latin capital ligature oe":"Главна латинска лигатура oe","Latin small ligature oe":"Малка латинска лигатура oe","Latin capital letter r with acute":"Главна латинска буква r с акут","Latin small letter r with acute":"Малка латинска буква r с акут","Latin capital letter r with cedilla":"Главна латинска буква r със седил","Latin small letter r with cedilla":"Малка латинска буква r със седил","Latin capital letter r with caron":"Главна латинска буква r с карон","Latin small letter r with caron":"Малка латинска буква r с карон","Latin capital letter s with acute":"Главна латинска буква s с акут","Latin small letter s with acute":"Малка латинска буква s с акут","Latin capital letter s with circumflex":"Главна латинска буква s с циркумфлекс","Latin small letter s with circumflex":"Малка латинска буква s с циркумфлекс","Latin capital letter s with cedilla":"Главна латинска буква s със седил","Latin small letter s with cedilla":"Малка латинска буква s със седил","Latin capital letter s with caron":"Главна латинска буква s с карон","Latin small letter s with caron":"Малка латинска буква s с карон","Latin capital letter t with cedilla":"Главна латинска буква t със седил","Latin small letter t with cedilla":"Малка латинска буква t със седил","Latin capital letter t with caron":"Главна латинска буква t с карон","Latin small letter t with caron":"Малка латинска буква t с карон","Latin capital letter t with stroke":"Главна латинска буква t с черта","Latin small letter t with stroke":"Малка латинска буква t с черта","Latin capital letter u with tilde":"Главна латинска буква u с тилда","Latin small letter u with tilde":"Малка латинска буква u с тилда","Latin capital letter u with macron":"Главна латинска буква u с макрон","Latin small letter u with macron":"Малка латинска буква u с макрон","Latin capital letter u with breve":"Главна латинска буква u с бреве","Latin small letter u with breve":"Малка латинска буква u с бреве","Latin capital letter u with ring above":"Главна латинска буква u с пръстен отгоре","Latin small letter u with ring above":"Малка латинска буква u с пръстен отгоре","Latin capital letter u with double acute":"Главна латинска буква u с двоен акут","Latin small letter u with double acute":"Малка латинска буква u с двоен акут","Latin capital letter u with ogonek":"Главна латинска буква u с огонек","Latin small letter u with ogonek":"Малка латинска буква u с огонек","Latin capital letter w with circumflex":"Главна латинска буква w с циркумфлекс","Latin small letter w with circumflex":"Малка латинска буква w с циркумфлекс","Latin capital letter y with circumflex":"Главна латинска буква y с циркумфлекс","Latin small letter y with circumflex":"Малка латинска буква y с циркумфлекс","Latin capital letter y with diaeresis":"Главна латинска буква y с диареза","Latin capital letter z with acute":"Главна латинска буква z с акут","Latin small letter z with acute":"Малка латинска буква z с акут","Latin capital letter z with dot above":"Главна латинска буква z с точка отгоре","Latin small letter z with dot above":"Малка латинска буква z с точка отгоре","Latin capital letter z with caron":"Главна латинска буква z с карон","Latin small letter z with caron":"Малка латинска буква z с карон","Latin small letter long s":"Малка латинска буква дълго s","Less-than sign":"Знак „по-малко от“ ","Greater-than sign":"Знак „по-голямо от“","Less-than or equal to":"По-малко или равно на","Greater-than or equal to":"По-голямо или равно на","En dash":"Ен тире","Em dash":"Ем тире","Macron":"Макрон","Overline":"Черта над буква","Degree sign":"Знак за степен","Minus sign":"Знак минус","Plus-minus sign":"Знак плюс-минус","Division sign":"Знак за деление","Fraction slash":"Дробна наклонена черта","Multiplication sign":"Знак за умножение","Latin small letter f with hook":"Малка латинска буква f с кукичка","Integral":"Интеграл","N-ary summation":"N-арно сумиране","Infinity":"Безкрайност","Square root":"Корен квадратен","Tilde operator":"Оператор тилда","Approximately equal to":"Приблизително равно на","Almost equal to":"Почти равно на","Not equal to":"Не е равно на","Identical to":"Идентично на","Element of":"Елемент на","Not an element of":"Не е елемент от","Contains as member":"Съдържа като член","N-ary product":"N-арен продукт","Logical and":"Логично и","Logical or":"Логично или","Not sign":"Знак „не“","Intersection":"Пресечна точка","Union":"Съюз","Partial differential":"Частичен диференциал","For all":"За всички","There exists":"Съществува","Empty set":"Празен комплект","Nabla":"Набла","Asterisk operator":"Оператор звездичка","Proportional to":"Пропорционално на","Angle":"Ъгъл","Vulgar fraction one quarter":"Проста дроб една четвърт","Vulgar fraction one half":"Проста дроб една половина","Vulgar fraction three quarters":"Проста дроб три четвърти","Single left-pointing angle quotation mark":"\nЕдинична сочеща наляво ъглова кавичка","Single right-pointing angle quotation mark":"Единична сочеща надясно ъглова кавичка","Left-pointing double angle quotation mark":"Сочеща наляво двойна ъглова кавичка","Right-pointing double angle quotation mark":"Сочеща надясно двойна ъглова кавичка","Left single quotation mark":"Лява единична кавичка","Right single quotation mark":"Дясна единична кавичка","Left double quotation mark":"Лява двойна кавичка","Right double quotation mark":"Дясна двойна кавичка","Single low-9 quotation mark":"Единична ниска 9-кавичка","Double low-9 quotation mark":"Двойна ниска 9-кавичка","Inverted exclamation mark":"Обърнат удивителен знак","Inverted question mark":"Обърнат въпросителен знак","Two dot leader":"Водач с две точки","Horizontal ellipsis":"Хоризонтална елипса","Double dagger":"Двойна кама","Per mille sign":"Знак за промили","Per ten thousand sign":"Символ на десет хиляди","Double exclamation mark":"Двоен удивителен знак","Question exclamation mark":"Знак въпросителна удивителна","Exclamation question mark":"Знак удивителна въпросителна","Double question mark":"Двоен въпросителен знак","Copyright sign":"Знак за авторски права","Registered sign":"Регистриран знак","Trade mark sign":"Знак за търговска марка","Section sign":"Знак за раздел","Paragraph sign":"Знак за параграф","Reversed paragraph sign":"Обърнат знак за параграф","Source":"Източник","Show source":"Показване на източника","Show blocks":"Покажи блокове","Select all":"Избери всички","Disable editing":"Изключи възможност за редакция","Enable editing":"Разреши възможност за редакция ","Previous editable region":"Предишен регион с възможнос за редакция","Next editable region":"Следващ регион с възможност за редакция","Navigate editable regions":"Навигация между региони с възможност за редакция","Remove Format":"Премахни форматиране","Page break":"Край на страница","media widget":"Медиен компонент","Media URL":"Медиен уеб адрес","Paste the media URL in the input.":"Постави медииния уеб адрес във входа.","Tip: Paste the URL into the content to embed faster.":"Полезен съвет: Постави уеб адреса в съдържанието, за да вградите по-бързо.","The URL must not be empty.":"Уеб адресът не трябва да бъде празен.","This media URL is not supported.":"Този медиен уеб адрес не се поддържа.","Insert media":"Вмъкни медия","Media":"Медия","Media toolbar":"Лента със задачи за медия","Open media in new tab":"Отворете мултимедията в нов раздел","Numbered List":"Номериране","Bulleted List":"Водещи символи","To-do List":"Списък със задачи","Bulleted list styles toolbar":"Лента със стилове за подточки","Numbered list styles toolbar":"Лента със стилове за номерация","Toggle the disc list style":"Превключи между стиловете на дисковия списък ","Toggle the circle list style":"Превключи между стиловете на кръговия списък","Toggle the square list style":"Превключи между стиловете на квадратния списък","Toggle the decimal list style":"Превключи между стиловете на десетичния списък","Toggle the decimal with leading zero list style":"Превключи между стиловете на десетичния списък с начало нула","Toggle the lower–roman list style":"Превключи между стиловете на долен-римски списък","Toggle the upper–roman list style":"Превключи между стиловете на горен-римски списък","Toggle the lower–latin list style":"Превключи между стиловете на долен-латиснки списък","Toggle the upper–latin list style":"Превключи между стиловете на горен-латински списък","Disc":"Диск","Circle":"Кръг","Square":"Квадрат","Decimal":"Десетичен","Decimal with leading zero":"Десетичен с водеща нула","Lower–roman":"Долен-римски","Upper-roman":"Горен-римски","Lower-latin":"Долен-латински","Upper-latin":"Горен-латински","List properties":"Свойства на списъка","Start at":"Започни с","Invalid start index value.":"Невалидна стойност на начален индекс.","Start index must be greater than 0.":"Стартовия индекс трябва да е по-голям от 0.","Reversed order":"Обърнат ред","Keystrokes that can be used in a list":"Клавишни комбинации, които могат да се използват в списък","Increase list item indent":"Увеличаване на шрифта на елемент от списъка","Decrease list item indent":"Намаляване на шрифта на елемент от списъка","Entering a to-do list":"Въвеждане на списък със задачи","Leaving a to-do list":"Напускане на списъка със задачи","Unlink":"Премахване на линка","Link":"Линк","Link URL":"Уеб адрес на линка","Link URL must not be empty.":"URL препратката не трябва да е празна.","Link image":"Свържи изображение","Edit link":"Редакция на линк","Open link in new tab":"Отваряне на линк в нов раздел","This link has no URL":"Този линк няма уеб адрес","Open in a new tab":"Отваряне в нов раздел","Downloadable":"Изтегляне","Create link":"Създаване на линк","Move out of a link":"Излизане от линк","Scroll to target":"Превъртете до целта","Language":"Език","Choose language":"Избери език","Remove language":"Премахни език","Increase indent":"Увеличи отстъпа","Decrease indent":"Намали отстъпа","image widget":"Компонент за изображение","Wrap text":"Събери текст","Break text":"Раздели текст","In line":"В линия","Side image":"Странично изображение","Full size image":"Изображение в пълен размер","Left aligned image":"Изображение подравнено вляво","Centered image":"Центрирано изображение","Right aligned image":"Изображение подравнено вдясно","Change image text alternative":"Промени изображението на текстовата алтернатива","Text alternative":"Текстова алтернатива","Enter image caption":"Въведи описание на изображението","Insert image":"Вмъкни изображение","Replace image":"Замяна на изображението","Upload from computer":"Качете от компютър","Replace from computer":"Заменете от компютър","Upload image from computer":"Качване на изображение от компютър","Image from computer":"Изображение от компютър","From computer":"От компютър","Replace image from computer":"Замяна на изображение от компютър","Upload failed":"Качването е неуспешно","You have no image upload permissions.":"Нямате разрешения за публикуване на изображения.","Image toolbar":"Лента с изображения","Resize image":"Промени размера на изображението","Resize image to %0":"Промени размера на изображението на %0","Resize image to the original size":"Възстанови оригиналния размер на изображението","Resize image (in %0)":"Промени размера на изображението (in %0)","Original":"Оригинал","Custom image size":"Потребителски размер на изображението","Custom":"Потребителски","Image resize list":"Списък с промените на размера на изображението","Insert image via URL":"Въведи изображение чрез URL","Insert via URL":"Вмъкване чрез URL","Image via URL":"Изображение чрез URL","Via URL":"Чрез URL","Update image URL":"Обнови URL на изображението","Caption for the image":"Заглавие на изображението","Caption for image: %0":"Заглавие на изображението: %0","The value must not be empty.":"Стойността не трябва да е празна.","The value should be a plain number.":"Стойността трябва да бъде просто число.","Uploading image":"Качване на изображение","Image upload complete":"Качването на изображение е завършено","Error during image upload":"Грешка по време на качването на изображение","Image":"Изображение","HTML object":"HTML обект","Insert HTML":"Въведи HTML","HTML snippet":"съкратен HTML","Paste raw HTML here...":"Постави суров HTML тук...","Edit source":"Редактирай източник","Save changes":"Запази промените","No preview available":"Не е наличен преглед","Empty snippet content":"Изпразни съдържанието на съкращението","Horizontal line":"Хоризонтална черта","Yellow marker":"Жълт маркер","Green marker":"Зелен маркер","Pink marker":"Розов маркер","Blue marker":"Син маркер","Red pen":"Червена химикалка","Green pen":"Зелена химикалка","Remove highlight":"Премахни подчертаване","Highlight":"Подчертай","Text highlight toolbar":"Лента за подчертаване на текст","Heading":"Заглавие","Choose heading":"Избери заглавие","Heading 1":"Заглавие 1","Heading 2":"Заглавие 2","Heading 3":"Заглавие 3","Heading 4":"Заглавие 4","Heading 5":"Заглавие 5","Heading 6":"Заглавие 6","Type your title":"Напишете заглавието си","Type or paste your content here.":"Напишете или поставете съдържанието си тук.","Font Size":"Размер на шрифта","Tiny":"Много малък","Small":"Малък","Big":"Едър","Huge":"Много едър","Font Family":"Семейство шрифтове","Default":"По подразбиране","Font Color":"Цвят на шрифта","Font Background Color":"Цвят на шрифтовия фон","Document colors":"Цвят на документа","Find and replace":"Намери и замени","Find in text…":"Намери в текста...","Find":"Намери","Previous result":"Предишен резултат","Next result":"Следващ резултат","Replace":"Замени","Replace all":"Замени всички","Match case":"Сравни съвпадащ шрифт","Whole words only":"Само цели думи","Replace with…":"Замени с...","Text to find must not be empty.":"Текстът за намиране не трябва да е празен.","Tip: Find some text first in order to replace it.":"Съвет: Първо намерете някакъв текст, за да го замените.","Advanced options":"Разширени опции","Find in the document":"Намиране на документ","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Въвеждане на пауза ( <code>&lt;br&gt;</code> елемент)","Insert a hard break (a new paragraph)":"Въвеждане на нов ред (нов параграф)","Cancel":"Отказ","Clear":"Изчисти","Remove color":"Премахни цвят","Restore default":"Възстанови първоначалните настройки","Save":"Запазване","Show more items":"Покажи повече единици","%0 of %1":"%0 от %1","Cannot upload file:":"Не може да качи файл:","Rich Text Editor. Editing area: %0":"Rich Text Editor. Зона за редактиране: %0","Insert with file manager":"Вмъкване с файловия мениджър","Replace with file manager":"Заменете с файловия мениджър","Insert image with file manager":"Вмъкнете изображение с файловия мениджър","Replace image with file manager":"Заменете изображението с файловия мениджър","File":"Файл","With file manager":"С файлов мениджър","Toggle caption off":"Превключи изключване на надписи","Toggle caption on":"Превключи включване на надписи","Content editing keystrokes":"Клавишни комбинации за редактиране на съдържание","These keyboard shortcuts allow for quick access to content editing features.":"Тези клавишни комбинации позволяват бърз достъп до елементите за редактиране на съдържание","User interface and content navigation keystrokes":"Потребителски интерфейс и клавишни комбинации за навигация в съдържанието","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Използвайте следните клавишни комбинации за по -лесна навигация в потребителския интерфейс на CKEditor 5.","Close contextual balloons, dropdowns, and dialogs":"Затваряне на балоните с контекст, падащите менюта и диалогови прозорци","Open the accessibility help dialog":"Отваряне на диалогов прозорец с помощ за достъпност","Move focus between form fields (inputs, buttons, etc.)":"Преместване на фокуса между полетата (въвеждане, бутони и др.)","Move focus to the menu bar, navigate between menu bars":"Преместете фокуса върху лентата с менюта, навигирайте между лентите с менюта","Move focus to the toolbar, navigate between toolbars":"Преместване на фокуса върху лентата с инструменти, навигация между инструментите","Navigate through the toolbar or menu bar":"Навигирайте през лентата с инструменти или лентата с менюта","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Изпълнете текущо фокусирания бутон. Изпълнението на бутони, които взаимодействат със съдържанието на редактора, премества фокуса обратно към съдържанието.","Accept":"Приемане","Paragraph":"Параграф","Color picker":"Избор на цвят","Insert code block":"Въведи кодов блок","Plain text":"Обикновен текст","Leaving %0 code snippet":"Оставяне %0 отрязък от код","Entering %0 code snippet":"Въвеждане %0 отрязък от код","Entering code snippet":"Въвеждане на отрязък от код","Leaving code snippet":"Оставяне на отрязък от код","Code block":"Кодов блок","Copy selected content":"Копиране на избраното съдържание","Paste content":"Поставяне на съдържанието","Paste content as plain text":"Поставяне на съдържанието като обикновен текст","Insert image or file":"Вмъкни изображение или файл","Could not obtain resized image URL.":"Не може да бъде придобит промененият уеб адрес на изображението.","Selecting resized image failed":"Избирането на промененото изображение не е успешно","Could not insert image at the current position.":"На текущата позиция не може да се вмъкне изображение.","Inserting image failed":"Вмъкването на изображение не е успешно","Open file manager":"Отвори управление на файлове","Cannot determine a category for the uploaded file.":"Не може да бъде определена категория за качения файл.","Cannot access default workspace.":"Нямате достъп до работното пространство по подразбиране.","You have no image editing permissions.":"Нямате разрешения за редактиране на изображения.","Edit image":"Редактиране на изображението","Processing the edited image.":"Обработка на редактираното изображение.","Server failed to process the image.":"Сървърът не успя да обработи изображението.","Failed to determine category of edited image.":"Неуспешно определяне на категорията на редактираното изображение.","Bookmark":"Отметка","Insert":"Вмъкни","Update":"Обнови","Edit bookmark":"Редактиране на отметка","Remove bookmark":"Премахване на отметка","Bookmark name":"Име на отметка","Enter the bookmark name without spaces.":"Въведете името на отметката без интервали.","Bookmark must not be empty.":"Отметката не трябва да е празна.","Bookmark name cannot contain space characters.":"Името на отметката не може да съдържа интервали.","Bookmark name already exists.":"Името на отметката вече съществува.","bookmark widget":"изпълним модул за отметки","Block quote":"Цитат","Bold":"Удебелен","Italic":"Курсив","Underline":"Подчертаване","Code":"Код","Strikethrough":"Зачертаване","Subscript":"Долен индекс","Superscript":"Горен индекс","Italic text":"Наклонен текст","Move out of an inline code style":"Излизане от подравнен стил на кодиране","Bold text":"Почернен текст","Underline text":"Подчертан текст","Strikethrough text":"Зачертан текст","Saving changes":"Запазване на промените","Revert autoformatting action":"Отмяна на действие за автоматично форматиране","Align left":"Ляво подравняване","Align right":"Дясно подравняване","Align center":"Централно подравняване","Justify":"Разпредели по равно","Text alignment":"Подравняване на текста","Text alignment toolbar":"Лента за подравняване на текст"},getPluralForm(n){return (n != 1);}}};
e[ 'bg' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'bg' ].dictionary = Object.assign( e[ 'bg' ].dictionary, dictionary );
e[ 'bg' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
