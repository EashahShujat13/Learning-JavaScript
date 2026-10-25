RideFlow JavaScript Logic Practice

Level 1 — Variables, conditions aur functions
Beginner · Pehle ye questions solve karo
Q1. Employee pickup check
Function banao jo check kare ke driver ne employee ko pick kiya hai ya nahi.
- true ho toh pickup complete ka message.
- false ho toh pending pickup ka message.
Hint: Function parameter, if/else, return.

Q2. Employee attendance
Ek function banao jo isPresent receive kare.
- Employee present ho toh "Present".
- Present na ho toh "Absent".
Hint: Q1 jaisi logic hai, bas situation change hui hai.

Q3. Driver availability
Function ko isAvailable naam ka boolean mile.
- Driver available ho toh "Driver available".
- Warna "Driver is busy".
Hint: Boolean parameter ko condition mein check karo.

Q4. Pickup time check
Function ko currentTime aur pickupTime do. Check karo ke pickup time aa gaya hai ya nahi.
Hint: Numbers use karke compare karo. currentTime >= pickupTime jaisi comparison socho.

Q5. Ride status
status parameter ke basis par message return karo:
- "completed" → ride complete
- "in-progress" → ride chal rahi hai
- "cancelled" → ride cancel hai
- Koi aur value → unknown status
Hint: if/else if/else ya switch use kar sakti ho.

Level 2 — Numbers aur calculations
Q6. Total passengers
Tumhare paas employees ki list hai. Function total employees count return kare.
Hint: Array ki length check karo.

Q7. Available seats
Vehicle ki total seats aur already occupied seats di gayi hain. Available seats calculate karo.
Hint: Available seats = total seats − occupied seats.

Q8. Vehicle capacity check
Function ko totalSeats aur passengerCount mile. Check karo ke vehicle mein sab passengers aa sakte hain ya nahi.
Hint: Compare karo ke passengers ki tadaad seats se kam ya barabar hai.

Q9. Trip cost per employee
Ek trip ka total cost aur employees ki tadaad di gayi hai. Har employee ka average cost calculate karo.
Hint: Division (/) use karo. Agar employees zero hon toh kya hoga?

Q10. Average pickup delay
Pickup delays ki list hai, jaise [5, 10, 0, 15] minutes. Average delay calculate karo.
Hint: Pehle tamam numbers ka sum, phir list ki length se divide. Loop ya array methods ka use kar sakti ho.

Level 3 — Arrays aur objects
Q11. Employees ke naam print karo
Is array ke har employee ka naam print karo:
const employees = [
  { name: "Ali", pickedUp: true },
  { name: "Sara", pickedUp: false },
  { name: "Ahmed", pickedUp: true }
];


Hint: Array mein objects hain. Har object se name property access karni hai.

Q12. Sirf picked-up employees
Usi array mein se sirf un employees ko nikaalo jinka pickedUp true hai.
Hint: filter() aur boolean condition.

Q13. Employee search
Employee list mein se kisi particular ID wala employee dhoondo.
Hint: find() use karo. Socho agar ID na mile toh result kya hoga.

Q14. Employee names ko ek string mein joro
Names ko is format mein combine karo: Ali | Sara | Ahmed.
Hint: Pehle names ki array banao ya extract karo, phir join(" | ") use karo.

Q15. No-show count
Employees ki list mein count karo ke kitne employees ka status "no-show" hai.
Hint: filter() ke baad .length, ya loop mein counter increment karo.

Q16. Duplicate employee IDs
IDs ki array di gayi hai: [101, 102, 101, 103, 102]. Unique IDs ki array banao.
Hint: Set ke baare mein socho, ya har ID ko check karo ke woh pehle aa chuki hai ya nahi.

Level 4 — Searching, sorting aur data processing

Q17. Sabse zyada pickup delay
Delays [8, 15, 3, 20, 11] mein se maximum delay find karo.
Hint: Math.max() ya loop mein current maximum store karo.

Q18. Second-largest delay
Isi type ki array mein second-largest number find karo.
Hint: Pehle decide karo ke duplicates allowed hain ya nahi. Sorting se pehle ye rule clear karo.

Q19. Employees ko alphabetically sort karo
Employees ke names ko A se Z tak arrange karo.
Hint: sort() use karo. Agar objects hain, toh name property compare karni hogi.

Q20. Longest route find karo
Routes ke objects mein distance property di gayi hai. Sabse lambi route find karo.
Hint: find() aur filter() ka purpose samjho. Maximum value dhoondhne ke liye reduce() bhi useful hai.
const routes = [
    {
        routeId: 101,
        routeName: "North Route",
        distance: 25
    },
    {
        routeId: 102,
        routeName: "City Route",
        distance: 45
    },
    {
        routeId: 103,
        routeName: "Airport Route",
        distance: 32
    },
    {
        routeId: 104,
        routeName: "School Route",
        distance: 60
    },
    {
        routeId: 105,
        routeName: "Office Route",
        distance: 40
    }
];

Q21. Search by name
Employee ka naam search input mein diya gaya hai. List mein matching employee dhoondo, case-insensitive search ke saath.
Hint: toLowerCase() se dono strings ko normalize karo, phir includes() ya find() use karo.

Level 5 — Validation aur edge cases
Q22. Required employee name
Check karo ke employee ka naam empty ya sirf spaces toh nahi.
Hint: String ke liye trim() aur condition use karo.

Q23. Valid passenger count
Passenger count valid tab hai jab woh number ho, zero se zyada ho aur allowed capacity se exceed na kare.
Hint: Multiple conditions  ko && se combine karne ke baare mein socho.Tumhein check karna hai:
- passengerCount number ho. yh typeof bhi use krskti ho.
- passengerCount > 0 ho.
- passengerCount <= capacity ho.

Q24. Missing employee ID
Function ko employee ID milti hai. Missing, null, ya invalid ID ki situation handle karo.
Hint: null, undefined aur falsy values ek jaisi nahi hotin. Decide karo ke valid ID ka rule kya hai.
undefined, null, 0, negative number aur non-number reject honge. conditions use krsti ho or && yh || bhi  .
Pehle check hoga ke ID valid positive number hai.
Agar ID invalid hai, function "Invalid employee ID" return karega.
Agar ID valid hai, .find() employees array mein matching ID search karega.
Agar employee nahi mila, "Employee not found" return hoga.
Agar employee mil gaya, uska object return hoga.const employees = [
    { id: 101, name: "Ali" },
    { id: 102, name: "Sara" },
    { id: 103, name: "Ahmed" }
];

Q25. Duplicate assignment rokna
Check karo ke employee pehle se kisi driver ke saath assigned toh nahi.
Hint: Existing assignments mein employee ki ID search karo.

Q26. Safe division
Average delay calculate karte waqt empty array ya zero count ki wajah se invalid result aane se roko.
Hint: Calculation se pehle input validate karo.

Level 6 — React components aur state logic
Q27. Employee card component
Ek component banao jo employee ka naam, ID aur pickup status show kare.
Hint: Parent se data receive karne ke liye props use hote hain.

Q28. Status ke mutabiq UI
Agar status "picked-up" hai toh green status text; agar "no-show" hai toh red; warna waiting text show karo.
Hint: Conditional rendering — ternary operator ya &&.

Q29. Button click par pickup status update
Button click karne par employee ka status waiting se picked-up ho jaye.
Hint: useState se state rakho. React mein state ko directly mutate na karo.

Q30. Employee list add karna
Form submit hone par naya employee list mein add karo.
Hint: Existing array ke saath spread operator (...) use karne ke baare mein socho.

Q31. Employee remove karna
Delete button se selected employee ko list se remove karo.
Hint: filter() se selected ID ke ilawa baqi employees rakho.

Q32. Search filter in React
Search input mein text likhne par sirf matching employees show hon.
Hint: Input value state mein rakho aur display hone wali list derive karo.

Q33. Reusable custom hook
Aisa custom hook plan karo jo pickup status manage kare aur status update karne ka function de.
Hint: React hooks ko use se shuru hone wale function mein organize kiya ja sakta hai. Hook ke andar state aur update logic rakho.

Level 7 — Authentication aur permissions
Q34. Login validation
Email aur password empty hon toh login request send na ho.
Hint: Form submission se pehle validation conditions check karo.

Q35. Role-based dashboard
Employee ko employee dashboard, driver ko driver dashboard aur supervisor ko supervisor dashboard show karo.
Hint: role property aur conditional rendering.

Q36. Protected page
Login na hone par user ko protected page ki bajaye login page par bhejo.
Hint: Authentication state check karo; React Router mein protected route pattern explore karo.

Q37. Unauthorized action
Employee ko driver ki ride assignment change karne ki permission na ho.
Hint: Sirf button hide karna security nahi. Permission backend par bhi verify honi chahiye.

Q38. Logout
Logout par session/token ko app ke authentication flow ke mutabiq clear karo aur login page par redirect karo.
Hint: Auth state, stored token aur server-side session invalidation ka difference samjho.

Level 8 — API calls aur CRUD
Q39. Employees API se fetch karo
Backend se employees ki list lao aur React UI mein show karo.
Hint: useEffect, async/await aur loading state.

Q40. API error handle karo
Agar server response fail ho, user ko error message dikhao.
Hint: try/catch aur error state.

Q41. Naya employee create karo
Form data ko backend ke create endpoint par send karo.
Hint: HTTP POST request aur request body.

Q42. Employee details update karo
Employee ka phone number update karne ke liye API request bhejo.
Hint: PUT aur PATCH ka difference samjho; backend ke endpoint ke mutabiq method choose karo.

Q43. Employee delete karo
Selected employee ko backend aur UI dono se remove karo.
Hint: DELETE request, phir data refetch ya local state update.

Q44. Duplicate API calls
React component render hone par API baar baar call ho rahi hai. Isko investigate karo.
Hint: useEffect dependencies, component mounting aur React Strict Mode ke development behavior ko check karo.

Level 9 — Database aur SQL logic
Q45. Employee table se data
Database se tamam employees retrieve karo.
Hint: SQL SELECT statement.

Q46. Specific employee find karo
ID ke zariye ek employee retrieve karo.
Hint: WHERE condition aur parameterized query.

Q47. Sirf active drivers
Database se sirf available drivers nikaalo.
Hint: WHERE ke saath availability/status field filter karo.

Q48. Assignment aur employee join karo
Assignment table se driver aur employee ki details ek result mein lao.
Hint: JOIN aur related foreign keys.

Q49. Har driver ke passengers count karo
Find karo ke har driver ke saath kitne employees assigned hain.
Hint: GROUP BY aur COUNT().

Q50. Duplicate assignments prevent karo
Ek hi employee ki same ride par duplicate assignment insert na ho.
Hint: Application-level check ke saath database constraints bhi consider karo. Race conditions ka bhi khayal rakho.

Level 10 — Ride assignment aur business rules
Q51. Driver ko ride assign karo
Employee, driver aur ride ki IDs milti hain. Assignment create karne se pehle required records verify karo.
Hint: Check karo ke employee aur driver exist karte hain aur ride assignable hai.

Q52. Driver capacity
Driver ke vehicle mein maximum 8 passengers aa sakte hain. Naya employee tabhi assign karo jab capacity available ho.
Hint: Current assigned passenger count aur maximum capacity compare karo.

Q53. Unavailable driver
Agar driver already unavailable ya doosri conflicting ride par hai toh assignment reject karo.
Hint: Driver status ke saath ride timings ka conflict bhi check karo.

Q54. Nearest driver
Available drivers ki locations di hui hain. Pickup location ke sabse qareeb driver find karo.
Hint: Pehle distance calculate karna hoga, phir minimum distance wala driver select karo. Latitude/longitude ke liye straight-line distance aur road distance alag hain.

Q55. Reassign employee
Agar assigned driver ki vehicle breakdown ho jaye, employee ko doosre suitable driver ke saath assign karo.
Hint: Pehle replacement driver ki availability/capacity validate karo, phir assignment update karo.

Level 11 — Pickup status aur state machine
Q56. Valid pickup status
Allowed statuses sirf "waiting", "picked-up", "no-show" aur "unable-to-pick-up" hain. Invalid status reject karo.
Hint: Allowed values ki list/Set banao aur incoming status validate karo.

Q57. Status transition rules
Employee ka status "waiting" se "picked-up" ho sakta hai, lekin completed pickup ko dobara "waiting" na banne do jab tak authorized correction na ho.
Hint: Current status aur requested new status dono check karo.

Q58. No-show rule
Employee ko no-show tab mark kiya ja sakta hai jab pickup time guzar chuka ho aur employee pickup point par available na ho.
Hint: Time condition aur employee availability ko combine karo. Sirf time guzarne ka matlab automatically no-show nahi.

Q59. Pickup summary
Total passengers, picked-up passengers, no-shows aur pending passengers ka count calculate karo.
Hint: Har status ko count karo. Confirm karo ke categories mutually exclusive hain aur total passengers se reconcile hoti hain.

Q60. Assignment history
Jab status change ho, toh old status, new status, timestamp aur kis user ne change kiya record karo.
Hint: Current record update karne ke ilawa alag history/audit record ka design socho.

Level 12 — GPS, distance aur ETA
Q61. Driver ki current location
Driver ki latitude aur longitude receive karke current location state update karo.
Hint: Latitude -90 se 90 aur longitude -180 se 180 ke darmiyan honi chahiye.

Q62. Distance calculate karo
Driver aur employee pickup point ke coordinates diye gaye hain. Dono ke darmiyan distance calculate karo.
Hint: Coordinates se straight-line distance ke liye Haversine formula research karo. Road distance is se different ho sakta hai.

Q63. ETA calculate karo
Distance aur average speed di hui hai. Arrival ka estimated time calculate karo.
Hint: Time = distance ÷ speed. Units consistent rakho; jaise kilometers aur km/h se time hours mein aayega.

Q64. Stale location detect karo
Agar driver ki location 5 minutes se update nahi hui, toh location ko stale show karo.
Hint: Current timestamp aur last update timestamp ka difference calculate karo.

Q65. Location update validation
Agar GPS update mein invalid coordinates ya impossible jump ho, toh update ko investigate ya reject karo.
Hint: Valid coordinate ranges ke saath elapsed time aur possible travel distance compare karo.

Level 13 — Real-time updates aur Socket.IO
Q66. Live pickup status
Driver employee ka status update kare aur supervisor ki screen par change foran show ho.
Hint: Socket.IO event emit/listen flow. Socho event kis side se emit hoga aur kaun se clients subscribe karenge.

Q67. Live GPS updates
Driver ki location update hone par supervisor ko latest location mile.
Hint: Location event mein driver ID, coordinates aur timestamp bhejne ka design socho.

Q68. Duplicate events
Network issue ki wajah se ek hi update do baar process ho jaye, toh duplicate action se kaise bacho?
Hint: Unique event/operation ID, idempotency aur server-side validation research karo.

Q69. Reconnect hone par data
Driver ka internet disconnect ho aur phir reconnect ho. Supervisor ko latest correct status kaise mile?
Hint: Socket reconnect akela missed events recover nahi karta. Reconnect par server se fresh state fetch karne ke baare mein socho.

Q70. Sirf authorized supervisor ko updates
Ek supervisor sirf apni authorized rides ke live updates receive kare.
Hint: Socket authentication aur server-side room membership authorization.

Level 14 — Security aur error handling
Q71. Password security
User ka password database mein secure tareeqe se store karo.
Hint: Password hashing, jaise bcrypt ya Argon2. Plain-text password store nahi karna.

Q72. SQL injection
Search field mein koi user malicious SQL input de. Query ko secure kaise rakho?
Hint: Parameterized queries use karo; string concatenation se SQL query build karne se bacho.

Q73. JWT validation
Protected API request mein token missing ya invalid ho toh access deny karo.
Hint: Backend par token verify karo, expiry check karo aur user ki permissions enforce karo.

Q74. Unauthorized ID change
Employee request mein apni ID ki jagah kisi aur employee ki ID bhej kar uska record access karne ki koshish kare.
Hint: Sirf login check kaafi nahi. Requested record par user ki authorization bhi verify karo.

Q75. Consistent error responses
Backend errors ke liye consistent structure banao, jaise status code aur readable message.
Hint: Central error-handling middleware aur suitable HTTP status codes.

Level 15 — Testing aur debugging
Q76. Function test karo
Pickup function ke liye test cases banao: true, false aur invalid input.
Hint: Expected output pehle likho, phir actual output ko compare karo.

Q77. Empty list bug
Employee list empty ho toh summary calculate karte waqt app crash nahi honi chahiye.
Hint: Empty array aur zero-length conditions test karo.

Q78. Wrong count bug
Dashboard 10 employees show karta hai lekin database mein 12 hain. Bug investigate karo.
Hint: API response, filters, pagination aur UI state ko alag-alag check karo.

Q79. Concurrent assignment
Do supervisors ek hi waqt par ek driver ko conflicting rides assign karne ki koshish karte hain.
Hint: Sirf frontend validation par depend mat karo. Database transactions, constraints aur concurrency control par research karo.

Q80. End-to-end ride flow
Employee create hone se lekar driver assignment, pickup, completion aur supervisor dashboard update hone tak test plan banao.
Hint: Happy path ke saath failure cases bhi test karo: unavailable driver, no-show, API failure aur disconnected internet.
