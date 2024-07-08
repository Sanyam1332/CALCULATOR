import styles from "./Container.module.css"


const Container=(props)=>{
return  <center>
<div className={styles.calculator}>{props.children}</div>
</center>

}
export default Container;