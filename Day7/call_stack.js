function x() {
    setTimeout(function () {
        console.log("executed after 5 seconds")
    }, 5000);
    console.log( "hello");
}

function y() {
    x();
}

function z() {
    y ();
}


z();