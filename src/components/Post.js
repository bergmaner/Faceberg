import React from 'react';
import { Avatar } from '@material-ui/core';
import DropDownMenu from './DropDownMenu';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  post: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5px' 
  },
});

const Post = () => {
  
    const classes = useStyles();
    const menuConfig = {
      icon: <MoreVertIcon/>,
      class: 'link',
      items: [
        { text: 'Edit' },
        { text: 'Delete' }
      ]
    }

    return(
        <div className = 'outer'>
         <div>
            <div className = { classes.post }>
             <div style = {{ display: 'flex', alignItems: 'center' }}>
              <Avatar/>
               <div className = { classes.content }>
              <div>Kacper Berg</div>
              <div style = {{ color: 'gray' }}>6 minutes ago</div>
               </div>
             </div>
    <DropDownMenu menuConfig = { menuConfig }/>
            </div>
         </div>
         <div style = {{ marginTop: '10px' }}>Kolorowe Misiaczki dobre chłopaczki </div>
        </div>
    )
}
export default Post;