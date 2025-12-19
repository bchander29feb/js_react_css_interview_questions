create debounce hook in react ?

import { useEffect, useState } from 'react';
import useDebounce from '../custom-hooks/useDebounce';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();

      const filteredUsers = data.filter((user) =>
        user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );

      setUsers(filteredUsers);
    };

    if (debouncedSearch) {
      fetchUsers();
    } else {
      setUsers([]);
    }
  }, [debouncedSearch]);

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto' }}>
      <input
        type="text"
        placeholder="Search user name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '8px' }}
      />

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;





what is the diff between normal function and custom hook ?

👉 आप किसी भी normal JS function के अंदर hook use नहीं कर सकते
👉 Hooks सिर्फ React Component या Custom Hook के अंदर ही use हो सकते हैं
अगर आप function के अंदर hook use कर पा रहे हैं, तो वह function normal function नहीं है — वह Custom Hook बन चुका है।
Hooks can only be called at the top level of a React function component or a custom hook.

wrong :
function myFunction() {
  const [count, setCount] = useState(0); // ❌ NOT allowed
}

यह normal function है
➡️ React error देगा


function useMyHook() {
  const [count, setCount] = useState(0); // ✅ Allowed
}
➡️ क्योंकि:
नाम use से शुरू है
इसे सिर्फ component / hook के अंदर call किया जाएगा
अगर function के अंदर hook है → वह function normal नहीं है → वह Custom Hook है
Hooks सिर्फ React components और custom hooks के अंदर ही use किए जा सकते हैं, किसी भी normal JavaScript function के अंदर नहीं।


Data binding ? 

One-Way Data Binding:
Data flows only in one direction — from component (state/model) to UI (view).

Two-Way Data Binding:
Data flows both ways — from model to view and view to model automatically.
Model updates UI
UI updates model automatically
One-way data binding में data एक direction में flow करता है, जबकि two-way data binding में UI और model दोनों एक-दूसरे को update करते हैं।



Why react not angular,Advantages of using React ? 
Angular की जगह React क्यों?
हल्का और लचीला (Lightweight & Flexible): React एक लाइब्रेरी है, पूरा फ्रेमवर्क नहीं, इसलिए इसमें ज़रूरत के अनुसार टूल्स चुन सकते हैं।
सीखने में आसान: React में JavaScript और JSX का उपयोग होता है, जबकि Angular में TypeScript, decorators और complex structure होता है।
बेहतर परफॉर्मेंस: React का Virtual DOM कम DOM updates करता है, जिससे UI तेज़ होता है।
Reusable Components: एक बार बना हुआ component बार-बार इस्तेमाल किया जा सकता है।
तेज़ Development: Angular की तुलना में कम boilerplate code होता है।
Strong Community Support: React की बड़ी community और बेहतर ecosystem है।
React के फायदे (Advantages of React)
Component-based architecture जिससे code maintain करना आसान होता है।
Virtual DOM की वजह से बेहतर performance मिलती है।
One-way data binding से debugging आसान होती है।
Hooks से state और lifecycle management सरल हो जाता है।
Backend integration आसान (Express.js, APIs आदि)।
SEO-friendly और server-side rendering सपोर्ट।
Meta (Facebook) का सपोर्ट और लगातार updates।



1.React क्या है और इसका उपयोग क्यों किया जाता है?
React एक JavaScript लाइब्रेरी है जिसका उपयोग तेज़, interactive और reusable UI बनाने के लिए किया जाता है। यह Virtual DOM के कारण fast है, components reusable होते हैं और Single Page Applications बनाने में helpful है।


React क्या है?
React एक JavaScript लाइब्रेरी है जिसका उपयोग यूज़र इंटरफ़ेस (UI) बनाने के लिए किया जाता है।
इसे Facebook (Meta) ने बनाया है।
यह Single Page Application (SPA) बनाने में सबसे ज़्यादा उपयोग होती है, जहाँ पेज पूरा reload नहीं होता—सिर्फ वही हिस्सा अपडेट होता है जहाँ बदलाव चाहिए।

1. तेज़ परफॉर्मेंस (Fast Performance)
React Virtual DOM का उपयोग करता है, जो वास्तविक DOM की तुलना में बहुत तेज़ काम करता है।
इससे UI तेजी से अपडेट होता है।

2. Reusable Components
React में UI को छोटे-छोटे Components में बांटा जा सकता है।
इसे बार-बार इस्तेमाल किया जा सकता है → Time बचता है, कोड साफ रहता है।

3. Single Page Application बनाने में आसान
React बिना पूरा पेज reload किए UI को बदल देता है।
इससे ऐप बहुत smooth और fast लगता है।

4. Large Community और Ecosystem
React सबसे लोकप्रिय फ्रंटएंड लाइब्रेरी है, इसके बहुत सारे पैकेज, टूल्स और लाइब्रेरी उपलब्ध हैं — जैसे Redux, React Router, Tailwind, etc.

5. सीखना आसान
JavaScript की basic जानकारी हो तो React सीखना आसान है।
इसकी syntax सरल है और JSX समझने में आसान होता है।

6. Mobile App Development (React Native)
React के concept का उपयोग करके React Native से Android/iOS apps भी बनाए जा सकते हैं


React Hooks में useEffect() वही काम करता है जो Class Components में Lifecycle Methods करते हैं।

1. componentDidMount (पहली बार render के बाद)
👉 Hooks में कैसे करेंगे?
जब आप useEffect में empty dependency array [] देते हो, तो यह सिर्फ़ पहली बार चलता है।

useEffect(() => {
  console.log("Component Mounted");
}, []);  // [] = सिर्फ़ पहली बार


2. componentDidUpdate (state या props update के बाद)
👉 Hooks में कैसे करेंगे?
जब आप dependency देते हो, useEffect उनके बदलने पर चलता है:
useEffect(() => {
  console.log("State या Props अपडेट हुए");
}, [count]); // count बदलते ही चलेगा

 3. componentWillUnmount (component हटने के पहले clean-up)

👉 Hooks में कैसे करेंगे?
useEffect के अंदर return function लिखते हैं — यही cleanup function होता है।

useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Component Unmounted");
  };
}, []);

3.JSX क्या है?
JSX (JavaScript XML) React में UI लिखने का एक खास तरीका है जहाँ हम HTML और JavaScript को एक ही जगह लिख सकते हैं।
यह दिखने में HTML जैसा लगता है लेकिन असल में यह JavaScript का ही syntax extension है।


Rolldown क्या है? (Vite + React में नया Update)
React 19 और Vite के नए versions में Rolldown एक नया, super-fast bundler है जो Vite के अंदर प्रयोग किया जा रहा है। यह Webpack या Rollup का modern, बहुत तेज़ और optimized version माना जा रहा है।

4. Rolldown क्या करता है?
Rolldown एक bundler है—यानि यह आपका React code, components, JS files, CSS files सबको मिलाकर optimized bundle बनाता है।
लेकिन Rolldown को खास बनाता है:
⭐ Rolldown क्यों बनाया गया?
क्योंकि पुराने bundlers (Webpack, Rollup, esbuild) में कुछ limitations थीं।

Rolldown को बनाया गया है:
⚡ Super fast performance के लिए
🧠 Rust language में लिखा गया है (इसलिए speed बहुत ज्यादा)
🎯 Better tree-shaking
💪 Better plugin system
📦 Rollup-compatible (Vite पहले से Rollup का उपयोग करता है)


Rolldown का उपयोग कहाँ होता है?

Vite अब internally इसे इस्तेमाल कर रहा है:
Development के दौरान
Build time के दौरान
React + Vite projects में default bundling के लिए

5. Development क्या है? (Development Environment)

जब आप React App बना रहे होते हैं, code लिख रहे होते हैं, testing कर रहे होते हैं—
यह सब Development में होता है।
👉 Development mode की खास बातें:
Code fast refresh के साथ चलता है
Error messages बहुत detailed और helpful होते हैं
Code optimized नहीं होता
Bundle fast होता है, safe नहीं
Performance check नहीं होता
Browser में live reload मिलता है
Debugging आसान होती है

🔧 Example:
npm run dev


Vite/React लाइव server चलाता है:

http://localhost:5173


यह developer के लिए होता है, users के लिए नहीं।
🟩 2. Production क्या है? (Production Environment)
जब app तैयार हो जाता है और उसे users के लिए internet पर host करना होता है,
तो उसे Production mode में build किया जाता है।
👉 Production mode की खास बातें:
Code minify हो जाता है (size कम)
Unused code remove (tree shaking) हो जाता है
Performance पूरा optimized
कोई debug message नहीं
Fast loading
Secure build

Pure Component क्या है?
Pure Component वह component होता है जो props या state बदलने पर ही re-render होता है।
अगर props/state same है → React उसे फिर से render नहीं करता।
Unnecessary re-renders रोकना → Performance improve करना

Increase Count पर → DisplayName re-render नहीं होगा, क्योंकि name same है।
Change Name पर → props बदलने की वजह से DisplayName re-render होगा।

useEffect और useLayoutEffect में अंतर (Simple Explanation?

useEffect → Render के बाद चलता है (asynchronous)
React पहले UI को screen पर paint कर देता है →
फिर useEffect चलता है।

✔ Browser UI ब्लॉक नहीं होती
✔ fast rendering
✔ most common use-case

useLayoutEffect → Render से पहले चलता है (synchronous)
React UI को paint करने से पहले useLayoutEffect का code चलाता है।

✔ UI flicker रोकने के लिए
✔ DOM measure करने के लिए
✔ scroll position set करने के लिए

क्यों useLayoutEffect तेज माना जाता है?
क्योंकि यह synchronous है:
React को UI दिखाने से पहले इसे finish करना पड़ता है।

इसलिए अगर इसमें भारी logic डाल दिया → UI slow लगेगी।
इसलिए useEffect ज़्यादातर cases में बेहतर है।

Higher Order Component :
Higher Order Component (HOC) React में एक ऐसा function होता है जो एक component को लेता है और एक नया component वापस देता है, 
जिसमें extra functionality जोड़ दी जाती है।
👉 इसे समझो जैसे component को wrap करके उसमें power बढ़ाना।

Pure Component React:
Pure Component React में एक ऐसा component होता है जो same props और state मिलने पर दुबारा re-render नहीं होता।
मतलब — अगर input data change नहीं हुआ है, तो React उसे दोबारा render नहीं करेगा।

🔹 esbuild (default) : 
आप npm create vite@latest से React 19 वाला प्रोजेक्ट बना रहे हो → तो Vite में Babel का उपयोग नहीं होता।
✔ Vite React प्रोजेक्ट में JSX को Babel नहीं, बल्कि esbuild या SWC transform करता है।

esbuild (default)
super fast compiler
JSX → JS convert करता है (babel जैसा ही काम)
बहुत तेज है (100x faster than Babel)
🔹 SWC (अगर आप @vitejs/plugin-react-swc use करें)
Rust-based super fast compiler
Next.js भी इसी का उपयोग करता है
Babel को replace कर सकता है
👉 Point: Vite में Babel installed नहीं होता और न ही इस्तेमाल होता है।

v8 engine : 
V8 Engine एक हाई-परफ़ॉर्मेंस JavaScript Engine है जिसे Google ने Chrome browser और Node.js के लिए बनाया है।
यह JavaScript को तेजी से execute करने के लिए C++ में लिखा गया है।

V8 Engine वह software है जो JavaScript को चलाता है।
जब आप JavaScript लिखते हो, तो browser उसे सीधे नहीं समझता —
V8 Engine JavaScript को:

🔹 1. Read करता है (Parsing)
🔹 2. Compile करता है (Just-in-Time Compilation / JIT)
🔹 3. Machine code में बदलकर Execute करता है


SpiderMonkey :
SpiderMonkey Mozilla Firefox का अपना JavaScript Engine है।
यानी, Firefox ब्राउज़र में जो भी JavaScript चलती है, वह SpiderMonkey चलाता है।

SpiderMonkey ये काम करता है:
JavaScript को पढ़ता (parse) है
उसे समझने लायक structure (AST) में बदलता है
उसे मशीन कोड में convert करता है
फिर उस कोड को execute करता है
मतलब आपका JS कोड को चलाने का पूरा काम SpiderMonkey करता है।



🚀 React Performance Improve करने के Best Ways

1️⃣ React.memo() का उपयोग करें
Unnecessary re-renders रोकने के लिए।
👉 अगर props नहीं बदलते तो component दोबारा render नहीं होगा।


2️⃣ useCallback() का इस्तेमाल करें
Functions हर render पर re-create हो जाते हैं → इससे children components re-render होते हैं।


3️⃣ useMemo() से Expensive Calculations को Cache करें
👉 Again calculation नहीं होगा जब तक dependency change न हो।


4️⃣ Code Splitting / Lazy Loading
Large bundles को छोटे हिस्सों में load करना।

5️⃣ Avoid Anonymous Functions in JSX
6️⃣ Avoid Inline Objects/Arrays in Props
7️⃣ Virtual List / Windowing (अगर बहुत सारे items हों)


Like react-window, react-virtualized
👉 पूरे list render की जगह सिर्फ visible items render होते हैं।

8️⃣ Use Key Properly

9️⃣ Avoid Re-render by Lifting State Correctly
State unnecessary parent में न रखो।

🔟 Use Suspense + Concurrent Mode Features
React 18/19 में Suspense heavy UI को smooth बनाता है।

1️⃣️⃣ Debounce / Throttle का Use
Search box में हर keystroke पर API call मत करो।


Images optimize करो

lazy loading
compression
next-gen formats (webp)

Production Build का इस्तेमाल करो
Development build slow होता है।





।







1️⃣ Vite क्या है?
Vite = “Fast” + modern build tool
Development के दौरान ES Modules का use करता है, जिससे instant server start और fast hot module replacement (HMR) मिलता है
Build के लिए internally Rollup use करता है


API error handling कैसे करते हो?
Jsx to javascript conversion ?
जब तुम Vite use करते हो React app के लिए,
तो JSX को Vite ही handle करता है — Babel नहीं (directly)।
लेकिन सच ये है कि Vite अंदर से Babel की जगह ESBuild का use करता है,
जो JSX को JavaScript में super fast तरीके से convert करता है ⚡

अगर तुम्हें कभी Vite project में Babel plugins use करने की जरूरत पड़े,
तो तुम manually Babel जोड़ सकते हो।
लेकिन सामान्य React projects के लिए Vite + ESBuild काफी है 🔥



⚛️ Synthetic Events क्या हैं?
React में जो भी events होते हैं (जैसे onClick, onChange, onSubmit आदि),
वो browser के native events नहीं होते,
बल्कि React द्वारा बनाए गए Synthetic Events होते हैं।

React अपने खुद के event system का उपयोग करता है जो browser events को wrap करता है — इसे Synthetic Event System कहा जाता है।

💡 क्यों Synthetic Event use करता है React?
React ऐसा इसलिए करता है ताकि:
Cross-browser compatibility बनी रहे (हर browser का event system थोड़ा अलग होता है)।
Performance बेहतर हो (React event delegation का use करता है)।
Event pooling जैसी optimization techniques संभव हों।


React project structure कैसे organize करते हैं?
React project structure organize करना बहुत important है ताकि code maintainable, scalable और clean रहे।
मैं इसे आसान हिंदी में step-by-step समझाता हूँ।

1️⃣ Basic React Project Structure
my-app/
├─ public/
│   ├─ index.html
│   └─ assets/
├─ src/
│   ├─ components/
│   │   ├─ Header.jsx
│   │   ├─ Footer.jsx
│   │   └─ Button.jsx
│   ├─ pages/
│   │   ├─ Home.jsx
│   │   └─ About.jsx
│   ├─ hooks/
│   │   └─ useFetch.js
│   ├─ context/
│   │   └─ AuthContext.jsx
│   ├─ services/
│   │   └─ api.js
│   ├─ utils/
│   │   └─ helpers.js
│   ├─ App.jsx
│   ├─ index.jsx
│   └─ index.css
├─ package.json
└─ vite.config.js / webpack.config.js






React का इस्तेमाल क्यों करें?
तेज़ और Efficient (Virtual DOM)
React Virtual DOM का इस्तेमाल करता है।
इसका मतलब है कि जब भी UI update होता है, React सिर्फ़ वही हिस्सा बदलता है जो ज़रूरी है, पूरा page reload नहीं करता।
इससे application बहुत fast चलती है।
Component Based Structure
React UI को छोटे-छोटे हिस्सों (components) में बाँट देता है।
हर component independent होता है और अलग-अलग जगह use किया जा सकता है।
इससे development आसान और organized हो जाता है।
Code Reusability
एक बार बनाए गए components को बार-बार use कर सकते हैं।
इससे समय और मेहनत दोनों बचते हैं।
Single Page Application (SPA)
React से बनी websites reload नहीं होतीं।
सिर्फ़ ज़रूरी data fetch होता है और UI update हो जाता है।
इससे user experience smooth रहता है।
Large Community & Ecosystem
React बहुत popular है।
इसके लिए tutorials, libraries, और community support आसानी से मिलता है।
अगर किसी problem में फँसें तो solution जल्दी मिल जाता है।
Easy Integration
React को दूसरी libraries या frameworks के साथ आसानी से use किया जा सकता है।
जैसे Redux, React Router, Tailwind CSS, Material UI आदि।
React में Virtual DOM कैसे काम करता है और ये Real DOM से क्यों faster है?
Simple Definition
Real DOM: Browser का actual DOM होता है। इसमें कोई भी change करना महँगा (slow) होता है क्योंकि हर update पर पूरा DOM tree को re-render करना पड़ता है।
Virtual DOM: React एक lightweight JavaScript object के रूप में DOM की copy रखता है। जब state या props बदलते हैं, React पहले Virtual DOM को update करता है → फिर पुराना और नया Virtual DOM compare (diffing) करता है → और सिर्फ वही changes real DOM में apply करता है।
इसलिए Virtual DOM directly पूरे DOM को update नहीं करता, बल्कि minimum updates real DOM में apply करता है → यही कारण है कि ये faster है।


React Fragment क्या है?
React Fragment एक wrapper है जो multiple elements को बिना extra DOM node create किए group करने देता है
<React.Fragment>
  <h1>Hello</h1>
  <p>World</p>
</React.Fragment>

<>
  <h1>Hello</h1>
  <p>World</p>
</>


Fragment क्यों ज़रूरी है?
Extra DOM nodes से बचाता है
अगर Fragment use नहीं करेंगे तो हमें <div> या कोई और wrapper tag लगाना पड़ेगा।
इससे DOM में extra elements आ जाते हैं।
इससे DOM unnecessarily भारी हो जाएगा।



Reconciliation algorithm (Diffing Algorithm) क्या होता है?
 Simple Definition
जब React की state या props बदलते हैं, तो React को decide करना होता है कि Real DOM में कौन से parts दोबारा update करने हैं।
React हर बार Virtual DOM का नया version बनाता है और उसे पुराने Virtual DOM से compare करता है।
इस comparison process को Diffing Algorithm (Reconciliation) कहते हैं।
इसका मकसद है → minimum possible changes real DOM में करना (performance optimization)।


what is the diff between ssr and csr ?
1. Client-Side Rendering (CSR)
Rendering browser (client) में होता है।
Server सिर्फ़ empty HTML + JavaScript bundle भेजता है।
Browser उस JS bundle को download करके UI generate करता है।
जब तक JS load नहीं होता, user को खाली या loader screen दिखती है।

Flow:
Request → Server
Server → Empty HTML (<div id="root"></div>) + JS bundle
Browser JS चलाता है → UI render होता है

Pros:
Application load होने के बाद transitions बहुत fast
Rich interactivity possible

Cons:
First load धीमी (JS bundle download और execute होने तक blank screen)
SEO कमजोर (क्योंकि initial HTML खाली होती है)

Server-Side Rendering (SSR)
Rendering server पर होता है।
Server पहले से ही ready HTML बनाकर browser को भेज देता है।
Browser तुरंत content दिखा देता है।
उसके बाद React hydration करके interactivity जोड़ता है।

Flow:
Request → Server
Server → Full HTML + JS bundle
Browser HTML तुरंत दिखा देता है → फिर JS hydrate करता है

Pros:
Faster First Paint (पहली बार content जल्दी दिखता है)
SEO friendly (search engine को ready HTML मिलता है)
Cons:
Server पर load ज़्यादा
Complex setup (Next.js जैसे frameworks चाहि

React में Hydration क्या है?
Hydration = Server से आए static HTML को React के JavaScript के साथ connect करना।

Hydration का मतलब है:
Server-Side Rendering (SSR) से जो static HTML browser को मिला है, React उसे फिर से "activate" करता है ताकि वो interactive बन
1. Server-Side Rendering (SSR)
Server पहले से HTML भेज देता:सके।

<div id="root">
  <h1>Hello User</h1>
  <button>Click Me</button>
</div>
ये HTML fast load हो जाएगा, लेकिन अभी button पर click करने से कुछ नहीं होगा क्योंकि कोई JavaScript attached नहीं है।
Hydration (Client-Side React Attach)
Browser में React इस HTML को "hydrate" करता है — यानी event listeners जोड़ देता है।

🔹 Hydration क्या है?
Server से भेजे गए पहले से बने (static) HTML को React की JavaScript से attach करना ताकि वह interactive बन जाए।

Context में समझें
Server-Side Rendering (SSR) में:
Server पहले से HTML generate करके browser को भेज देता है।
यह HTML static होती है, यानी दिखती तो है लेकिन interactive नहीं होती।
React JS attach करना (Hydration)
Browser में React का JS bundle load होता है।
React HTML elements से connect होता है, और अब वे interactive हो जाते हैं।

जैसे: onClick, state changes, form handling, आदि।

Why we need to do hydration process in react ?
Normal React (CSR) → HTML और JS browser में एक ही समय में generate होते हैं → Hydration की जरूरत नहीं।
Next.js या कोई SSR setup → Server पहले से HTML भेजता है → React को attach करना पड़ता है → Hydration process चाहिए।



import ReactDOM from "react-dom/client";
import App from "./App";
// hydrateRoot use होता है
ReactDOM.hydrateRoot(document.getElementById("root"), <App />);
अब <button> पर onClick event काम करने लगेगा।

Hydration = Server से आए static HTML को React के JavaScript के साथ connect करना।


Controlled और Uncontrolled Components में क्या फर्क है?
✅ Controlled Component
जब किसी form input (जैसे input, textarea, select) का value React state से control होता है, तो उसे Controlled Component कहते हैं।
मतलब → React state ही single source of truth है।
Change करने पर हम onChange से state update करते हैं।
 फायदा: Input data React के control में होता है → validation, formatting, conditionally update करना आसान है।

Uncontrolled Component
जब input का data React state में नहीं, बल्कि सीधे DOM के अंदर (default behavior) manage होता है, तो उसे Uncontrolled Component कहते हैं।
इसमें value access करने के लिए ref का use करना पड़ता है।
 फायदा: Simple forms के लिए less code. लेकिन validation और control React से करना मुश्किल।






1. what is the use of fiber in react ?
 React Fiber एक नया rendering engine है (React 16 से), जो React को rendering को छोटे-छोटे हिस्सों में बाँटकर करने देता है ताकि UI smooth रहे और important updates (जैसे typing, animation) को priority दी जा सके।
मतलब: Fiber की वजह से React अब rendering को pause, resume और priority के हिसाब से manage कर सकता है।

2. what is concurrent features in react  ?
Concurrent Features वह React की ability है जिससे React UI updates को interrupt, pause और priority के हिसाब से schedule कर सकता है। 

React अब सारे updates एक साथ block नहीं करता। ज़रूरी updates (जैसे typing, button click) पहले होंगे और भारी updates (जैसे बड़ी list render करना) background में smooth तरीके से होंगे। 
what  is Batching  updates in react ?
Batching का मतलब है एक साथ कई state updates को group करना, ताकि React सिर्फ एक बार re-render करे।
अगर component में एक साथ कई setState calls हों, तो React उन्हें batch करके DOM update को optimize करता है 
🔹 क्यों ज़रूरी है?
Multiple state updates होने पर हर update पर UI re-render हो तो performance slow हो जाती है।
Batching से React एक ही re-render में सारे updates apply कर देता है।
इससे apps smooth और fast रहती हैं।

3. how to react determine when component should be render ? 
 1. State या Props Change होने पर
React component दो main कारणों से re-render होता है:
State बदलना → अगर किसी component का useState या this.setState बदलेगा तो React उस component को दोबारा render करेगा।
Props बदलना → अगर parent से मिले props बदलते हैं तो React child component को re-render करेगा।

4. Wha is Reconciliation ?
Reconciliation वह process है जिसमें React decide करता है कि UI में कौन-कौन से हिस्से बदलने हैं जब state या props update होती हैं। 
React हर बार नया Virtual DOM बनाता है, पुराने Virtual DOM से compare करता है, और सिर्फ बदलें हुए हिस्से real DOM में update करता है। 

5.  what is the use of lazy laoidng in react ?
Lazy Loading क्या है?
Lazy Loading का मतलब होता है —
किसी Component को तभी लोड करना जब उसकी जरूरत हो।
इससे आपकी वेबसाइट या ऐप की initial loading तेज़ होती है, क्योंकि वो सिर्फ ज़रूरी चीज़ें ही पहले लोड करती है।
const MyComponent = React.lazy(() => import('./MyComponent'));
"MyComponent को अभी मत लाओ, जब जरूरत पड़ेगी तभी import करना।"

Suspense क्या है?
जब हम कोई component lazy load करते हैं, तो वो एकदम से available नहीं होता — उसे कुछ समय लगता है load होने में।
<Suspense> हमें ये सुविधा देता है कि
जब तक वो component load हो रहा है, तब तक हम एक fallback UI (जैसे "Loading...") दिखा सकें।
<Suspense fallback={<div>लोड हो रहा है...</div>}>
        <MyComponent />
</Suspense>

Lazy Loading + Suspense क्यों जरूरी हैं?
आपकी वेबसाइट तेज़ लोड होती है।
यूज़र को तुरंत दिखाने के लिए lightweight UI मिलता है।
बड़े ऐप्स में performance बेहतर होता है।

Practical Example:
मान लीजिए आपके पास एक डैशबोर्ड ऐप है जिसमें:
Home page तुरंत दिखाना है,
लेकिन Reports और Charts भारी components हैं।
तो आप ऐसे करेंगे:
const Reports = React.lazy(() => import('./Reports'));
const Charts = React.lazy(() => import('./Charts'));

<Suspense fallback={<div>लोड हो रहा है...</div>}>
  <Reports />
</Suspense>

Lazy loading सिर्फ default exports के साथ काम करता है। 

 how to you optimize large list in react ? 
React में जब आप बहुत बड़ी लिस्ट (Large List) दिखाते हैं (जैसे 1000+ आइटम्स), तो वह आपकी ऐप की performance को slow कर सकती है।
इसलिए हमें list को optimize करना पड़ता है।
React में Large List को Optimize करने के Best तरीके 

1. Windowing / Virtualization का इस्तेमाल करें 
क्या है ये?
React में हर एक लिस्ट आइटम DOM में render होता है।
 अगर लिस्ट बहुत बड़ी है, तो performance खराब हो जाती है।
Virtualization का मतलब है: 
"सिर्फ वही आइटम render करना जो user की screen पर दिख रहा है। बाकी को हटाकर memory बचाना।" 
🔧 कैसे करें?
React में इसके लिए सबसे पॉपुलर लाइब्रेरी है:
➡️ react-window
➡️ react-virtualized 
npm install react-window

2. Pagination या Infinite Scroll का Use करें 
एक बार में सिर्फ 10-20 items दिखाओ
Next/Previous से और लाओ।

Infinite Scroll:
जैसे ही user scroll करता है, नए items API से लाते रहो।
➡️ इससे performance बनी रहती है।

Memoization का इस्तेमाल करें
React में हर बार रेंडरिंग से बचने के लिए React.memo, useMemo, और useCallback का use करें।

How doest useref differ from useState ? 
React में useRef और useState दोनों ही state को manage करने के लिए use होते हैं, लेकिन इनका काम और behavior अलग है।

Difference (फर्क)
Re-render Triggering
useState → जब भी इसका value change होता है, component re-render होता है।
useRef → इसका value change होने पर component re-render नहीं होता।
Usage (उपयोग)
useState → UI में changes दिखाने के लिए। (क्योंकि re-render trigger करता है)
useRef → किसी DOM element का reference store करने या ऐसी value store करने के लिए जो re-render पर reset न हो।
Data Persistence (value बना रहता है)
दोनों ही render के बीच value को preserve रखते हैं।
फर्क बस इतना है कि useState UI को re-render करवाता है, जबकि useRef चुपचाप value update कर देता है।

🔹 Hydration क्या है?
जब React app server पर render होकर HTML के रूप में browser को भेजा जाता है, तब browser पर React client-side JavaScript load होकर उस static HTML को "interactive" बनाता है।
 यही process Hydration कहलाती है।
Server → तैयार HTML भेजता है।
Client → React DOM उस HTML को पकड़कर उसे events (onclick, onchange etc.) से connect करता है।


 
11. memo hook : ये किसी component को memoize कर देता है यानी अगर उसके props नहीं बदले हैं तो React उस component को दोबारा render नहीं करेगा। 
once we will call our child to parent and in parent we will update nay state our child will not render unasasary untill unless props will not change 

Hooks :


  import { memo } from 'react';
   const UseMemo = () => {
  console.log('child rendering ....');
  return (
    <>
      <h1> Child Component </h1>
    </>
  );
};

export default memo(UseMemo);

12.  useMemo hook : React में useMemo का काम होता है किसी महँगे calculation (expensive computation) को याद रखना (cache करना), ताकि हर बार component render होने पर वो calculation दोबारा न हो 
1 => if we have some complex calculation and it takes a lot of time to complete that calcuation so we can do one thing we can use useMemo hook it will save the value as a cache and if we are updating the state and rendering the componet that time it will return the cache value we use it for optimization after use it our app perfomnce will be increse and instant we will get the complex calcustiion result 
2==> if we are passing props like obj and function that time our child will also render so after using memo and useMemo child will not render becaue we are storing the props ( objec  ) value as a cache so child will consider props has been not changed this time !

   const obj = useMemo(() => {

        return {
          name : 'bhuvan chander joshi',
          age: 25,
          weight : '55kg'
      }
   },[])

 const getData = () => {
    let dataCount = 0;
    let i = 0;
    for (i = 0; i <= 1000; i++) {
      dataCount += i * 2;
    }
    return dataCount;
  };

  const totoal = useMemo(() => getData());
 <UseMemo  myname="Bhuvan chander joshi" obj ={obj} totoal={totoal } />

useCallback : 

useRef : 
useRef एक hook है जो किसी DOM element या किसी mutable value को direct reference की तरह store करता है।
इसका value change होने पर component re-render नहीं होता।
अक्सर इसे DOM access करने, timers, previous state store करने, या imperatively control करने के लिए use किया जाता है।

it always persist it value for example in after every render variable value will not pressit for exaple we have a var a = 0 ; we are trying to increase a value in every render but that will not happen in every render it will looose thier value !
in every render value will be 0 gain 
so the reason behind that only useRef not render the compoment if we are changing the value in like input text component will not render 

Keys क्यों ज़रूरी हैं?
React को पहचानने में मदद
 Keys React को बताती हैं कि कौन सा element नया है, कौन सा delete हुआ है, और कौन सा same रह गया है।
बिना key → React हर बार पूरी list को re-render कर सकता है।
key के साथ → React सिर्फ बदले हुए items को update करेगा।
Efficient Reconciliation (Diffing Algorithm)
 React virtual DOM में पुरानी और नई list compare करता है।
Keys unique होने पर React जल्दी पहचान लेता है कि कौन सा item कहाँ shift हुआ।
इससे performance better होती है।

Index को key बनाना avoid करें अगर list reorder हो सकती है, क्योंकि इससे UI और state mismatch हो सकता है। 
Keys React को efficiently DOM update करने, performance improve करने और UI bugs रोकने में मदद करती हैं। 

===== React mock only
StrictMode :
React में StrictMode एक special wrapper है जो development mode में कुछ potential problems को detect करने में मदद करता है।
यह extra checks run करता है ताकि आप future में bugs और unsafe patterns से बच सकें।
सिर्फ development mode में active होता है, production build में कोई effect नहीं पड़ता।

HOC function in react ?
Definition: HOC एक function है जो एक component को input में लेता है और enhanced/modified component return करता है।
Purpose: Component logic reuse और extra functionality add करने के लिए।

React DevTools :
React DevTools – Performance Analysis – Brief Description:
Definition: React DevTools एक browser extension है जो component tree, props/state, re-renders और performance analyze करने में मदद करता है।
Purpose: Slow rendering, unnecessary re-renders और performance bottlenecks identify करने के लिए।

Custom Hook :
Custom Hook एक reusable function है जो React hooks (useState, useEffect आदि) use करके common logic को multiple components में reuse करने देता है।
Purpose: Code duplication avoid करना और logic को clean रखना। 
नाम use से शुरू होना चाहिए (जैसे useFetch, useCounter)।
केवल functional components या hooks के अंदर call करें।
Hook में state, effect या अन्य hooks use किए जा सकते हैं।

useReducer :
Definition: useReducer एक React hook है जो complex state logic को manage करने के लिए use होता है।
Purpose: Multiple state transitions या nested state changes के लिए useState से बेहतर alternative।
import React, { useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
export default Counter;


useRef for DOM vs useRef for State – Brief Description:
Definition: useRef एक hook है जो mutable object return करता है।
Purpose:
DOM reference: किसी DOM element को directly access करना।
State-like storage: Component re-render बिना कोई value store करना।

 const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus(); // DOM element access
  };

<input ref={inputRef} />
<button onClick={focusInput}>Focus Input</button>


useDebugValue : 
Definition: useDebugValue hook custom hooks के debug information को React DevTools में दिखाने के लिए use होता है।
Purpose: Development में custom hooks की state या value easily inspect करने के लिए।

React DevTools में useCounter hook के value के साथ “Count is X” दिखेगा।
Production build में यह ignored होता है, केवल development mode में दिखता है।

अनावश्यक re-renders रोकने के लिए React Hooks – संक्षिप्त विवरण:
Definition: React में functional components हर बार parent re-render होने या state/props change होने पर re-render होते हैं। हम कुछ hooks और techniques use करके unnecessary re-renders रोक सकते हैं।
React.memo
Functional component को wrap करके re-render सिर्फ तब होने दें जब props बदलें।
const MyComponent = React.memo(({ name }) => <h1>{name}</h1>);
useCallback
Functions को memoize करता है ताकि child components जिन्हें function props मिले हैं, बार-बार re-render न हों।
useMemo
Expensive calculations को memoize करता है ताकि हर render पर नया calculation न हो।
useReducer
Complex state updates को predictably manage करता है; कई state updates से होने वाले unnecessary re-renders बचाता है।

Inline objects/arrays avoid करें
Inline objects/arrays हर render पर नया reference बनाते हैं → re-render trigger। useMemo से memoize करें।
const options = useMemo(() => [1,

Components को छोटे-छोटे split करें
छोटे components और memoization से unrelated parts re-render नहीं होते।

useEffect में dependency array :
Definition: useEffect में dependency array (दूसरा argument) बताता है कि effect कब चलना चाहिए।
Purpose: बिना dependency array या गलत dependencies के अनचाहे re-renders या infinite loops से बचाना।
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
Effect हर render पर चलेगा → performance problem / infinite loop हो सकता है।

Cleanup function useEffect में क्यों?
Definition: Cleanup function useEffect में return किया जाने वाला function है, जो component unmount होने या next effect run होने से पहले run होता है।
Purpose: Side effects (subscriptions, timers, event listeners) को clean और memory leak-free रखने के लिए।

setInterval एक side effect है।
Cleanup function में clearInterval call किया → timer stop होगा जब component unmount होगा।
इससे memory leaks और unwanted side effects नहीं होंगे।
Other use cases:
Event listeners remove करना → window.addEventListener / removeEventListener
Subscriptions cancel करना → WebSocket, Firebase, API streams

Multiple useState calls best practice।
Definition: React में functional components में आप एक से अधिक useState hooks use कर सकते हैं।
Purpose: State को logically separate pieces में organize करना, ताकि code readable और maintainable रहे।
Use useReducer for complex state:
Agar multiple related state variables हैं और update logic complex है → useReducer use करें।

Initialization of useState :
Lazy initialization का मतलब है कि useState का initial state value सिर्फ पहली बार component mount होने पर ही calculate हो।
Purpose: Expensive calculation या heavy computation को हर render पर avoid करना।

function ExpensiveCounter() {
  const [count, setCount] = useState(() => {
    console.log("Calculating initial state...");
    let initial = 0;
    for (let i = 0; i < 1000000; i++) {
      initial += i;
    }
    return initial;
  });

Function inside useState सिर्फ पहली बार component mount होने पर run होता है।
Normal useState(heavyCalculation()) लिखेंगे → हर render पर calculation चलेगा।
Lazy initialization से performance improve होती है।

function heavyCalculation() {
  console.log("Calculating initial state...");
  let total = 0;
  for (let i = 0; i < 1000000; i++) {
    total += i;
  }
  return total;
}
function Counter() {
  // Lazy initialization using function
  const [count, setCount] = useState(() => heavyCalculation());

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
Function inside useState सिर्फ पहली बार component mount होने पर run होता है।
Normal useState(heavyCalculation()) लिखेंगे → हर render पर calculation चलेगा।
Lazy initialization से performance improve होती है।

useEffect async function कैसे handle करें?
useEffect खुद async function नहीं हो सकता, लेकिन उसके अंदर आप async function define करके call कर सकते हैं।
Purpose: API calls, data fetching या asynchronous operations handle करने के लिए।

import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // async function define करना
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // function call
  }, []); // empty array → mount पर सिर्फ एक बार fetch

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
export default DataFetcher;

useCallback :
useCallback hook function को memoize करता है ताकि child components जो function props receive करते हैं, unnecessary re-renders न हों।
Purpose: Parent re-render होने पर same function reference use होने से child components optimized रहते हैं।

stale closure :
Stale state या stale closure तब होता है जब React component या hook के अंदर कोई variable या state पुरानी value को reference करता है, और latest value use नहीं होती।
Problem: अक्सर async operations, timers, या event handlers में latest state का access नहीं होता → bugs या unexpected behavior।
Count हमेशा initial value snapshot use कर रहा है।
Latest updates दिखाई नहीं देते → stale closure/state।

Conditional hook usage rules।
Definition: React hooks को हमेशा top-level पर call करना चाहिए, और condition, loops या nested functions के अंदर नहीं।
Purpose: React को hooks की order हमेशा same रखने में मदद करना, ताकि state और effect सही component render के साथ match हो।

can we immutable the props
हाँ, React में props inherently immutable होते हैं, यानी component उन्हें directly बदल नहीं सकता।
Props parent component से pass होते हैं।
Child component केवल read-only access करता है।

React में child component props को directly change नहीं कर सकता, क्योंकि props हमेशा immutable होते हैं।
अगर child component को उन्हें modify करना है, तो state में copy बनाकर change करना होगा।
import React, { useState } from "react";

// Child Component
function Child({ name }) {
  // props को state में copy किया
  const [localName, setLocalName] = useState(name);

  const changeName = () => {
    setLocalName("Bhuvan Updated");
  };

  return (
    <div>
      <h1>{localName}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

// Parent Component
function App() {
  return <Child name="Bhuvan" />;
}

export default App;


Lifting state up क्यों करना पड़ता है?

Definition: जब दो या दो से ज्यादा components को same data की जरूरत होती है, तो state को common parent component में रखा जाता है। इसे Lifting State Up कहते हैं।
Purpose: Data को shared, consistent और single source of truth बनाने के लिए।

Child components अलग-अलग updates कर रहे हों और same data की जरूरत हो।
Parent में state रखने से child components props के जरिए data access कर सकते हैं।




react heigher order topic =================>
useReducer में state logic reducer function में centralized होता है।
Multiple actions handle करना आसान और predictable होता है।
useRef for DOM vs useRef for state।
useImperativeHandle क्या है?
useDebugValue  ?
what is the use of useCallback with code ?
real use of Cleanup function in useEffect?
Unit testing React components (Jest + Testing Library)। 
Lazy initialization of useState।
useRef for interval or timeout।
Stale closures in useEffect।





 










High Priority Questions in react ?
Higher Order Components (HOC) क्या हैं?
How to   show large list in react ? virtualization (react-window  !!
useReducer क्या है और useState से अलग क्यों?

===================JS 
🔹 Higher Order Function (HOF) क्या है?
JavaScript में Higher Order Function वो function होता है जो:
एक या एक से ज्यादा function को argument (input) के रूप में लेता है
 या
एक नया function return करता है
👉 Simple words में:
 Function जो दूसरे function के साथ काम करता है (लेता है या return करता है) = Higher Order Function

const add = (a, b, callback) => {
  let result = a + b;
  let data = 0;
  for (let i = 0; i <= 1000; i++) {
    data += i;
  }
  callback(result + data);
};
let ShowData = (data) => {
  console.log(data);
};
add(20, 30, ShowData);

function greet(name) {
  return "Hello " + name;
}
function higherOrder(fn, value) {
  return fn(value); // fn को call कर रहा है
}
console.log(higherOrder(greet, "Bhuvan"));  
// Output: Hello Bhuvan

Example 2: Function को return करना 

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);  // factor = 2
console.log(double(5));        // 10

const triple = multiplier(3);  // factor = 3
console.log(triple(5));        // 15

Example 3: Array methods (map, filter, reduce) 
JavaScript में map, filter, reduce खुद HOF हैं, क्योंकि ये function को argument में लेते हैं।
👉 Conclusion:
 Higher Order Function = ऐसा function जो दूसरे function को argument में लेता है या return करता है।
 Common examples: map, filter, reduce, forEach, setTimeout, addEventListener।

Why Important? (क्यों ज़रूरी हैं)
Code reusable और readable बनता है।
Functional programming concepts को implement करने में मदद करता है।
Loops लिखने की ज़रूरत कम हो जाती है।

⚛️ React में Pure Component क्या होता है?
Pure Component React में ऐसा component होता है जो sirf tab re-render होता है jab uske props या state change hote हैं।
इसका मतलब — अगर data same है, तो React उसे दोबारा render नहीं करेगा।
इससे आपका app fast और efficient बनता है ⚡
⚙️ कैसे काम करता है
PureComponent React में अपने आप shouldComponentUpdate() method use करता है
और props व state का shallow comparison करता है।
मतलब — अगर पुराने और नए props/state same हैं, तो दोबारा render नहीं होगा।



 1. Ref क्या होता है (What is Ref)?
ref का मतलब है Reference —
यह React में किसी DOM element या किसी React component का direct reference (यानी सीधा link) होता है।
मतलब:
ref की मदद से हम किसी HTML element (जैसे input, div, button) को directly access कर सकते हैं — जैसे उसका value, focus, height, scroll आदि।
4. क्या हम ref को props के रूप में पास कर सकते हैं?
⚠️ सीधे नहीं!
क्योंकि ref React का special prop है — यह automatically handle होता है।
लेकिन अगर हमें किसी child component को ref देना है,
तो हमें forwardRef का use करना पड़ता है


import { useRef } from 'react';
import ChildButton from './ChildButton';

const ParentCom = () => {
  const username = useRef();
  const password = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let name = username.current.value;
    let pass = password.current.value;

    console.log(name, pass);
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <ChildButton lable="username" type="text" ref={username} />
        <ChildButton lable="passwrod" type="password" ref={password} />
        <button type="submit"> Submit </button>
      </form>
    </>
  );
};

export default ParentCom;

const ChildButton = ({ ref, lable, type }) => {
  return (
    <>
      <div>
        <label htmlFor={lable}> {lable} </label>
        <input type={type} ref={ref} />
      </div>
    </>
  );
};

export default ChildButton;




React में Lifecycle Methods (या React Life Cycle) का मतलब है —
किसी React component के बनने से लेकर हटने तक के पूरे जीवन के चरण (phases)।
हर React component का एक Life Cycle होता है —
जिसमें तीन मुख्य चरण आते हैं 👇

1️⃣ Mounting (जब component पहली बार DOM में आता है)
Component बनता है और पहली बार UI पर दिखता है।

Class Component में
componentDidMount() {
  console.log("Component Mounted");
}

🔹 Function Component में (React Hooks)

useEffect(() => {
  console.log("Component Mounted");
}, []);

काम:
API call करना
Data fetch करना
Event listener लगाना


2️⃣ Updating (जब component दोबारा render होता है)
जब state या props बदलते हैं, तो React component को update करता है।

Class Component में
componentDidUpdate(prevProps, prevState) {
  console.log("Component Updated");
}

Function Component में (React Hooks)
useEffect(() => {
  console.log("Component Updated");
});

🟢 काम:

Data को update करना
DOM change के बाद कुछ logic चलाना


3️⃣ Unmounting (जब component DOM से हटता है)
जब component screen से हट जाता है (destroy होता है)।
🔹 Class Component में
componentWillUnmount() {
  console.log("Component Unmounted");
}
examples : 
🔹 Function Component में (React Hooks)

useEffect(() => {
  return () => {
    console.log("Component Unmounted");
  };
}, []);

🟢 काम:

Cleanup करना
Event listener हटाना
Timer या interval clear करना


import React, { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component Updated:", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}


How to avoid unnecessary re-renders in state management?
Pratice about  virtualized  ? how to you optimize large list in react ? 
make a  pratice in custom hook .
try again with useReduer hooks
what is mackro and micro task in js

what is react query ans tanstack query ?

🧠 React Query क्या है?

React Query एक data-fetching library है जो हमें API से डेटा लाने (fetch), cache करने, update करने और sync करने में मदद करती है।
यह React ऐप में server state management को आसान और efficient बनाती है।

⚙️ क्यों इस्तेमाल करते हैं React Query?
React Query के बिना, हम अक्सर ऐसा कोड लिखते हैं 👇

useEffect(() => {
  fetch("https://api.example.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
}, []);


➡️ लेकिन इसमें दिक्कतें हैं:

Loading state संभालना पड़ता है
Error handling खुद करनी पड़ती है
Data caching नहीं होती
Re-fetch logic खुद लिखना पड़ता है
👉 React Query इन सब को automate कर देता है।



🚀 React Query कैसे काम करता है?
React Query के दो मुख्य hook होते हैं:
1. useQuery
डेटा read/fetch करने के लिए।

2. useMutation
डेटा create/update/delete करने के लिए।
Installation

फिर अपने app को QueryClientProvider में wrap करें 👇
QueryClientProvider → ये पूरा app को React Query की power (data caching, fetching) use करने की permission देता है।
QueryClient → ये React Query का manager है जो सभी queries का data और cache संभालता है।
new QueryClient() → इससे हम React Query का नया client (यानी नया data manager) बनाते हैं।

🚦 React Router क्या है?


loader → किसी route के load होने से पहले API या data fetch करने के लिए use होता है।
useLoaderData() → loader से आए data को component के अंदर access करने के लिए use किया जाता है।
useNavigate() → Programmatically (बटन या event से) किसी और route पर जाने के लिए use किया जाता है।
useNavigation() → यह बताता है कि अभी navigation चल रहा है या नहीं (जैसे loading state दिखाने के लिए)।

how to set lading by using react-outer-dom useNavigation hook ?
if(useNavigation.state === "loading") return <h1> Loading .... </h1>
else {
   <Header />
   <Outlet />
   <Footer />
}

🌿 ENV Variable (Environment Variable) क्या होता है?
Environment Variable वो value होती है जो आपके app के environment (जैसे development, production) के हिसाब से सेट की जाती है।
👉 मतलब — ये ऐसी values होती हैं जो code के बाहर रखी जाती हैं, ताकि sensitive data (जैसे API keys, URLs, secrets) को code में directly न लिखना पड़े।

VITE_API_key="fdfdf32d1fde"
VITE_SECRET_KEY=abcd1234

import.meta.evn.VITE_API_key

Params : it is a prop
React में params और props दोनों बहुत important हैं, लेकिन इनका use अलग-अलग purpose के लिए होता है
👉 Params का use तब होता है जब आप React Router में किसी URL से dynamic data लेना चाहते हैं।
Params = URL से dynamic data पाने का तरीका


//custom hook for debounce > useDebounce
import { useEffect, useState } from "react";
import Usestate from "../components/Usestate";

export const useDebounce  = (value, delay) => {
    
    const [debounced, setDebounced] = useState(value)

   useEffect(() => {

    const timer = setTimeout(() => {
        return setDebounced(value)
    }, delay)

    return () => clearTimeout(timer)

   }, [delay, value])

 
   return debounced
}


// searchinput 

import { useState } from "react"
import { useDebounce } from "../hooks/useDebounce"

const SearchInput = () => {

const [input, setInput] = useState("")
const debounceval = useDebounce(input, 500)

return (
    <>

        <input type="text" name="search" value={input}
         onChange={(e) => setInput(e.target.value) } />

         <h1> {debounceval} </h1>

    </>
)


}

export default SearchInput










