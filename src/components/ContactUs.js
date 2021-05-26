import React , {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Col,Row ,FormFeedback} from 'reactstrap';
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
      message: '',
      touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleBlur=this.handleBlur.bind(this);
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
  handleBlur = (field) =>(evt) =>{
    this.setState({
      touched:{...this.state.touched,[field]:true}
    });
  }
  validate(firstname,lastname,email,telnum)
  {
    const errors={
      firstname:'',
      lastname:'',
      telname:'',
      email:''
    };
    if(this.state.touched.firstname && firstname.length<3)
      errors.firstname='First name should be greater than 3';
    else if(this.state.touched.firstname && firstname.length>10)
      errors.firstname='First name should be less than 10 words';

    if(this.state.touched.lastname && lastname.length<3)
        errors.lastname='Last name should be greater than 3';
    else if(this.state.touched.lastname && lastname.length>10)
        errors.lastname='Last name should be less than 10 words';

    const reg=/^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
  }
    render(){
      const errors=this.validate(this.state.firstname,this.state.lastname,this.state.email,this.state.telnum);
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
                  <Input id="firstname" type="text" placeholder="First Name.. " name="firstname" value={this.state.firstname}
                  valid={errors.firstname===''}
                  invalid={errors.firstname !== ''}
                   onBlur={this.handleBlur('firstname')} onChange={this.handleInputChange}/>
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
             </FormGroup>
             <FormGroup row>
                <Label htmlFor="lastname" md={2}> LastName</Label>
                <Col md={10}>
                   <Input id="lastname" type="text" placeholder="Last Name.. " name="lastname" value={this.state.lastname}
                   valid={errors.lastname===''}
                   invalid={errors.lastname !== ''}
                    onBlur={this.handleBlur('lastname')} onChange={this.handleInputChange}/>
                   <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
             </FormGroup>
             <FormGroup row>
                <Label htmlFor="email" md={2}> Email</Label>
                <Col md={10}>
                  <Input id="email" type="text" placeholder="Email " name="email" value={this.state.email}
                  valid={errors.email===''}
                  invalid={errors.email !== ''}
                  onBlur={this.handleBlur('email')} onChange={this.handleInputChange}/>
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
             </FormGroup>
             <FormGroup row>
                <Label htmlFor="telname" md={2}> Phone No.</Label>
                <Col md={10}>
                  <Input id="telname" type="tel" placeholder="Phone No.. " name="telname" value={this.state.telname}
                    valid={errors.telnum===''}
                    invalid={errors.telnum !== ''}
                   onBlur={this.handleBlur('telnum')} onChange={this.handleInputChange}/>
                   <FormFeedback>{errors.telnum}</FormFeedback>
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
