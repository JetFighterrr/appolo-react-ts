const widthOptions: string[] = [];
const options1: string[]= [];
const options2: string[] = ['y', 'g'];

(function (){
    for(let i = 300; i <= 600; i += 25){
        widthOptions.push(i.toString());
        options1.push(i.toString());
    }
})()

export {
    widthOptions,
    options2,
    options1,
};