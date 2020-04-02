let displayColorSpread = function (message, ...colors: string[]) {

    console.log(arguments.length);
    for (let i in colors) {


        console.log(colors[i]);
    }

}


let messageSpread = "Hello";

let colors = ['Red', 'Green', 'Blue']
displayColorSpread(messageSpread, ...colors);
