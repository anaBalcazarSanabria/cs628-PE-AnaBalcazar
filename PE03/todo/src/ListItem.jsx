import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ListItem = ({index, input, deleteTask}) => {
    const [taskDescription] = useState(input);
    return (
        <Box component="section" sx={{ p: 2, border: '1px solid black', bgcolor: "lightgrey" }}>
            {taskDescription}
            <Button color='error' onClick={() => deleteTask(index)}>
                Delete
            </Button>
        </Box>
   );
}

export default ListItem;