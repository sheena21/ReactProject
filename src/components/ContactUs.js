import React , {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
class Contact extends Component{
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      telname:'',
      email:'',
      agree: false,
      contactType: 'Tel.',
      message: ''
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);

  }
  handleSubmit(event)
  {
    console.log("Current state: " +JSON.stringify(this.state));
    alert("Current state: " +JSON.stringify(this.state));
    event.preventDefault();
  }
  handleInputChange(event)
  {
     const target=event.target;
     const value=target.type === 'checkbox' ? target.checked :target.value;
     const name=target.name;
     this.setState({
       [name]:value
     });
  }
    render(){
      return(
        <div id='container'>
          <div className="row row-content">
             <div className="col-12" className="text-center text-md-right">
                <h3>Send your feedback</h3>
             </div>
             <div className="col-12 col-md-9">
             <Form onSubmit={this.handleSubmit}>
             <FormGroup row>
                <Label htmlFor="firstname" md={2}> FirstName</Label>
                <Col md={10}>
                  <Input id="firstname" type="text" placeholder="First Name.. " name="firstname" value={this.state.firstname} onChange={this.handleInputChange}/>
                </Col>
             </FormGroup>
             <FormGroup row>
                <Label htmlFor="lastname" md={2}> LastName</Label>
                <Col md={10}>
                  <Input id="lastname" type="text" placeholder="Last Name.. " name="lastname" value={this.state.lastname} onChange={this.handleInputChange}/>
                </Col>
             </FormGroup>
             <FormGroup row>
                <Label htmlFor="email" md={2}> Email</Label>
                <Col md={10}>
                  <Input id="email" type="text" placeholder="Email " name="email" value={this.state.email} onChange={this.handleInputChange}/>
                </Col>
             </FormGroup>
             <FormGroup row>
                <Label htmlFor="telname" md={2}> Phone No.</Label>
                <Col md={10}>
                  <Input id="telname" type="tel" placeholder="Phone No.. " name="telname" value={this.state.telname} onChange={this.handleInputChange}/>
                </Col>
             </FormGroup>
             <FormGroup row>
             <Col md={{size:6, offset:2}}>
                <FormGroup check>
                  <Label check>
                   <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} /> {' '}
                      <strong> May we contact you? </strong>
                  </Label>
                </FormGroup>
             </Col>
             <Col md={{size:3 ,offset:1}}>
              <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange} >
                <option>Tel No.</option>
                <option>Email</option>
              </Input>
            </Col>
             </FormGroup>
             <FormGroup row>
                <Label htmlFor="feedback" md={2}> Your feedback</Label>
                <Col md={10}>
                  <Input id="feedback" type="text" placeholder="Your feedback.. " name="message" value={this.state.message} onChange={this.handleInputChange}/>
                </Col>
             </FormGroup>
             <FormGroup row>
              <Col md={{size:10 , offset:2}}>
               <Button type="submit" color="primary">
                Submit your Feedback
               </Button>
              </Col>
               </FormGroup>
             </Form>
             </div>

         </div>
        </div>
      );
    }

  }


 export default Contact;
