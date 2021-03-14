import { useState } from 'react'

const AddTasks = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text){
      alert("add task!");
    }

    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  }
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task"
        value={text} onChange={(e) => setText(e.target.value)}
        onSubmit={onSubmit}/>
      </div>

      <div className="form-control">
        <label>Time</label>
      <input type="text" placeholder="Add Time"
      value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>

      <div className="form-control form-control-check">
        <label>Remind me</label>
      <input type="checkbox" placeholder="Reminder"
      value={reminder} onChange={(e) => setReminder(e.currentTarget.check)}
      checked={reminder}/>
      </div>

      <input type="submit" value="Save Task"
      className="btn btn-block"/>
    </form>
  )
}

export default AddTasks
