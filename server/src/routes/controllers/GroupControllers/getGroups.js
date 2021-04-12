import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// GET request
// Format:
// url params: :groupName:string
// return [JSON]: groups:[{groupID, groupName, active}] - the groupID and status of all matching groups
async function getGroupsByName(req, res) {
    const groupName = req.params.groupName;
    
    const groupQuery = await db.query(queries.getGroupsByName([groupName]));
    const { rows: groups } = groupQuery;
    
    res.json({groups});
}

// GET request
// Format:
// url params: :groupID:string
// return [JSON]: group:{groupName, active} - the groupName and status of the group from groupID
async function getGroupById(req, res) {
    const groupID = req.params.groupID;
    
    const groupQuery = await db.query(queries.getGroupsByID([groupID]));
    const { rows: group } = groupQuery;
    
    res.json({group});
}

export default { getGroupsByName, 
                 getGroupById,};