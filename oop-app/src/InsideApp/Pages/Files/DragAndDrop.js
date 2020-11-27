import React, { Component } from 'react'
class DragAndDrop extends Component {
  state = {
    drag: false
  }
  dropRef = React.createRef()
  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter++
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({drag: true})
    }
  }
  handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter--
    if (this.dragCounter === 0) {
      this.setState({drag: false})
    }
  }
  handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({drag: false})
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        this.refs.file.value = ''  
      this.props.handleDrop(e.dataTransfer.files)
      e.dataTransfer.clearData()
      this.dragCounter = 0    
    }
  }
  handleImageChange = async (e) => {
    this.props.handleDrop(e.target.files)
  };
  componentDidMount() {
    let div = this.dropRef.current
    div.addEventListener('dragenter', this.handleDragIn)
    div.addEventListener('dragleave', this.handleDragOut)
    div.addEventListener('dragover', this.handleDrag)
    div.addEventListener('drop', this.handleDrop)
  }
  componentWillUnmount() {
    let div = this.dropRef.current
    div.removeEventListener('dragenter', this.handleDragIn)
    div.removeEventListener('dragleave', this.handleDragOut)
    div.removeEventListener('dragover', this.handleDrag)
    div.removeEventListener('drop', this.handleDrop)
  }
  render() {
    return (
      <div
        style={{borderWidth:1,marginBottom:10,textAlign:'center',backgroundColor:'white',borderColor:'black',justifyContent:'center'}}
        ref={this.dropRef}
      >
          <p>Drag and drop</p>
          <input ref="file" type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} />
        {this.state.dragging &&
          <div 
            style={{
              backgroundColor: 'rgba(255,255,255,.8)',

              zIndex: 9999
            }}
          >
            <div 
              style={{

                textAlign: 'center',
                color: 'grey',
                fontSize: 36
              }}
            >
              <div><p>drop here :)</p></div>
            </div>
          </div>
        }
        {this.props.children}
      </div>
    )
  }
}
export default DragAndDrop