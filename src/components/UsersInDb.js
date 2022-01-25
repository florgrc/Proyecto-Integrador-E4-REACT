import React, {Component} from "react"; 
import User  from './User';

  class UsersInDb extends Component {
        constructor(props){
            super(props)
            this.state = {
                usersList: []
            }
        }
        componentDidMount(){
            fetch("/api/users")
            .then(response => response.json())
            .then(users => {
                console.log(users)
            })
        }
       
        render(){
            return(
                <React.Fragment>
                    
                    {this.state.usersList.map((user,index) => {
                        return <User {...user} key={index} />
                    })
                    }
                </React.Fragment>
            )
        }
    }
    
    export default UsersInDb
    