import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import validation from './modules/validation';
import tabs from './modules/tabs';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('23 jule 2022');
menu();
modal();
scroll();
validation();
tabs();
calc(100);
sendForm({ 
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
});
sendForm({ 
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
});
sendForm({ 
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
});