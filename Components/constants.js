export const mq = window.matchMedia("(max-width: 800px)");
export const mq950 = window.matchMedia("(max-width: 950px)");
export const mq549 = window.matchMedia("(max-width: 549px)");
export const mq1250 = window.matchMedia("(max-width: 1250px)");

const getDaysArray = function(start, end) {
    let arr = [];
    let dt;
    for(dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
};
const dayList = getDaysArray(new Date("2020-01-08"),new Date());

export const newIndex = dayList.map(function(element){
    // const yyyy = element.getFullYear();
    const mm = ('0' + (element.getMonth() + 1)).slice(-2); // getMonth() is zero-based
    const dd = ('0' + element.getDate()).slice(-2);
    // return String(10000 * yyyy + mm + dd); 
    return String(mm + "/" + dd); 
    // return (`${mm} / ${dd}`); 
});

export const region = document.getElementById('region');
export const regN = document.querySelectorAll('.regN');
export const regModal = document.querySelector('.regModal');

export const listCases2 = document.querySelector('#app');
export const loader = document.querySelector('#loader');
export const spinner = document.querySelector('#spinner');
export const spinner1 = document.querySelector('#spinner1');