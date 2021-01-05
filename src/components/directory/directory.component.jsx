import './directory.styles.scss'
import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from '../../redux/directory/directory.selector';
import { connect } from 'react-redux';

const Directory = ({sections})=> (
            <div className="directory-menu">
                {
                    sections.map(({id, title, imageUrl, size, linkUrl}) =>(
                        <MenuItem key={id} 
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                        linkUrl={linkUrl}
                        />
                    ))
                }
        </div>
      )
    
const mapStateToProp = () => createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProp, null)(Directory)