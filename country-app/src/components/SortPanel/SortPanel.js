import React from 'react';
import './SortPanel.scss'
function SortPanel(props) {
    const {label, onSortClick} = props;
    return (
        <div className='sort-panel-container'>
            <div className='sort-panel'>
                <div 
                    className={label && label === 'country' ? 'active' : ""}
                    onClick={()=>onSortClick('country')}>Country</div>
                <div 
                    className={label && label === 'capital' ? 'active' : ""}
                    onClick={()=>onSortClick('capital')}>Capital</div>
            </div>
        </div>
    );
}

export default SortPanel;