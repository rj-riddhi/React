import React,{ useState} from "react";
const Contact = () => {
    const [data,newData] = useState({
        name : '',
        phone : '',
        email : '',
        msg : ''
    });

    const updateData = (evenet) => {
        const{name, value} = evenet.target;
        newData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }
    const formSubmit = (event) => {
        event.preventDefault();
        var html = 
        `name: ${data.name},
        phone: ${data.phone},
        email: ${data.email},
        msg: ${data.msg}`
        alert(html)
    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <form  onSubmit={formSubmit}>
            <div className="mb-3">
                <label >Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  name="name"
                  value={data.name}
                  onChange={updateData}
                  required
                />
              </div>
              <div className="mb-3">
                <label >Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Phone number"
                  name="phone"
                  value={data.phone}
                  onChange={updateData}
                  required
                />
              </div>
              <div className="mb-3">
                <label >Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={data.email}
                  onChange={updateData}
                  required
                />
              </div>
              <div className="mb-3">
                <label >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={updateData}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
