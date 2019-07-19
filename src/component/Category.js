import React, { Component } from 'react';
import axios from 'axios';
import Detail from './Detail';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      detail: null,
      errMessage: null,
      loadingDetail: false,
    }
  }

  componentDidMount() {
    axios.get('https://stream-restaurant-menu-svc.herokuapp.com/category')
      .then(response => {
        this.setState({ list: response.data });
      })
      .catch(err => {
        this.setState({ errMessage: "can't get menu info "});
      });
  }

  handleClick = (shortName) => {
    this.setState({ loadingDetail: true }, () => {
      axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${shortName}`)
        .then(response => {
          this.setState({ detail: response.data});
          this.setState({ isLoading: false });
        })
        .catch(err => {
          this.setState({ errMessage: "can't load detail"});
        });
    });
  }

  render() {
    const { list, errMessage, detail, loadingDetail } = this.state;

    return (
      <div>
        <div className="page" >
          <div className="list">
            <h3>Menu Categories</h3>
            <ul>
              {
                errMessage ? 
                <div>{errMessage}</div> :
                list === null ?
                <div>...Loading</div> :
                list.map((elem, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => this.handleClick(elem.short_name)}
                    >
                      {`${elem.name} - (${elem.short_name})`}
                    </li>
                  )
                })  
              }
            </ul>
          </div>
          <div className="detail" >
            <h3>Detail</h3>
            <Detail 
              menuDetail={detail} 
              errMessage={errMessage} 
              isLoading={loadingDetail}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Category;