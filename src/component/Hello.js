// const Hello = () => {
//<p>Hello<p>
//
//};
//export default Hello

import styles from "./Hello.module.css";

export default function Hello() {
    function showName() {
        console.log("Mike");
    }

    function showAge(age){
        console.log(age);
    }

    function showText(txt) {
        console.log(txt);
    }


   return (
       <div>
       <h1
         style={
             {
                 color : "#f00",
                 borderRight : "2px solid #000",
                 marginBottom: "50px",
                 opacity: 1
             }
         }
       
       >
       Hello
       </h1>
       <div className={styles.box}>Hello</div>

       <button onClick={showName}>show name</button>
       <button onClick={() =>{
           showAge(10)
       }}>show age
       </button>
       <input type="text" onChange={(e) => {
         const txt = e.target.value;
         showText(txt);
       }} />
       </div>
   )
}