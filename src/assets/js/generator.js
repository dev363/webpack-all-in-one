const msg={
    1:"Primary",
    2:"Secondary",
    3:"Success",
    4:"Danger"
}
export function message(type){
    return `You have clicked <strong>${msg[type]}</strong> Button.`
}