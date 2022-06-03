// console.log("I am rady");

/////////////////////////////////////////////////////////////////////////////////
// ================ USE ARRY METHOD ==================

let Right_site = document.querySelector(".Right_button");
let Left_site = document.querySelector(".Left_button");

let Carasol_container = document.querySelector(".Carasol_container");

let Child_image = document.querySelectorAll(".Child_image");

//-------- FOR DEFINE CONTENT WIDTH WITHOUT PX ---------
Image_one = Child_image[1]
let Content_width = getComputedStyle(Image_one).width;
Content_width = parseInt(Content_width);
Content_width = Content_width - 10; // FOR LEFT-RIGHT MARGIN LESS
//----------------------------------------------------------

Child_image = Array.from(Child_image); // MAKE ARRAY//

Left_site.addEventListener("click", Mobile_carasol_left) // FOR LEFT CLICKABLE BUTTON
Right_site.addEventListener("click", Mobile_carasol_right) // FOR RIGHT CLICKABLE BUTTON

// ======== FOR MOUSE WHEEL =========
Carasol_container.addEventListener("wheel", (Wheel_value) => {

    if (Wheel_value.deltaY >= 0) {
        Mobile_carasol_right();
    }
    if (Wheel_value.deltaY <= -1) {
        Mobile_carasol_left();
    }
});
// =================================

setInterval(Mobile_carasol_right, 5000) // FOR AUTO CHANGE

Mobile_carasol_right() // FOR ONLOAD WORK

function Mobile_carasol_left() {
    Child_image = (Decrease_arr(Child_image));
    Image_slide(Child_image) // CALL IMAGE SLIDER FUNCTION
};

function Mobile_carasol_right() {
    Child_image = (Increase_arr(Child_image));
    Image_slide(Child_image) // CALL IMAGE SLIDER FUNCTION
};

// =====================================================

/////////////////////////////////////////////////////////////////////////////////////////////
// ============ MAKE UNIVERSAL INCREASE AND DECREASE ARR METHOD ===============

function Decrease_arr(Arr) {
    Arr.splice(0, 0, Arr[Arr.length - 1])
    Arr.pop();
    return Arr;
}


function Increase_arr(Arr) {
    Arr.push(Arr[0]);
    Arr.splice(0, 2, Arr[1])
    return Arr;
}
/////////////////////////////////////////////////////////////////////////////////////////////////

// ======================== IMAGE SLIDER FUNCTION ========================

function Image_slide(Child_image) {
    Child_image[0].style.cssText = `--z-index: 1;--translateX: -${Content_width * 6}; --scale: .01;`;
    Child_image[1].style.cssText = `--z-index: 2;--translateX: -${Content_width * 5};--scale: .7;`;
    Child_image[2].style.cssText = `--z-index: 3;--translateX: -${Content_width * 4};--scale: .8;`;
    Child_image[3].style.cssText = `--z-index: 4;--translateX: -${Content_width * 3};--scale: .94;`;
    Child_image[4].style.cssText = `--z-index: 5;--translateX: -${Content_width * 2};--scale: .94;`;
    Child_image[5].style.cssText = `--z-index: 6;--translateX: -${Content_width * 1};--scale: .94;`;
    Child_image[6].style.cssText = `--z-index: 7;--translateX: 0;--scale: .94;`;
    Child_image[7].style.cssText = `--z-index: 6;--translateX: ${Content_width * 1};--scale: .94;`;
    Child_image[8].style.cssText = `--z-index: 5;--translateX: ${Content_width * 2};--scale: .94;`;
    Child_image[9].style.cssText = `--z-index: 4;--translateX: ${Content_width * 3};--scale: .94;`;
    Child_image[10].style.cssText = `--z-index: 3;--translateX: ${Content_width * 4};--scale: .8;`;
    Child_image[11].style.cssText = `--z-index: 2;--translateX: ${Content_width * 5};--scale: .7;`;
    Child_image[12].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;

    Child_image[13].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[14].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[15].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[16].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[17].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[18].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[19].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[20].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[21].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[22].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;

    Child_image[23].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[24].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[25].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[26].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[27].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
    Child_image[28].style.cssText = `--z-index: 1;--translateX: ${Content_width * 6};--scale: .01;`;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                    \\\\\\ E-N-D \\\\\\\\
///////////////////////////////////////////////////////////////////////////////////////////////////