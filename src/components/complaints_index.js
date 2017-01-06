import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchComplaints } from '../actions/index';

class ComplaintsIndex extends Component {

    componentWillMount(){
        this.props.fetchComplaints();
    }

    renderComplaints() {
        return this.props.complaints.map((complaint) => {  
            return (
                <li className="list-group-item" key={complaint.id}>
                    
                        <div className="panel panel-body">
                            <Link to={`complaints/${complaint.id}`} >
                            <div className="panel-body">
                                <h3>{complaint.name}</h3><span className="text-xs-right">Case#: <strong>{complaint.id}</strong> </span>
                                Status: <strong>{complaint.status} </strong>Logged: <strong>{complaint.dateLogged} </strong>
                                Branch: <strong>{complaint.branch} </strong>
                            </div>
                            </Link>
                        </div>
                    
                </li>
            );

        });     
    }


    render() {
        //console.log(this.props.complaints);
        return (
            <div>
                <Link to="/complaints/new">
                    <button className="btn btn-primary">Log Complaint</button>
                </Link>

                <ul className="list-group">
                    {this.renderComplaints()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { complaints: state.complaints.all };
}

export default connect(mapStateToProps, { fetchComplaints })(ComplaintsIndex);