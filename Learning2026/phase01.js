// Task 1: Dukaan ka bill (reduce)
// Scenario: ek dukaan ke orders ka array hai, aur aap ko poora bill nikalna hai.
// Kya banana hai: ek function totalBill(orders) jo sab orders ki total raqam return
// kare. Har order ki raqam price × qty hai.
// Rules: sirf reduce use karein. Array khali ho to 
// 0 return ho.
// Check: upar wala example, khali array 
// 2300 hona chahiye (1000 +
// [] (jawab 0), aur ek order wala array.


const orders = [
    { price: 500, qty: 2 },
    { price: 300, qty: 1 },
    { price: 200, qty: 5 }
];
const getTotalBill = ()=>{
    return orders.reduce((acc,current)=> acc + current.price * current.qty ,0)
}

console.log(getTotalBill())
