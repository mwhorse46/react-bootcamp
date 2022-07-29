
// Day-7 (27-July-2022)
// 1.Complete Practicing the Live Class video (Video Link)
// 2.Submit your notes(Research and study if necessary) with code sample(Github)
// -when component re-renders
// - when to write state and when to use simple variable
// - way of Writing CSS Styles in React component
// - What is JSX, what to remember during writing JSX
// - how to communicate  with parent and children in respective of data




#ReactBootCamp
#Day_7
Code Sample: 

১. একটা কম্পোনেন্ট কখন re-render হয়?

=> একটা কম্পোনেন্ট re-render হবে তখন, যখন এর state update হবে, props change হবে এবং force update হবে । 


২. কখন state এবং কখন variable declare করতে হয়?

=> আমরা সাধারনত একটা variable কে ট্র্যাক করে Vanila JavaScript  এ কাজ করতে পারি। কিন্তু, সেটা React এ হয় না। কোন variable 
কে ট্র্যাক করে যদি কাজ করি, পরে যদি variable এর ভ্যালু চেঞ্জ হয় তাহলে component re-render হয় না। ফলে সেটা UI তে দেখা যায় না। আর আমরা জানি কম্পোনেন্ট re-render হবে তখনই, যখন এর state update হবে । তাই যখন একটা variable কে পরবর্তীতে modify  বা update করা লাগবে অথবা একটা কম্পোনেন্টকে re-renderকরার প্রয়োজন হবে এমন সিচুয়েশনে state অন্যথায় simple variable ব্যবহার করতে পারি। 

৩. React এ সিএসএস কিভাবে লেখা যায়?

=> React এ  কয়েকভাবে সিএসএস লেখা যায় ---
   -- inline style ইউজ করে 
   -- external file এ সিএসএস লিখে 
   -- modular way তে সিএসএস লিখে
   -- component based সিএসএস লিখে




৪. JSX কি? JSX কোড লেখার সময় কি কি বিষয় ্মনে রাখা উচিৎ?

=> JSX এর পূর্নরুপ হচ্ছে - JavaScript XML। এটা দেখতে html এর মত কিন্তু html নয়। এটাকে Synthetic sugar বলে। 
JSX কোড লেখার সময় যেসব বিষয় খেয়াল রাখা উচিৎ ---

    ১. JSX লেখার সময় অবশ্যই parent element এ Div অথবা React Fragment ব্যবহার করতে হবে।
    ২. প্রত্যেকটা element বা tag অবশ্যই closing করে দিতে হবে। 
    ৩. JavaScript reserved keyword গুলো যাতে html tag এ ব্যবহার না হয়। 
    ৪. Dynamic value কার্লি ব্রাকেট {} এর মাঝে লিখতে হয় এবং সেটা Expression হতে হবে। 





৫. কিভাবে parent কম্পোনেন্ট এবং children কম্পোনেন্ট এর মাঝে ডাটা আদান-প্রদান করা হয়?
=> React unidirectional data flow maintain করে parent থেকে children এ props এর মাধ্যমে ডাটা pass করে। 



