import React from 'react'
import { TABS } from '../redux/actions/type'
import { useDispatch } from 'react-redux'

import { toggleTab } from '../redux/actions'

const Tab = ({ currentTab }) => {
    const dispatch = useDispatch();
    return (
        TABS.map((tab, id) => (
            <button
                key={id}
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))}
            >
                {tab}
            </button>
        ))
    )
}

export default Tab