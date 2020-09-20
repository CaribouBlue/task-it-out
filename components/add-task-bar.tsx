import { Component, ChangeEvent, KeyboardEvent } from 'react'
import { TaskStatus } from 'types/task'

type PropType = {
}

type StateType = {
  input: string;
}

class AddTaskBar extends Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props)
    this.state = {
      input: '',
    }
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newVal = e.target.value
    this.setState({input: newVal})
  }

  handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      e.preventDefault()
      this.setState({input: ''})
    }
  }

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            placeholder="I need to task it out ..."
            aria-describedby="addTask"
            value={this.state.input}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputSubmit}
          />
        </form>
      </>
    )
  }
}

export default AddTaskBar
