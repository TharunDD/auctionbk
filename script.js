// var s = 0;

// function st() { 
//     console.log(s);// Get the initial value of 'sti'
//     if (s == 0) {
//         let sti = document.getElementById('y').value;
//         s=1;
//         const updateValue = () => {
//             sti = sti - 1;
//             document.getElementById('l').innerHTML = sti;
//             if (sti > 0) {
//                 setTimeout(updateValue, 1000); 
//             }
//         };
//         updateValue(); 
//     }
//     if(s==1){
//         document.getElementById('l').innerHTML = "stop";
//     }
// }
function st() {
    if (s == 0) {
        let sti = parseInt(document.getElementById('y').value);
        if (!isNaN(sti) && sti > 0) {
            document.getElementById('btn').textContent = 'Stop';
            const updateValue = () => {
                sti = sti - 1;
                document.getElementById('l').innerHTML = sti;
                if (sti > 0) {
                    timer = setTimeout(updateValue, 1000);
                } else {
                    document.getElementById('l').innerHTML = "Stopped";
                    document.getElementById('btn').textContent = 'Start';
                    s = 0;
                }
            };
            updateValue();
            s = 1;
        } else {
            alert('Please enter a valid number of seconds.');
        }
    } else {
        clearTimeout(timer);
        document.getElementById('btn').textContent = 'Start';
        s = 0;
    }
}
