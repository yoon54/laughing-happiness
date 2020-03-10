import React, { useState } from 'react';
import TabsDetails from './TabsDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const listOfTabs = [
    {title: "tab 1", details: "some details 1"},
    {title: "tab 2", details: "some details 2"},
    {title: "tab 3", details: "some details 3"}
];
 
const Tabs = props => {

    const [tabs, setTab] = useState({});

    const displayTab = i => {
        setTab(listOfTabs[i]);
    }

    return (
        <>
        <fieldset>
        <div className = "btn-group btn-group-toggle" id = "top" data-toggle="buttons">
            {
                listOfTabs.map((tab, i)=>
                    <button className = 'btn btn-outline-dark btn-lg ' key = {i} onClick = {e => displayTab(i)}>{tab.title}</button>
                )
            }
        </div>
        </fieldset>
        <TabsDetails tab={tabs} />
        </>
    );
}

export default Tabs;