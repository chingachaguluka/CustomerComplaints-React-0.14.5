import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createComplaint } from '../actions/index';


class ComplaintsNew extends Component {

    //handleSubmit(formValues) {
    //    this.props.createComplaint;
    //}   

    render() {

        const { fields: {name, phone, email, branch, dateLogged, status, 
            description, resolverComments, verifierComments}, handleSubmit, createComplaint } = this.props;

        return (
            <div>
                <h3 className="text-center">Enter complaint</h3>
                <form className="form-horizontal" onSubmit={handleSubmit(this.props.createComplaint)}>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Customer's Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" {...name}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Phone(s)</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" {...phone} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" {...email} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Branch</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" {...branch} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Logging Date</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" {...dateLogged}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" {...status} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" {...description} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Comments By Resolver</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" {...resolverComments} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Comments By Verifier</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" {...verifierComments} />
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


export default reduxForm({
    form: 'ComplaintsNewForm',
    fields: ['name', 'phone', 'email', 'branch', 'dateLogged', 'status', 'description', 
    'resolverComments', 'verifierComments']
}, 
null, { createComplaint })(ComplaintsNew);

