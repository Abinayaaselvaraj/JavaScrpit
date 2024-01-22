//callback
function ramusomu(Welcomeback,callback){
    setTimeout(function(){console.log(Welcomeback)
        callback()},2000)
}
function miniani(){
    console.log("odi poiru vanthudatha da thambi!!!!")
    
}
ramusomu("Hello RAMU and SOMU\nWelcome to kongu engineering college",miniani)