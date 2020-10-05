import { Component, ChangeEvent, KeyboardEvent, RefObject, createRef } from 'react'
import { Task, TaskDelimiter } from 'types/task'
import { parseTaskString } from 'services/add-task-bar'
import { DatePickerModal } from 'components/date-picker-modal'


type PropType = {
  onAddTask(task: Task): any,
}

type StateType = {
  input: string;
  openModal: any;
}

class AddTaskBar extends Component<PropType, StateType> {
  inputRef: RefObject<HTMLInputElement> = createRef();

  constructor(props: PropType) {
    super(props)
    this.state = {
      input: '',
      openModal: null,
    }
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal: string = e.target.value
    const isAnAdditiveChange: boolean = this.state.input.length < newVal.length
    if (isAnAdditiveChange) {
      const lastChar: string = newVal[newVal.length - 1]
      if (lastChar === TaskDelimiter.due) {
        this.setState({
          openModal: <DatePickerModal
          onClose={(val) => {
            this.setState({
              input: newVal + val,
              openModal: null,
            })
            this.inputRef.current && this.inputRef.current.focus()
          }}
          ></DatePickerModal>
        })
      }
    }
    this.setState({input: newVal})
  }

  handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      e.preventDefault()
      const taskString = this.state.input
      const newTask = parseTaskString(taskString)
      this.props.onAddTask(newTask)
      this.setState({input: ''})
    }
  }

  render() {
    const { openModal } = this.state
    return (
      <>
        <form>
          <input
            ref={this.inputRef}
            type="text"
            placeholder="I need to task it out ..."
            aria-describedby="addTask"
            value={this.state.input}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputSubmit}
          />
          {openModal}
        </form>
      </>
    )
  }
}

export default AddTaskBar
