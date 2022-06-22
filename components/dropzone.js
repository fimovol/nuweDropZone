import { useState } from 'react'
import styles from '../styles/Home.module.css'
export function DropZone(){
    const [archivo,setArchivo] =useState(null)
    const [drop,setDrop] =useState(false)
    const [condicion,setCondicion] =useState(false)
    const changefile = e => {
        setArchivo(e.target.files[0].name)
        setDrop(false)
    }
    function overarchivo(ev){
        setCondicion(true)
        setDrop(true)
    }
    function archivoseva(ev){
        setCondicion(false)
        setDrop(false)
    }
    return <>
    <div className={styles.filecontent} drop={drop ? "true" : "false"}>
    <input
      onDragOver={overarchivo}
      onDragLeave={archivoseva}
      className={styles.input} 
      type="file" 
      onChange={e => changefile(e)}>
      </input>
      <h1 className={styles.textodentro}>
        {condicion ?
            archivo ? `su archivo ${archivo} se subio correctamente` :"solo sueltalos aqui"
            : "arrastra tus archivos aqui"}
      </h1>
      
    </div>
    </>
}