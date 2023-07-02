import { useEffect, useState } from 'react';
import Users from '../usersData/UsersData'
import axios from 'axios';
import './form.css'

function Form(props) {

    return (
            <div className="w-screen divHeight flex flex-wrap justify-between items-start">
                <div className="flex flex-col flex-wrap margin border border-radius">
                    <div className="w-full flex flex-col justify-center items-center bg-cyan-600 px-24 border-radius">
                        <h2 className="flex justify-center items-center text-xl pt-4 tb-2 text-orange-200"> Survey Form </h2>
                        <p className="mt-2 text-white"> Please take a moment to fill the data bellow.</p>
                        <p className="mb-2 text-white">Thank you!</p>
                    </div>
                   {props.form}
                </div>
                <Users 
                users={props.users}
                />
            </div>
    );
}

export default Form;