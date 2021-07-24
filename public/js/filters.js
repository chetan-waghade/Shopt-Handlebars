
// filter menus collapse buttons
const sizes_collapse = document.querySelector('#sizes_collapse');
const colors_collapse = document.querySelector('#colors_collapse');
const sort_by_collapse = document.querySelector('#sort_by_collapse');


const collapse_list = [sizes_collapse, colors_collapse, sort_by_collapse];
const class_names = ['sizes', 'colors', 'sort_by'];

// collapse & uncollapse filter menus
collapse_list.forEach((item, index) => {

    item.addEventListener('click', () => {
        if (item.textContent === "+") {
            document.querySelector(`.${class_names[index]}`).className = class_names[index];
            item.textContent = "-";
        }
        else {
            document.querySelector(`.${class_names[index]}`).className = class_names[index] + " hidden";
            item.textContent = "+";
        }
    })


});