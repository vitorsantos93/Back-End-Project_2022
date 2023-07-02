import React from 'react'
import '../usersData/usersData.css'

function UsersData(props) {
    
  return (
        <div className="flex flex-col margin1 justify-center items-center">
            <div className="bg-cyan-600 rounded">
                <h2 className="pt-7 pb-4 paddingTitle text-xl text-orange-200">People who submitted this form</h2>
                    <ul className="flex flex-wrap justify-start items-center">
                        <li className="paddingLi text-white"> Name </li>
                        <li className="paddingLi text-white">Gender</li>
                        <li className="paddingLi text-white">Age</li>
                        <li className="paddingLi text-white">District</li>
                        <li className="paddingLi text-white">County</li>
                        <li className="paddingLi2 text-white">Parish</li>
                    </ul>
            </div>
            <div className="w-full flex flex-row justify-start items-center">
                <ul className="">
                    <div className="width2 flex flex-col justify-center items-center text-center">
                        {
                            props.users.map(user => {
                                return (
                                    <li
                                        className="w-full text-xs borderLine paddingLiValues1"
                                        key={`${user._id}${user.firstName}`}
                                        id={`${user._id}${user.firstName}`}
                                    >
                                    {`${user.firstName} ${user.lastName}`}
                                    </li>
                                )
                            })
                        }
                    </div>
                </ul>
                <ul className="">
                    <div className="width3 flex flex-col justify-center items-center text-center">
                        {
                            props.users.map(user => {
                                return (
                                    <li 
                                        className="w-full text-xs borderLine paddingLiValues2"
                                        key={`${user._id}${user.gender}`}
                                        id={`${user._id}${user.gender}`}
                                    >
                                    {user.gender}
                                    </li>
                                )
                            })
                        }
                    </div>
                </ul>
                 <ul className="">
                    <div className="width4 flex flex-col justify-center items-center text-center">
                        {
                            props.users.map(user => {
                                return (
                                    <li
                                        className="w-full text-xs borderLine paddingLiValues3"    
                                        key={`${user._id}${user.age}`}
                                        id={`${user._id}${user.age}`}
                                    >
                                    {user.age}
                                    </li>
                                )
                            })
                        }
                    </div>
                </ul>
                <ul className="">
                    <div className="width5 flex flex-col justify-center items-center text-center">
                        {
                            props.users.map(user => {
                                return (
                                    <li
                                        className="w-full text-xs borderLine paddingLiValues4"
                                        key={`${user._id}${user.district.districtName}`}
                                        id={`${user._id}${user.district.districtName}`}
                                    >
                                    {user.district.districtName}
                                    </li>
                                )
                            })
                        }
                    </div>
                </ul>
                <ul className="">
                    <div className="width6 flex flex-col justify-center items-center text-center">
                        {
                            props.users.map(user => {
                                return (
                                    <li
                                        className="w-full text-xs borderLine paddingLiValues5"
                                        key={`${user._id}${user.county.countyName}`}
                                        id={`${user._id}${user.county.countyName}`}
                                    >
                                    {user.county.countyName}
                                    </li>
                                )
                            })
                        }
                    </div>
                </ul>
                <ul className="">
                    <div className="width flex flex-col justify-center items-center text-center">
                        {
                            props.users.map(user => {
                                return (
                                    <li
                                         className="w-full borderLine flex text-xs justify-center items-center flex-wrap paddingLiValues6"
                                        key={`${user._id}${user.parish.parishName}`}
                                        id={`${user._id}${user.parish.parishName}`}
                                    >
                                    {user.parish.parishName}
                                    </li>
                                )
                            })
                        }
                    </div>
                </ul>
            </div>
        </div>
  )
}

export default UsersData;