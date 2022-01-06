const Button = ({func,btn1,color,display,bgcolor,text,width,height,fontSize,borderRad})=>{
  return(
  <div>
  <button onClick={func} className={btn1} style={{color:color,display:display,backgroundColor:bgcolor,width:width,height:height,fontSize:fontSize,borderRadius:borderRad}}>{text}</button>
  </div>
  )
}



const Diff= ({bgcolor,color,margin,students})=>{
  return(
  <div>
  {students.map((value)=>{
    return(<h1 key={value.id} style={{backgroundColor:bgcolor,color:color,margin:margin}}>{value.name}
<Button  text='save' btn1='btn-1' color='white' display='block' bgcolor='red' text='click' fontSize='20px' width='20%' borderRad='8px' />
        </h1>
            )})}
  </div> 
  )
}



const Hello = ()=>{
const students = [{id:1,name:'Joe',gender:'male'},
{id:2,name:'Mary',gender:'female'},{id:3,name:'Ayo',gender:'male'}];
const func = ()=>{
{students.filter((value)=>{
  return(
  <h1>{value.gender}</h1>
  )
})}
   
  }
  return(
  <div>
  <Diff func={func} students={students} bgcolor='purple' color='white' margin='3px' />
  <h1>Hello React/Bootstrap</h1>
  </div>
  )
}

ReactDOM.render(<Hello />, document.getElementById('root'))