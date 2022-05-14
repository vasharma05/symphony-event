import React from 'react';
import { useParams } from "react-router";

function EventCategoryPage(){
    const { cid } = useParams();
    let id = parseInt(cid);
    return(
        <div>
            dynamic event page for all 6 categories
        </div>
    )
}

export default EventCategoryPage;