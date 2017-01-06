import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { fetchComplaint, updateComplaint } from '../actions/index';




class ComplaintsUpdate extends Component {
    componentWillMount() {
        this.props.fetchComplaint(this.props.params.id);
        console.log(this.props.complaint);
    }

    //handleSubmit() {
    //    return updateComplaint(props, this.props.params.id);
    //    console.log("Handle submit clicked...");
    //}

    render() {
        
        const { fields: {name, phone, email, branch, dateLogged, status, description, 
            resolverComments, verifierComments}, handleSubmit, complaint } = this.props;

        if(!complaint) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h4 className="text-xs-center">Log complaint</h4>
                <form className="form-horizontal" onSubmit={handleSubmit(this.props.updateComplaint(props, this.props.params.id))}>
                    <div className="form-group">
                        <label htmlFor="name" className="col-sm-2 control-label">Customer's Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" defaultValue={complaint.name}  />
                        </div>
                        {complaint.name}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="col-sm-2 control-label">Phone(s)</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="phone" defaultValue={complaint.phone}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="email" defaultValue={complaint.email}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="branch" className="col-sm-2 control-label">Branch</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="branch" defaultValue={complaint.branch}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateLogging" className="col-sm-2 control-label">Logging Date</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="dateLogging" defaultValue={complaint.dateLogged}   />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status" className="col-sm-2 control-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" defaultValue={complaint.status}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="description" defaultValue={complaint.description}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="resolverComments" className="col-sm-2 control-label">Comments By Resolver</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="resolverComments" defaultValue={complaint.resolverComments}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="verifierComments" className="col-sm-2 control-label">Comments By Verifier</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="verifierComments" defaultValue={complaint.verifierComments}  />
                        </div>
                    </div>

                    
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link to="/">
                        <button className="btn btn-danger" >Cancel</button>
                    </Link>
                    
                </form>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        complaint: state.complaints.complaint
    };
}


ComplaintsUpdate = reduxForm({
  form: 'ComplaintsUpdateForm',
  fields: ['name', 'phone', 'email', 'branch', 'status',  
    'dateLogged', 'description', 'resolverComments', 'verifierComments' ]
}, mapStateToProps, { fetchComplaint, updateComplaint })(ComplaintsUpdate);

export default ComplaintsUpdate;

