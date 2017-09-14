import React from 'react';
import axios from 'axios';

class FetchDemo extends React.Component {
  state = {
    datas: []
  };

  componentDidMount() {
    //Same origin policy 때문에 크롬에서 에러 발생 COR 공부 필요
    axios.get(`http://localhost:3001/r?q=${this.props.data}`)
      .then(res => {
        const datas = res.data;
        console.log(datas);
        this.setState({ datas });
        console.log(this.state.datas);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h1>{`localhost:3001/r/${this.props.data}`}</h1>
        <ul>
          <li>{this.state.datas.data}</li>
        </ul>
      </div>
    );
  }
}

export default FetchDemo;
