import React, { Component } from 'react';
//import { BrowserRouter} from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import ExportToExcel from './components/ExportToExcel';
//import Content from './components/Content';
//import NavBar from './components/navBar';

class App extends Component {

        constructor(props){
        super(props);
      
        this.state = {
          posts: []
        }
      }
      
      componentDidMount(){
        const url = "http://jsonplaceholder.typicode.com/posts";
        fetch(url, {
          method: "GET"
        }).then(response => response.json()).then(posts => {
          this.setState({posts: posts})
        })
      }
      
        deleteRow(id){
          const index = this.state.posts.findIndex(post => {
            return post.id === id
          });
          
          this.state.posts.splice(index, 1);
          this.setState({posts: this.state.posts});
        }
      
        render() {
          const columns = [
            {
              Header: "User Id",
              accessor: "userId",
              style:{
                textAlign: "right"
              },
              width: 100,
              maxWidth: 100,
              minWidth: 100
            },
            {
              Header: "Id",
              accessor: "id",
              style:{
                textAlign: "right"
              },
              width: 100,
              maxWidth: 100,
              minWidth: 100
            },
            {
              Header: "Title",
              accessor: "title",
              sortable: false,
              filterable: false
            },
            {
              Header: "Body",
              accessor: "body",
              sortable: false,
              filterable: false
            },
            {
              Header: "Actions",
              Cell: props =>{
                return(
                  <button style={{backgroundColor: "red", color: "#fefefe"}}
                  onClick={() =>{
                    this.deleteRow(props.original.id);
                  }}
                  >Delete</button>
                )
              },
              sortable: false,
              filterable: false,
              width: 100,
              maxWidth: 100,
              minWidth: 100
            }
          ]
          return (
            <ReactTable
            columns={columns}
            data={this.state.posts}
            filterable
            defaultPageSize={10}
            noDataText={"Please Wait... m"}
            //showPagination={false}
            >
      
            {(state, filtredData, instance) => {
              this.reactTable = state.pageRows.map(post => { return post._original });
              return(
                <div>
                  {filtredData()}
                  <ExportToExcel posts={this.reactTable} />
                </div>
              )
            }}
      
            </ReactTable>
      
          );
  }
}

export default App;