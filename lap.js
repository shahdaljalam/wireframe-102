

// alert('thank you for visiting our page !');


// var question = prompt('whoud you like to shop ?')
// if(question === 'yes') {
//     alert('enjoy shopping with us')}

var clothesType = prompt('please enter the clothes type');
while(clothesType !== 'shirts' && clothesType !== 'pants')   
{
     clothesType = prompt('please choose shirts or pants');
}


var number = prompt('how many do you want');

for (var index = 0; index < number; index++) {
    if(clothesType == "shirts")
    {
        document.write('<img style="width: 19%;" src="https://th.bing.com/th/id/OIP.PpE3AdumDDkCSMoy1gG5pAHaHa?w=206&h=206&c=7&o=5&dpr=1.25&pid=1.7" alt=""/>');
    }
    if(clothesType == "pants")
    {
        document.write('<img style="width: 19%;" src="https://th.bing.com/th/id/OIP.Zc-DGdq4Q1nT1dum9TpnTgHaJQ?w=182&h=228&c=7&o=5&dpr=1.25&pid=1.7" alt=""/>');
    }
}