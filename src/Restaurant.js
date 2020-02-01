import React,{Component} from 'react';


class Restaurant extends Component
{
    constructor(props){
    super(props)
    
    this.state={
        restName:'',
        firstName:'',
        lastName:'',
        city:'',
        state:'',
        email:'',
        number:'',
        address:'',
        error:''
        }
    }
    
    handleChange=(name)=>(event)=>{
      this.setState({error:""})
      this.setState({[name]:event.target.value})
    }

    clickSubmit=event=>{
      event.preventDefault()
      const {restName,firstName,lastName,city,state,email,phone,address}=this.state
      const Rest={
        restName,
        firstName,
        lastName,
        city,
        state,
        email,
        phone,
        address
      };
      this.restDetails(Rest).then(data=>{
        if(data.error) this.setState({error:data.error});
        else this.setState({
          error:"",
          restName:"",
        firstName:"",
        lastName:"",
        city:"",
        state:"",
        email:"",
        phone:"",
        address:""

        });
      })
    }

    restDetails=(Rest)=>{
      return fetch("http://localhost:2709/restaurant-details",{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-type":"application/json"
        },
        body:JSON.stringify(Rest)
      })
      .then(response=>{
        return response.json() 
      })
      .catch(err=>console.log(err))
    }

        
    render()
    {
        const { restName,firstName,lastName,city,state,email,phone,address ,error} = this.state
          return (
      
            <div className="main-block">
              <div className="left-part">
                <h1><b>Add A Restaurant</b></h1>
              </div> 
              <div className="alert alert-primary" style={{display:error?"":"none"}}>
                    {error}
                    </div>
              <form  onSubmit={this.Clicksubmit}>
                <div className="title">
                  <h2>Basic Info </h2>
                </div>
                <div className="info">
                  <input className="fname" type="text" name="restName" value={restName} onChange={this.handleChange("name")} placeholder="Restaurant Name" />
                  <input className="fname" type="text" name="firstName" value={firstName} onChange={this.handleChange("firstName")} placeholder="First Name" />
                  <input className="fname" type="text" name="lastName" value={lastName} onChange={this.handleChange("lastName")} placeholder="Last Name" />             
                  <input className="fname" type="text" name="city" value={city} onChange={this.handleChange("city")}placeholder="City" />
                  <input className="fname" type="text" name="state" value={state} onChange={this.handleChange("state")}placeholder="State" />
                  <input type="text" name="email" value={email} onChange={this.handleChange("email")} placeholder="Email" />
                  <input type="text" name="phone"  value={phone} onChange={this.handleChange("phone")} placeholder="Phone number" />
                  <input type="textarea" className="fname" name="address" value={address} onChange={this.handleChange("address")} placeholder="Full Address" />
                  <select>
                    <option selected>Restaurant type</option>
                    <option >Buffet Restaurants</option>
                    <option >Fast Food</option>
                    <option >Dining</option>
                    <option >Ice-Cream Parlors</option>
                    <option >Veg Restaurants</option>
                    <option >Non-Veg Restaurants</option>
                    <option >Others</option>
                  </select>
                </div>
                <div className="checkbox">
                    <br/>
                  <input type="checkbox" name="checkbox" />I agree to the <a>Privacy Policy for Delite.</a>                \
                  </div>
                <button onclick={this.Clicksubmit} type="submit">Submit</button>
              </form>
            </div>
          )
    }  
}

export default Restaurant
