import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTracker } from 'meteor/react-meteor-data';

export const Index = () => {

    const navigate = useNavigate();
    const user = useTracker(() => Meteor.user());

    useEffect(() => {
        if(!user) navigate('../login')
    }, []);
    return (

        <div>hello</div>
    )
}