import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { fetchComplaint, updateComplaint } from '../actions/index';
import { getFormValues } from 'redux-form';




class ComplaintsUpdate extends Component {
    componentWillMount() {
        this.props.fetchComplaint(this.props.params.id);
    }

     onSaveClick(formProps) {
         //console.log("Evaluate values of form on submit")
         //console.log(this.props.formValues);
         this.props.updateComplaint(formProps, this.props.params.id);
    }


    render() {
        
        const { fields: {name, phone, email, branch, dateLogged, status, description, 
            resolverComments, verifierComments}, handleSubmit, complaint } = this.props;

        {/*if(!complaint) {
            return <div>Loading...</div>
        }*/}

       
        return (
            <div>
                <h3 className="text-center">Update complaint</h3>
                <form className="form-horizontal" onSubmit={handleSubmit(this.onSaveClick.bind(this))}>
                    <div className="form-group">
                        <label htmlFor="name" className="col-sm-2 control-label">Customer's Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" {...name}  />
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="col-sm-2 control-label">Phone(s)</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="phone" {...phone} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="email" {...email} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="branch" className="col-sm-2 control-label">Branch</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="branch" {...branch}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateLogged" className="col-sm-2 control-label">Logging Date</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="dateLogged" {...dateLogged}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status" className="col-sm-2 control-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" {...status}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="description" {...description}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="resolverComments" className="col-sm-2 control-label">Comments By Resolver</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="resolverComments" {...resolverComments}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="verifierComments" className="col-sm-2 control-label">Comments By Verifier</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="verifierComments" {...verifierComments}  />
                        </div>
                    </div>

                    <div className="col-sm-9 col-sm-offset-2"> 
                        <button type="submit" className="btn btn-primary">Save</button>
                        <Link to={`/complaints/${complaint.id}`}>
                            <button className="btn btn-danger" >Cancel</button>
                        </Link>
                    </div>
                    
                </form>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        complaint: state.complaints.complaint,
        initialValues: state.complaints.complaint
    };
}


ComplaintsUpdate = reduxForm({
  form: 'ComplaintsUpdateForm',
  fields: ['name', 'phone', 'email', 'branch', 'status',  
    'dateLogged', 'description', 'resolverComments', 'verifierComments' ]
}, mapStateToProps, { fetchComplaint, updateComplaint })(ComplaintsUpdate);

export default ComplaintsUpdate;

