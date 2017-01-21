import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createComplaint } from '../actions/index';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import DropdownList from 'react-widgets/lib/DropdownList'
import 'react-widgets/dist/css/react-widgets.css'

class ComplaintsNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit (props) {
        this.props.createComplaint(props)
            .then( () => {
                this.context.router.push('/');
            });
    }

    render() {

        const { fields: {name, phone, email, branch, dateLogged, status, 
            description, resolverComments, verifierComments}, handleSubmit, createComplaint } = this.props;

        const branches = [
            { value: 'Lilongwe', label: 'Lilongwe' },
            { value: 'Limbe', label: 'Limbe' },
            { value: 'Malangalanga', label: 'Malangalanga' },
            { value: 'Mzuzu', label: 'Mzuzu' },
        ];
        const branches1 = ['Lilongwe', 'Limbe', 'Malangalanga', 'Mzuzu'];    

        return (
            <div>
                <h3 className="text-center">Enter complaint</h3>
                <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                        <label className="col-sm-2 control-label">Branch</label>
                        <div className="col-sm-10">
                            <Select
                                name="branch1"
                                value="Lilongwe"
                                options={branches}
                            />
                        </div>    
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Branch</label>
                        <div className="col-sm-10">
                            <DropdownList
                                data={branches1}
                            />
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

                    <div className="col-sm-9 col-sm-offset-2">                    
                        <button type="submit" className="btn btn-primary">Save</button>
                        <Link to="/">
                            <button className="btn btn-danger" >Cancel</button>
                        </Link>
                    </div>
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

