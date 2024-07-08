import styles from "./BtnContainer.module.css";

const BtnContainer = ({btnClicked}) => {
  const ButtonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.btnContainer}>
{ButtonsNames.map((ButtonsName)=><button key={ButtonsName} className={styles.button} onClick={()=>btnClicked(ButtonsName)}>{ButtonsName}</button>)}

      
     
    </div>
  );
};

export default BtnContainer;
