import React from 'react';

const TabDetails = props =>{
    return (
        <fieldset>
            <p>
                Details :{props.tab.details}
            </p>
        </fieldset>
    )
}

export default TabDetails;