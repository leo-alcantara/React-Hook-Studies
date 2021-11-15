import React, { Fragment, useState } from 'react';

const UseStateExample = () => {

    const initialState = { firstName: "", lastName: ""};
    const [person, setPerson] = useState(initialState);

    const [showMessage, setShowMessage] = useState();
    const [showData, setShowData] = useState(false);

    const inputChangeFN = (e) => {
       const val= e.target.value;
       console.log("First Name," , val);
       let _person = {...person, firstName:val};
       setPerson(_person);
    };

    const inputChangeLN = (e) => {
        const val= e.target.value;
        console.log("Last Name:" , val);
        let _person = {...person, lastName:val};
        setPerson(_person);
    };

    const submitPerson = () => {
        console.log("#####" + person);
        if(person.firstName.length > 2 && person.lastName.length > 2){
            //call API and send the person data to backend
            setShowMessage('Operation is done');
            setShowData(true);
        } else {
            setShowMessage('Param is not valid');
            setShowData(false);
        }
    };

    const Form = () => {
        return (
            <Fragment>
            <form className="form-control">
                <div className="mb-3">
                <input type="text" className="form-control" id="firstName" name="firstName" 
                    placeholder="Enter Your First Name" value={person.firstName} onChange={inputChangeFN}/> 
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="lastName" name="lastName"
                    placeholder="Enter Your Last Name" value={person.lastName} onChange={inputChangeLN}/>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-primary" onClick={submitPerson}>Submit</button>
                </div>
            </form>
            </Fragment>

        );
    };

    const PersonInfo = () => {
        return (
            <Fragment>
                <div className="card">
                    <div className="card-header bg-info">
                        <h4>Person Information</h4>
                    </div>
                    <div className="card-body">
                        First Name: {person.firstName} - Last Name: {person.lastName}
                    </div>
                </div>
            </Fragment>
        );
    };


    return (
        <div className="container">
            {showMessage && <div className="alert alert-info">{showMessage}</div>}
            <Form/>
            {showData && <PersonInfo/>}
            
        </div>
    );
};

export default UseStateExample;