import { Icon } from '@iconify/react'
import React from 'react'
import locationIcon from '@iconify/icons-mdi/fire-alert';
import LocationInfo from './LocationInfo'

const Header = () => {
  return (
    <div className='header'>
        <h1><Icon icon = {locationIcon} className="header-icon"/>DÜNYADA YANGINLAR (NASA Verileriyle)</h1>
    </div>
  )
}

export default Header