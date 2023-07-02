import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/form/Form.jsx'
import './App.css';

function App() {

  const [checked, setChecked] = useState(true)

  const [districts, setDistricts] = useState([]);
  const [counties, setCounties] = useState([]);
  const [parishes, setParishes] = useState([]);
  const [users, setUsers] = useState([])

  const [districtId, setDistrictId] = useState();
  const [districtName, setDistrictName] = useState();

  const [countyId, setCountyId] = useState();
  const [countyName, setCountyName] = useState()

  const [parishId, setParishId] = useState();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    district: {},
    county: {},
    parish: {}
  })

  const [display, setDisplay] = useState("display")

  const [display1, setDisplay1] = useState("display1")

  const [display2, setDisplay2] = useState("display2")

  const [display3, setDisplay3] = useState("display3")

  const genderWarning = () => {
    if(display === "display") {
      setDisplay("speech-bubble1")
    } else {
      setDisplay("display")
    }
  }

  const districtWarning = () => {
    if(display1 === "display1") {
      setDisplay1("speech-bubble2")
    } else {
      setDisplay1("display1")
    }
  }

  const countyWarning = () => {
    if(display2 === "display2") {
      setDisplay2("speech-bubble3")
    } else {
      setDisplay2("display2")
    }
  }

  const parishWarning = () => {
    if(display3 === "display3") {
      setDisplay3("speech-bubble4")
    } else {
      setDisplay3("display3")
    }
  }

  const form = () => {
    return (
       <div className="w-full flex flex-col items-start justify-center mt-2 mb-5 pl-6">
          <form
            className=" w-full pr-8"
            autoComplete="off"
          >
            <div className="w-full form__group field mb-4">
              <input
                className="form__field "
                type="input"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                value={user.firstName}
                onChange={(e) => { 
                  setUser({
                    ...user,
                    firstName: e.target.value
                  })
                }}
                required="required"
              />
              <label
                  className="form__label "
                  for="firstName"
              >
              First Name
              </label>
            </div>
            <div className="w-full form__group field mb-8">
              <input
                className="form__field "
                type="input"
                placeholder="Last Name"
                name="LastName"
                id="lastName"
                value={user.lastName}
                onChange={(e) => { 
                  setUser({
                    ...user,
                    lastName: e.target.value
                  })
                }}
                required="required"
              />
              <label
                className="form__label "
                for="lastName"
              >
              Last Name
              </label>
            </div>
            <div className="mb-4 flex justify-center items-center">
              <details class="custom-select">
                <summary class="radios">
                  <input 
                    type="radio" 
                    name="gender" 
                    id="default" 
                    title="Gender" 
                    defaultChecked={checked}
                    onChange={() => {
                      setChecked(!checked)
                    }}
                    required="required"
                  />
                  <input 
                    type="radio" 
                    name="gender" 
                    id="Male" 
                    title="Male"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        gender: e.target.title
                      })
                    }}
                  />
                  <input 
                    type="radio" 
                    name="gender" 
                    id="Female" 
                    title="Female"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        gender: e.target.title
                      })
                    }}
                  />
                  <input 
                    type="radio" 
                    name="gender" 
                    id="Transgender" 
                    title="Transgender"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        gender: e.target.title
                      })
                    }}
                  />
                  </summary>
                  <ul class="list">
                      <li
                          key={1}
                      >
                          <label for="Male">Male</label>
                      </li>
                      <li
                          key={2}
                      >
                          <label for="Female">Female</label>
                      </li>
                      <li
                          key={3}
                      >
                          <label for="Transgender">Transgender</label>
                      </li>
                  </ul>
              </details>
              <img 
                src={require("./icons/icons8-alta-importância-20.png")}
                className="cursor-pointer"
                onClick={genderWarning}
                />
            </div>
           <div className="w-full form__group field mb-8">
              <input
                className="form__field "
                type="input"
                placeholder="Age"
                name="age"
                id="age"
                value={user.age}
                onChange={(e) => {
                  setUser({
                    ...user,
                    age: e.target.value
                  })
                }}
                required="required"
              />
              <label
                className="form__label"
                for="age"
              >
              Age
              </label>
            </div>
            <div className="mb-4 flex justify-center items-center">
              <details class="custom-select" required>
                <summary class="radios" required>
                  <input 
                    type="radio" 
                    name="district" 
                    id="district" 
                    title="Districts" 
                    defaultChecked={checked} 
                    onChange={() => {
                        setChecked(!checked)
                    }}
                  />
                  {
                    districts.map((district)=> {
                      return(
                        <input 
                          type="radio"
                          name="district"
                          id={district._id}
                          title={district.districtName}
                          onChange={(e) => {
                          setUser({
                            ...user,
                            district: {
                              id: e.target.id,
                              districtName: e.target.title
                            }
                          })
                          setDistrictId(district._id)
                          setDistrictName(district.districtName)
                        }}
                        /> 
                      )
                    })
                  }
                  </summary>
                  <ul class="list">
                  {
                    districts.map((district) => {
                      return (
                        <li
                          key={district._id}
                          id={district._id}
                        >
                          <label for={district._id}> {district.districtName} </label>
                        </li>
                      )
                    })
                  }
                  </ul>
              </details>
              <img 
                src={require("./icons/icons8-alta-importância-20.png")}
                className="cursor-pointer"
                onClick={districtWarning}
                />
            </div>
            <div className="mb-4 flex justify-center items-center">
              <details class="custom-select">
                <summary class="radios">
                  <input 
                    type="radio" 
                    name="county" 
                    id="county" 
                    title="Counties" 
                    defaultChecked={checked} 
                    onChange={() => {
                        setChecked(!checked)
                    }}
                  />
                  {
                    counties.map((county)=> {
                      return(
                        <input 
                          type="radio"
                          name="county"
                          id={county._id}
                          title={county.countyName}
                          onChange={(e) => {
                          setUser({
                            ...user,
                            county: {
                              id: e.target.id,
                              countyName: e.target.title,
                              district: {
                                id: districtId,
                                districtName: districtName
                              }
                            }
                          })
                          setCountyId(county._id)
                          setCountyName(county.countyName)
                        }}
                        required
                        /> 
                      )
                    })
                  }
                  </summary>
                  <ul class="list">
                  {
                    counties.map((county) => {
                      if(districtId === county.district.id){
                        return (
                          <li
                            key={county._id}
                            id={county._id}
                          >
                            <label for={county._id}> {county.countyName} </label>
                          </li>
                        )
                      }
                    })
                  }
                  </ul>
              </details>
              <img 
                src={require("./icons/icons8-alta-importância-20.png")}
                className="cursor-pointer"
                onClick={countyWarning}
                />
            </div>
             <div className="flex justify-center items-center">
              <details class="custom-select" required>
                <summary class="radios">
                  <input 
                    type="radio" 
                    name="parish" 
                    id="parish" 
                    title="Parishes" 
                    defaultChecked={checked} 
                    onChange={() => {
                        setChecked(!checked)
                    }}
                    required
                  />
                  {
                    parishes.map((parish)=> {
                      return(
                        <input 
                          type="radio"
                          name="parish"
                          id={parish._id}
                          title={parish.parishName}
                          onChange={(e) => {
                          setUser({
                            ...user,
                            parish: {
                              id: e.target.id,
                              parishName: e.target.title,
                              county: {
                                id:countyId,
                                countyName: countyName,
                                district: {
                                  id:districtId,
                                  districtName: districtName
                                }
                              },
                            }
                          })
                          setParishId(parish._id)
                        }}
                        required
                        /> 
                      )
                    })
                  }
                  </summary>
                  <ul class="list">
                  {
                    parishes.map((parish) => {
                      if(countyId === parish.county.id) {
                        return (
                          <li
                            key={parish._id}
                            id={parish._id}
                          >
                            <label for={parish._id}> {parish.parishName} </label>
                          </li>
                        )
                      }
                    })
                  }
                  </ul>
              </details>
              <img 
                src={require("./icons/icons8-alta-importância-20.png")}
                className="cursor-pointer"
                onClick={parishWarning}
                />
            </div>
            <div className="w-full mt-10 mb-6 flex justify-center items-center">
              <button
                  className="button text-white"
                  onClick={() => {
                    axios.post("/users", user)
                  }}
              >
              Submit
              </button>
            </div>
          </form>
        </div>
    )
}

useEffect(() => { // Recolha de dados da REST API 
        axios.get("/districts")
        .then(res => {
            const districts = res.data
            setDistricts(districts)
        })

        axios.get("/counties")
        .then(res => {
          const counties = res.data
          setCounties(counties)
        })

        axios.get("/parishes")
        .then(res => {
          const parishes = res.data;
          setParishes(parishes)
        })

        axios.get("/users")
        .then(res => {
          const users = res.data;
          setUsers(users)
        })

    }, []) 

  return (
    <>
      <header>
        <h1 className="w-screen h-16 text-3xl flex justify-center items-center"> People from Portugal </h1>
      </header>
      <div className={display}>
        <p><strong>Required</strong></p>
        <p>Please, choose the gender to validate submit</p>
      </div>
      <div className={display1}>
        <p><strong>Required</strong></p>
        <p>Please, choose the district to validate submit</p>
      </div>
       <div className={display2}>
        <p><strong>Required</strong></p>
        <p>Please, choose the county to validate submit</p>
      </div>
      <div className={display3}>
        <p><strong>Required</strong></p>
        <p>Please, choose the parish to validate submit</p>
      </div>
      <div>
        <Form
          form={form()}
          users={users}
        />
      </div>
    </>
  );
}

export default App;
