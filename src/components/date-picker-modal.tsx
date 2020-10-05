import { Component, ChangeEvent, KeyboardEvent, FocusEvent } from 'react'

type PropType = {
  onClose(val: string): any,
}

type StateType = {
  input: string;
}

export class DatePickerModal extends Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props)
    this.state = {
      input: '',
    }
  }

  closeModal = (val: string) => {
    this.props.onClose(val)
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value
    this.setState({input: newVal})
  }

  handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.props.onClose(this.state.input)
    } else if (e.key === 'Escape') {
      this.closeModal('')
    }
  }

  handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    this.closeModal(this.state.input)
  }

  render() {
    return (
      <>
        <input type="date"
          autoFocus
          value={this.state.input}
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputSubmit}
          onBlur={this.handleBlur}
        />
      </>
    )
  }
}
