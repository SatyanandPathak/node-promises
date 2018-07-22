console.log('Statting app');

setTimeout(() => {
    console.log('inside of callback')
}, 2000);

setTimeout(() => {
    console.log('another callback')
}, 0)

console.log('Finishing app');



/*



//////////////////////                             //////////////////////                        
//                   //                            //                   //
//    Call Stack     //                            //      Node API     //  registers all the functions from stack to here
//                   //                            //                   //
///////////////////////                            //////////////////////
        | |
        | |
        | | Event Loop(Execute only if call stack is empty for all the call methods)
        | |

//////////////////////                                                     
//                   //                                             
//    CallBack Queue //      Queue which is moved to a queue and execute through event loop only when Call Stack is empty                      
//                   //                            
///////////////////////                            

*/