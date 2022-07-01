import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Two extends React.Component {
  constructor(props){
    super(props); 
    this.state={value:''}
    this.handleChange = this.handleChange.bind(this);
}
handleChange(event) {
    this.setState({value: event.target.value})
}  
render() {
  
  return ( 
           <div>
      <header className="box">
        <form>
          <textarea onChange={this.handleChange} name='name' value={this.state.value}></textarea>
          <textarea value={this.state.value}></textarea>
        </form>
      </header>
    </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Two/>);