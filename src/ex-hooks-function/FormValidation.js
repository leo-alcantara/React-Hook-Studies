import React from 'react';
import { useForm } from 'react-hook-form';

const FormValidation = () => {
//Step 1
const {register, handleSubmit, formState:{errors}} = useForm();

const saveData = (data) => {
console.log(data);
};

    return (
        <div className="container">
         <div className="card">
             <div className="card-header bg-info">FORM</div>
             <div className="card-body">
                <form className="form-control" onSubmit={handleSubmit(saveData)}>
                    <div className="row">
                        <div className= "col">
                            <input type="text" className="form-control" placeholder="Enter Name" {...register("name", {required:true, maxLength: 20})}/>
                            {errors.name && errors.name.type === "required" && <span className="text-danger">Name is required</span>}
                            {errors.name && errors.name.type === "maxLength" && <span className="text-danger">Max Length exceeded</span>}
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Enter e-mail address" {...register("email", {required:true})}/>
                            {errors.email && <span className="text-danger">Email Address required</span>}
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-info">Submit</button>
                        </div>
                    </div>
                </form>
             </div>
         </div>   
        </div>
    );
};

export default FormValidation;