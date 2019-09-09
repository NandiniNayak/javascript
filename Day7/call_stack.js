function x() {
    setTimeout(function () {
        console.log("executed after 5 seconds")
    }, 0);
    console.log("hello");
}

function y() {
    x();
}

function z() {
    y();
}


z();
console.log("not sure when this will be executed")
