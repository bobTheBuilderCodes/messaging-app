import React, { ChangeEvent, FC , useState } from 'react'

interface ITask {
    task: string ,
    deadline: number
}

const Demo: FC = () => {
    const [task , setTask] = useState("")
    const [deadline , setDeadline] = useState(0)
    const [tasks , setTasks] = useState<ITask[]>([])

    const onChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const onChangeDeadline = (e: ChangeEvent<HTMLInputElement>) => {
        setDeadline(Number(e.target.value))
    }

    const addTask  = () => {
        setTasks([...tasks , {task , deadline}])
    }


  return (
    <>
      <div style={{ background: "orange" }}>
        <h1>For Studying TS</h1>
        <input
          type="text"
          value={task}
          placeholder="What are you working on today?"
          onChange={onChangeTask}
        />
        <input type="number" value={deadline} onChange={onChangeDeadline} />
        <br />
        <button onClick={addTask}>Submit</button>
      </div>
      {
        tasks.map(({task , deadline})=>(
            <div>
                <h1>{task}</h1>
                <h1>{deadline}</h1>
            </div>
        ))
      }
    </>
  );
}

export default Demo
